@echo off

set PROJECT_HOME==%~dp0..\..

echo --------------------------------------------------------------------------------
echo [ EXAMPLE 6                                                                    ]
echo --------------------------------------------------------------------------------
echo When:
echo   1. nexial.failFast is set to false
echo   2. use iteration
echo   3. first scenario has a base >> failImmediate()
echo Then:
echo   1. Nexial will abort the affected scenario
echo   1. Nexial will abort all remaining iterations
echo   3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)
echo ""
echo ""

pause

nexial.cmd -script "%PROJECT_HOME%\artifact\script\ScriptTest.xlsx" -scenario Scenario1 -datasheets Scenario1.1

