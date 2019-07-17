#!/bin/sh

PROJECT_HOME=$(cd `dirname $0`/../..; pwd -P)
echo "${PROJECT_HOME}"

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 1                                                                    ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. nexial.failFast is set to true ('fail-fast' mode)"
echo "  2. first scenario has a FAIL"
echo "Then:"
echo "  1. Nexial will abort the corresponding scenario"
echo "  2. Nexial will abort all subsequent scenarios due to 'fail-fast' mode"
echo "  3. Nexial will exit with a -13 (NOT_100%_PASS_RATE)"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -script "$PROJECT_HOME/artifact/script/ScenarioTest.xlsx" -scenario Scenario1,Scenario2
