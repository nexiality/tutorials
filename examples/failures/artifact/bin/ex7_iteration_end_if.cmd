@echo off

echo --------------------------------------------------------------------------------
echo [ EXAMPLE 7                                                                    ]
echo --------------------------------------------------------------------------------
echo When:
echo   1. nexial.failFast is set to false
echo   2. use iteration
echo   3. first scenario has a EndIf() flow control
echo Then:
echo   1. Nexial will abort the affected scenario
echo   2. Nexial will abort the remaining scenarios
echo   3. Nexial will abort all remaining iterations
echo   4. Nexial will exit with a 0 (100% PASS). Early script termination DOES NOT constitutate any error condition
echo ""
echo ""

pause

nexial.cmd -script ../script/ScriptTest.xlsx -scenario Scenario2,Scenario3
