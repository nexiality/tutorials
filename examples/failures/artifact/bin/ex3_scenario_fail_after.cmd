@echo off

echo --------------------------------------------------------------------------------
echo [ EXAMPLE 3                                                                    ]
echo --------------------------------------------------------------------------------
echo When:
echo   1. nexial.failFast is set to false
echo   2. nexial.failAfter is set to 2 (force FAIL condition after 2 failures)
echo   3. first scenario has 2 failed steps
echo Then:
echo   1. Nexial will abort the corresponding scenario
echo   2. Nexial will abort all subsequent scenarios due to 'excessive-failure' mode
echo   3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)
echo ""
echo ""

pause

nexial.cmd -script ../script/ScenarioTest.xlsx -scenario Scenario3,Scenario2

