#!/bin/sh

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 2                                                                    ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. nexial.failFast is set to false"
echo "  1. nexial.failAfter is set to 2 (force FAIL condition after 2 failures)"
echo "  2. first scenario has 3 failed steps"
echo "Then:"
echo "  1. Nexial will fail the corresponding scenario"
echo "  2. Nexial will fail all subsequent scenarios due to 'excessive-failure' mode"
echo "  3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -script ~/projects/nexial/tutorials/examples/failures/artifact/script/ScenarioTest.xlsx -scenario Scenario3,Scenario2,Scenario1

