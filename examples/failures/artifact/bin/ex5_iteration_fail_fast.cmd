@echo off

echo --------------------------------------------------------------------------------
echo [ EXAMPLE 5                                                                    ]
echo --------------------------------------------------------------------------------
echo When:
echo   1. nexial.failFast is set to true ('fail-fast' mode)
echo   2. use iteration
echo   3. first scenario has a FAIL
echo Then:
echo   1. Nexial will abort the affected scenario
echo   1. Nexial will abort all remaining iterations
echo   3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)
echo ""
echo ""

pause

nexial.cmd -script ../script/ScriptTest.xlsx -scenario Scenario1

