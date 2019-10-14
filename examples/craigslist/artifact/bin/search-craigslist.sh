#!/usr/bin/env bash

if [ -z ${NEXIAL_HOME+x} ]; then
  NEXIAL_HOME=~/projects/nexial-core
fi

if [ -z ${PROJECT_HOME+x} ]; then
  PROJECT_HOME=$(cd `dirname $0`/..; pwd -P)
fi

$NEXIAL_HOME/bin/nexial.sh -script "$PROJECT_HOME"/artifact/script/SearchCraigslist.xlsx
