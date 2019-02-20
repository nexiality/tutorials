@echo off
set PATH=%PATH%;C:\tools\Charles\
start "charles" charles -headless 
timeout /T 5
