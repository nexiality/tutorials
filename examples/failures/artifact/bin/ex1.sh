#!/bin/sh

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 1                                                                    ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. nexial.failFast is set to true ('fail-fast' mode)"
echo "  2. first scenario has a FAIL"
echo "Then:"
echo "  1. Nexial will fail the corresponding scenario"
echo "  2. Nexial will fail all subsequent scenarios due to 'fail-fast' mode"
echo "  3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -script ~/projects/nexial/tutorials/examples/failures/artifact/script/ScenarioTest.xlsx

