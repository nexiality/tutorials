@echo off

if "%NEXIAL_HOME%"=="" (
    set NEXIAL_HOME=C:\projects\nexial-core
)

set PROJECT_HOME=%~dp0\..\..

%NEXIAL_HOME%\bin\nexial.cmd -script %PROJECT_HOME%\artifact\script\SearchCraigslist.xlsx
