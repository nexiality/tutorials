#!/usr/bin/env bash

# at least 3 arguments is expected
if [[ $# -lt 3 ]]; then
  echo
  echo "ERROR: No input found. Please run this script like this:"
  echo "$0 [local|DEV|QA|PROD] [-script|-plan] [location of target script or plan] ..."
  echo
  exit 243
fi

# find location of this script and this project
BIN_HOME=$(
  cd "$(dirname "$0")" || exit
  pwd -P
)
PROJECT_HOME=$(
  cd $BIN_HOME/../.. || exit
  pwd -P
)

echo "$*"
echo "BIN_HOME=$BIN_HOME"
echo "PROJECT_HOME=$PROJECT_HOME"

# check if requested project.properties exists
TARGET_PROP=$PROJECT_HOME/artifact/project.$1.properties
if [[ ! -f $TARGET_PROP ]]; then
  echo
  echo "ERROR: requested file $TARGET_PROP does not exists or is unreadable"
  echo
  exit 244
fi

# backup existing project.properties, if found

# combining local and requested project.properties

# save combined properties to project.properties file

# run nexial
if [[ "$NEXIAL_HOME" == "" ]]; then
  NEXIAL_HOME=~/projects/nexial-core
fi

shift 1
$NEXIAL_HOME/bin/nexial.sh $*

exit
