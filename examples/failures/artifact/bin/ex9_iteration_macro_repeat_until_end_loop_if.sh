#!/bin/sh

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 9                                                                    ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. nexial.failFast is set to false"
echo "  2. use iteration"
echo "  3. scenario contains macro reference"
echo "  4. referenced macro contains repeat-until"
echo "  5. EndLoopIf() flow control activated when 2nd iteration and 3rd loop in repeat-until"
echo "  6. EndLoopIf() flow control activated when 3rd iteration"
echo "Then:"
echo "  1. Nexial will abort the affected repeat-until loop (2nd iteration, 33rd loop bin u)"
echo "  2. Nexial will continue with the remaining steps in referenced macro"
echo "  3. Nexial will continue with the remaining scenarios"
echo "  4. Nexial will continue to the next iteration"
echo "  5. Nexial will continue abort 3rd iteration"
echo "  6. Nexial will continue executing remaining iterations"
echo "  7. Nexial will exit with a 0 (100% PASS). Early script termination DOES NOT constitutate any error condition"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -script ../script/ScriptTest.xlsx -scenario Scenario5,Scenario3
