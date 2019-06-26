@echo off

echo --------------------------------------------------------------------------------
echo [ EXAMPLE 4                                                                    ]
echo --------------------------------------------------------------------------------
echo When:
echo   1. use repeat-until loop
echo   2. use EndLoopIf within repeat-until loop
echo Then:
echo   1. Nexial will abort the affected repeat-until loop
echo   2. Nexial will continue to complete current scenario and proceed to remaining scenario
echo   3. Nexial will exit with a 0 (SUCCESS)
echo ""
echo ""

pause

nexial.cmd -script ../script/ScenarioTest.xlsx -scenario Scenario4,Scenario5

