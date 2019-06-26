#!/bin/sh

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 11                                                                   ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. nexial.failFast is set to true"
echo "  2. use plan"
echo "  3. first scenario of second script has a FAIL"
echo "  4. 2nd plan test is set NOT_100 to fail fast"
echo "Then:"
echo "  1. Nexial will abort the affected scenario and script"
echo "  1. Nexial will continue the subsequent plans"
echo "  3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -plan ../plan/PlanTest2.xlsx
