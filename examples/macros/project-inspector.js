let projectJson = {
  "name": "macros",
  "scanTime": 1551902396345,
  "macros": [
    {
      "data": [
        {
          "description": "Inspect a Nexial commands page to collect the available commands (name and url) as a JSON array",
          "expects": [
            {
              "description": "The URL for the target command type",
              "name": "command-type.link.url",
              "default": ""
            }
          ],
          "produces": [
            {
              "description": "Data variable to combine command names and URL into JSON:\n1. combine command names and urls into CSV\n2. transpose so that we have a CSV of name and url columns\n3. convert to JSON array",
              "name": "commands.json"
            }
          ],
          "sheet": "macros",
          "macro": "Inspect Command"
        }
      ],
      "advices": [],
      "location": "artifact/script",
      "file": "MacroLibrary.xlsx"
    }
  ],
  "dataVariables": {
    "command-type.link.index": [
      {
        "advices": [],
        "definedAs": "number.increment(var,amount)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 18",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 7",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "number.increment(var,amount)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 14",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 7",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "command-type.link.loc": [
      {
        "advices": [],
        "definedAs": "css\u003dul \u003e li:nth-child(${command-type.link.index}) \u003e a",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A10",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "command-type.link.name": [
      {
        "advices": [],
        "definedAs": "web.saveText(var,locator)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 10",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "web.saveText(var,locator)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 10",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "command-type.link.url": [
      {
        "advices": [],
        "definedAs": "web.saveAttribute(var,locator,attrName)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 11",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "web.saveAttribute(var,locator,attrName)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 11",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "command-types.count": [
      {
        "advices": [],
        "definedAs": "web.saveCount(var,locator)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 5",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "web.saveCount(var,locator)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 5",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "command-types.loc": [
      {
        "advices": [],
        "definedAs": "css\u003dul \u003e li \u003e a",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A9",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "command-types.url": [
      {
        "advices": [],
        "definedAs": "https://nexiality.github.io/documentation/commands/",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A8",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "commands.list": [
      {
        "advices": [],
        "definedAs": "web.saveTextArray(var,locator)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 14",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "commands.loc": [
      {
        "advices": [],
        "definedAs": "css\u003d#available-commands + ul \u003e li \u003e a",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A13",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "commands.output": [
      {
        "advices": [],
        "definedAs": "base.appendText(var,appendWith)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 12",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "base.appendText(var,appendWith)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 16",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 6",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "base.appendText(var,appendWith)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 13",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands-via-macro",
        "position": "Row 6",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "commands.output.destination": [
      {
        "advices": [],
        "definedAs": "$(syspath|out|fullpath)/commands.json",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A14",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "commands.output.prefix": [
      {
        "advices": [],
        "definedAs": "{ \"commands\": [",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A11",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "commands.output.suffix": [
      {
        "advices": [],
        "definedAs": "] }",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A12",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "commands.url.list": [
      {
        "advices": [],
        "definedAs": "web.saveAttributeList(var,locator,attrName)",
        "location": "artifact/script/FindNexialCommands.xlsx",
        "dataSheet": "harvest-commands",
        "position": "Row 15",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "nexial.failFast": [
      {
        "advices": [
          "\u003cb\u003eSame as Default\u003c/b\u003e This System variable is defined with the same value as \u003ca href\u003d\"#\" onclick\u003d\"return openSysVarDocWindow(\u0027nexial.failFast\u0027);\"\u003eSystem default\u003c/a\u003e and hence is not necessary."
        ],
        "definedAs": "false",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A4",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.openResult": [
      {
        "advices": [],
        "definedAs": "true",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A7",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.pollWaitMs": [
      {
        "advices": [],
        "definedAs": "800",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A3",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.scope.fallbackToPrevious": [
      {
        "advices": [],
        "definedAs": "true",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A1",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.scope.iteration": [
      {
        "advices": [],
        "definedAs": "1",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A2",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.textDelim": [
      {
        "advices": [],
        "definedAs": "|",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A5",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.verbose": [
      {
        "advices": [
          "\u003cb\u003eSame as Default\u003c/b\u003e This System variable is defined with the same value as \u003ca href\u003d\"#\" onclick\u003d\"return openSysVarDocWindow(\u0027nexial.verbose\u0027);\"\u003eSystem default\u003c/a\u003e and hence is not necessary."
        ],
        "definedAs": "false",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A6",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ]
  }
};