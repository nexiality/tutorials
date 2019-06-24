#!/bin/sh

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 10                                                                   ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. nexial.failFast is set to true"
echo "  2. use plan"
echo "  3. first scenario of second script has a FAIL"
echo "Then:"
echo "  1. Nexial will abort the affected scenario and script"
echo "  2. Nexial will abort with the remaining plan since fail fail is set to true"
echo "  3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -plan ~/projects/nexial/tutorials/examples/failures/artifact/plan/PlanTest.xlsx
