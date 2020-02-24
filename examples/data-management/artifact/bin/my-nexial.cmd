@echo off
setlocal enableextensions

REM at least 3 arguments is expected
if "%3"=="" goto invalid_input

REM find location of this script and this project
SET PROJECT_BIN_HOME=%~dp0..
SET PROJECT_HOME="%PROJECT_BIN_HOME%/../.."
SET PROJECT_PROP="%PROJECT_HOME%/artifact/project.properties"
SET LOCAL_PROP="%PROJECT_HOME%/artifact/project.local.properties"
SET TARGET_PROP="%PROJECT_HOME%/artifact/project.%1.properties"

REM check if requested project.properties exists
if not exist %TARGET_PROP% (
  echo.
  echo ERROR: requested file %TARGET_PROP% does not exists or is unreadable
  echo.
  exit /B 244
)

REM backup existing project.properties, if found
if exist %PROJECT_PROP% (
  echo moving existing project.properties to project.properties.BAK
  move %PROJECT_PROP% %PROJECT_PROP%.BAK
)

REM combining local and requested project.properties
REM save combined properties to project.properties file
if %LOCAL_PROP%==%TARGET_PROP% (
  echo copy %LOCAL_PROP% to %PROJECT_PROP%
  cat "$TARGET_PROP" >"$PROJECT_PROP"
) else (
  echo copy %LOCAL_PROP% and %TARGET_PROP% to %PROJECT_PROP%
  cat "$LOCAL_PROP" "$TARGET_PROP" >"$PROJECT_PROP"
)

REM run nexial
echo "running Nexial..."
if "%NEXIAL_HOME%"=="" (
  set NEXIAL_HOME=C:\projects\nexial-core
)

shift 1
%NEXIAL_HOME%/bin/nexial.sh $*

goto end


:invalid_input
    echo.
    echo ERROR: Invalid input. Please run this script like this:
    echo %0 [ local ^| DEV ^| QA ^| PROD ] [ -script ^| -plan ] [ location of target script or plan ] ...
    echo.
    exit /B 243

:end
    exit
