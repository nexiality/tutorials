let projectJson = {
  "nexialHome": "/Users/ml093043/projects/nexial/nexial-core/build/install/nexial-core",
  "name": "macros",
  "scanProjectHome": "/Users/ml093043/projects/nexial/tutorials/examples/macros",
  "scanTime": 1569349157239,
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
        },
        {
          "description": "Gather file-level metadata for a given file as JSON",
          "expects": [
            {
              "description": "The target file to inspect, in fully qualified path",
              "name": "target.file",
              "default": ""
            }
          ],
          "produces": [
            {
              "description": "The metadata of the specified file, as JSON.",
              "name": "target.file.json"
            }
          ],
          "sheet": "macros",
          "macro": "File Info"
        },
        {
          "description": "Retrieve file size (this is a trival example)",
          "expects": [
            {
              "description": "The target file to inspect, in fully qualified path",
              "name": "target.file",
              "default": ""
            }
          ],
          "produces": [
            {
              "description": "The file size of the specified target.file",
              "name": "target.file.size"
            }
          ],
          "sheet": "macros",
          "macro": "File Size"
        },
        {
          "description": "Retrieve all files that matched to specified condition",
          "expects": [
            {
              "description": "The target directory",
              "name": "target.path",
              "default": ""
            },
            {
              "description": "The file name requirement",
              "name": "target.match.by",
              "default": ""
            }
          ],
          "produces": [
            {
              "description": "Contain a list of matched files",
              "name": "target.matches"
            }
          ],
          "sheet": "macros",
          "macro": "File Listing"
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
        "name": "command-type.link.index",
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
        "name": "command-type.link.index",
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
        "name": "command-type.link.index",
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
        "name": "command-type.link.index",
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
        "name": "command-type.link.loc",
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
        "name": "command-type.link.name",
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
        "name": "command-type.link.name",
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
        "name": "command-type.link.url",
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
        "name": "command-type.link.url",
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
        "name": "command-types.count",
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
        "name": "command-types.count",
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
        "name": "command-types.loc",
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
        "name": "command-types.url",
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
        "name": "commands.list",
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
        "name": "commands.loc",
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
        "name": "commands.output",
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
        "name": "commands.output",
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
        "name": "commands.output",
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
        "name": "commands.output",
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
        "name": "commands.output",
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
        "name": "commands.output.destination",
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
        "name": "commands.output.prefix",
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
        "name": "commands.output.suffix",
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
        "name": "commands.url.list",
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
    "file1": [
      {
        "advices": [],
        "name": "file1",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 4",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "file2": [
      {
        "advices": [],
        "name": "file2",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 6",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "file3": [
      {
        "advices": [],
        "name": "file3",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 8",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "file4": [
      {
        "advices": [],
        "name": "file4",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 10",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "file5": [
      {
        "advices": [],
        "name": "file5",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 12",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "filelist": [
      {
        "advices": [],
        "name": "filelist",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 14",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "index": [
      {
        "advices": [],
        "name": "index",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 16",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "name": "index",
        "definedAs": "number.increment(var,amount)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 24",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "metadata.json": [
      {
        "advices": [],
        "name": "metadata.json",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 15",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "name": "metadata.json",
        "definedAs": "base.appendText(var,appendWith)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 21",
        "type": {
          "order": 0,
          "name": "step"
        }
      },
      {
        "advices": [],
        "name": "metadata.json",
        "definedAs": "json.beautify(json,var)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 25",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "nexial.delayBetweenStepsMs": [
      {
        "advices": [],
        "name": "nexial.delayBetweenStepsMs",
        "definedAs": "0",
        "location": "artifact/data/LoopingMacro.data.xlsx",
        "dataSheet": "#default",
        "position": "A3",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "nexial.failFast": [
      {
        "advices": [
          "\u003cb\u003eSame as Default\u003c/b\u003e This System variable is defined with the same value as \u003ca href\u003d\"#\" onclick\u003d\"return openSysVarDocWindow(\u0027nexial.failFast\u0027);\"\u003eSystem default\u003c/a\u003e and hence is not necessary."
        ],
        "name": "nexial.failFast",
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
        "name": "nexial.openResult",
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
        "name": "nexial.pollWaitMs",
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
        "advices": [
          "\u003cb\u003eDuplicate Definitions\u003c/b\u003e All defined values for this data variables are the same and hence unnecessary. Consider removing all duplicates and keeping only one definition either in \u003ccode\u003eproject.properties\u003c/code\u003e or \u003ccode\u003e#default\u003c/code\u003e data sheet."
        ],
        "name": "nexial.scope.fallbackToPrevious",
        "definedAs": "true",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A1",
        "type": {
          "order": 4,
          "name": "#default"
        }
      },
      {
        "advices": [],
        "name": "nexial.scope.fallbackToPrevious",
        "definedAs": "true",
        "location": "artifact/data/LoopingMacro.data.xlsx",
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
        "advices": [
          "\u003cb\u003eDuplicate Definitions\u003c/b\u003e All defined values for this data variables are the same and hence unnecessary. Consider removing all duplicates and keeping only one definition either in \u003ccode\u003eproject.properties\u003c/code\u003e or \u003ccode\u003e#default\u003c/code\u003e data sheet."
        ],
        "name": "nexial.scope.iteration",
        "definedAs": "1",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A2",
        "type": {
          "order": 4,
          "name": "#default"
        }
      },
      {
        "advices": [],
        "name": "nexial.scope.iteration",
        "definedAs": "1",
        "location": "artifact/data/LoopingMacro.data.xlsx",
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
        "name": "nexial.textDelim",
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
        "name": "nexial.verbose",
        "definedAs": "false",
        "location": "artifact/data/FindNexialCommands.data.xlsx",
        "dataSheet": "#default",
        "position": "A6",
        "type": {
          "order": 4,
          "name": "#default"
        }
      }
    ],
    "target.file": [
      {
        "advices": [],
        "name": "target.file",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 19",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "target.match.by": [
      {
        "advices": [],
        "name": "target.match.by",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 30",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "target.path": [
      {
        "advices": [],
        "name": "target.path",
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/LoopingMacro.xlsx",
        "dataSheet": "Scenario",
        "position": "Row 29",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ]
  }
};