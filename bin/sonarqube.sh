#!/bin/bash
FILE=sonar-project.properties
if !([ -f "$FILE" ]); then
  echo "⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️"
  echo ""
  echo "    Please create file sonar-project.properties  "
  echo ""
  echo "⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️"
  exit 110
else
  find=$(grep -m1 "" ${FILE} | cut -d= -f 1)

  if !([[ $find == "sonar.projectKey" ]]); then
    echo "⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️"
    echo ""
    echo "    Please config file sonar-project.properties  "
    echo ""
    echo "⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️"
    exit 110
  else
    echo "################################################"
    echo "############## SONARQUBE SUCCESS ###############"
    echo "################################################"
  fi
fi
