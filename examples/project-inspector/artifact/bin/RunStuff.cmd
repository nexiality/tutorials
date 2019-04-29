@echo off

REM sentry prefix is to label the sentry output folder to ...
set JAVA_OPT=-Dsentry.runID.prefix=Regression_Validation

REM Execute the Sentry validation of ....
cd %NEXIAL_HOME%\bin
sentry.cmd -plan C:\projects\Validation\artifact\plan\ABC.xlsx -override nexial.textDelim=, ^
    -override mycompany=ABC, Inc.

