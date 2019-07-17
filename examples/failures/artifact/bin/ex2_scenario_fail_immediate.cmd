@echo off

set PROJECT_HOME==%~dp0..\..

echo --------------------------------------------------------------------------------
echo [ EXAMPLE 2                                                                    ]
echo --------------------------------------------------------------------------------
echo When:
echo   1. nexial.failFast is set to false
echo   2. first scenario has a base >> failImmediate() command
echo Then:
echo   1. Nexial will abort the corresponding scenario
echo   2. Nexial will abort all subsequent scenarios due to 'fail-immediate' mode
echo   3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)
echo ""
echo ""

pause

nexial.cmd -script "%PROJECT_HOME%\artifact\script\ScenarioTest.xlsx" -scenario Scenario2,Scenario3
