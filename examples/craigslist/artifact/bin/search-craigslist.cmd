@echo off

if "%NEXIAL_HOME%"="" then (
    set NEXIAL_HOME=C:\projects\nexial-core
)

if "%PROJECT_HOME%"="" then (
    set PROJECT_HOME=%~dp0
)

%NEXIAL_HOME%\bin\nexial.cmd -script %PROJECT_HOME%\artifact\script\SearchCraigslist.xlsx
