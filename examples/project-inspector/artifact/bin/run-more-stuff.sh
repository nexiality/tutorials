#!/usr/bin/env bash

export JAVA_OPT=-Deverybody.wants.to=rule.the.world -Dtears4=fears -Dcountry=norway \
    -Dera="long long time ago"
$NEXIAL_HOME/bin/nexial.sh -script ../script/FindNexialCommand.xlsx -override url=http://www.google.com \
    -override nexial.failFast=true

