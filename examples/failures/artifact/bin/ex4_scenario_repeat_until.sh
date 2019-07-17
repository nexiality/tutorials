#!/bin/sh

PROJECT_HOME=$(cd `dirname $0`/../..; pwd -P)
echo "${PROJECT_HOME}"

echo "--------------------------------------------------------------------------------"
echo "[ EXAMPLE 4                                                                    ]"
echo "--------------------------------------------------------------------------------"
echo "When:"
echo "  1. use repeat-until loop"
echo "  2. use EndLoopIf within repeat-until loop"
echo "Then:"
echo "  1. Nexial will abort the affected repeat-until loop"
echo "  2. Nexial will continue to complete current scenario and proceed to remaining scenario"
echo "  3. Nexial will exit with a 0 (SUCCESS)"
echo ""
echo ""

read -n 1 -s -r -p "Press any key to continue"

nexial.sh -script "$PROJECT_HOME/artifact/script/ScenarioTest.xlsx" -scenario Scenario4,Scenario5
