let projectJson = {
  "name": "external-program",
  "scanTime": 1551902517317,
  "macros": [
    {
      "data": [
        {
          "expects": [],
          "produces": [],
          "sheet": "MacroLibrary",
          "macro": "sample_greetings"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "OpenMail"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "OpenMail-SSO"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "DeleteMail"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "Login"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "SaveLink"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "SaveLink-reg"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "SaveLink-reuse"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "OpenMail-reg"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "Login-reg"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Mailinator",
          "macro": "SaveLink-SSO"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNormal"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNumber"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertSymbol"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "Assert9char"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertUpperLower"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNumberSymbol"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNumberLower"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNumberUpper"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNumberLetter"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertNumberLetterSymbol"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "CharValidation",
          "macro": "AssertALL"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "mfaLogin",
          "macro": "Login"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Yahoo",
          "macro": "OpenMail"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Yahoo",
          "macro": "DeleteMail"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Yahoo",
          "macro": "Login"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Yahoo",
          "macro": "SaveLink"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Gmail",
          "macro": "OpenMail"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Gmail",
          "macro": "DeleteMail"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Gmail",
          "macro": "Login-chrome"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Gmail",
          "macro": "SaveLink"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "Gmail",
          "macro": "Login"
        },
        {
          "expects": [],
          "produces": [],
          "sheet": "admin-padding",
          "macro": "Padding"
        }
      ],
      "advices": [
        "One or more macro is found without description. It is recommended for each macro implementation to have some usage documentation, along with the data variable(s) it expects prior to invocation and the data variable(s) it produces after invocation. For more details, please check out \u003ca href\u003d\"http://nexiality.github.io/documentation/commands/macro/\" target\u003d\"_nexial\"\u003eMacro Commands\u003c/a\u003e."
      ],
      "location": "artifact/script",
      "file": "nexial-macro.xlsx"
    },
    {
      "data": [
        {
          "description": "Execute an external program (${external.program.cmdline}) without waiting for it to terminate. After the target program is executed, Nexial will proceed with the remaining execution.\nCheck ${nexial.lastOutputLink} for program output.\nThis macro also added 2 second of wait time after executing target program.",
          "expects": [
            {
              "description": "the fully qualified path of the external program to execute",
              "name": "external.program.cmdline",
              "default": ""
            }
          ],
          "produces": [],
          "sheet": "MacroLibrary",
          "macro": "execute-no-wait"
        },
        {
          "description": "Execute an external program (${external.program.cmdline}). Check ${nexial.lastOutputLink} for program output.",
          "expects": [
            {
              "description": "the fully qualified path of the external program to execute",
              "name": "external.program.cmdline",
              "default": ""
            }
          ],
          "produces": [],
          "sheet": "MacroLibrary",
          "macro": "execute-wait-terminate"
        },
        {
          "description": "Find the process ID (pid) of an active process (${external.program.execname}).",
          "expects": [
            {
              "description": "file name of an active process/program",
              "name": "external.program.execname",
              "default": ""
            }
          ],
          "produces": [
            {
              "description": "",
              "name": "external.program.pid"
            }
          ],
          "sheet": "MacroLibrary",
          "macro": "find-executable-pid"
        },
        {
          "description": "Terminate an active process/program via its process ID (${external.program.pid}). Check ${nexial.lastOutputLink} for console output.",
          "expects": [
            {
              "description": "process ID of the target process",
              "name": "external.program.pid",
              "default": ""
            }
          ],
          "produces": [],
          "sheet": "MacroLibrary",
          "macro": "terminate-executable"
        },
        {
          "description": "Terminate an active process/program via the program name (${external.program.execname}). Check ${nexial.lastOutputLink} for console output.",
          "expects": [
            {
              "description": "executable file name of the target process",
              "name": "external.program.execname",
              "default": ""
            }
          ],
          "produces": [],
          "sheet": "MacroLibrary",
          "macro": "terminate-executable-by-name"
        }
      ],
      "advices": [],
      "location": "artifact/script",
      "file": "external-programs.xlsx"
    }
  ],
  "dataVariables": {
    "BatFile": [
      {
        "advices": [],
        "definedAs": "$(syspath|data|fullpath)\\MyBatch.bat",
        "location": "artifact/data/RunDownloadSessionBat.data.xlsx",
        "dataSheet": "RunBat",
        "position": "A1",
        "type": {
          "order": 3,
          "name": "datasheet"
        }
      }
    ],
    "LongRunningBat": [
      {
        "advices": [
          "\u003cb\u003eDuplicate Definitions\u003c/b\u003e All defined values for this data variables are the same and hence unnecessary. Consider removing all duplicates and keeping only one definition either in \u003ccode\u003eproject.properties\u003c/code\u003e or \u003ccode\u003e#default\u003c/code\u003e data sheet."
        ],
        "definedAs": "$(syspath|data|fullpath)\\LongRunningBackgroundJob.bat",
        "location": "artifact/data/RunDownloadSessionBat.data.xlsx",
        "dataSheet": "RunBackgroundBat",
        "position": "A1",
        "type": {
          "order": 3,
          "name": "datasheet"
        }
      },
      {
        "advices": [],
        "definedAs": "$(syspath|data|fullpath)\\LongRunningBackgroundJob.bat",
        "location": "artifact/data/RunDownloadSessionBat.data.xlsx",
        "dataSheet": "RunBackgroundBat2",
        "position": "A1",
        "type": {
          "order": 3,
          "name": "datasheet"
        }
      }
    ],
    "charles_pid": [
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/RunDownloadSessionBat.xlsx",
        "dataSheet": "RunBackgroundBat",
        "position": "Row 9",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "charles_taskdetail": [
      {
        "advices": [],
        "definedAs": "io.readFile(var,file)",
        "location": "artifact/script/RunDownloadSessionBat.xlsx",
        "dataSheet": "RunBackgroundBat",
        "position": "Row 8",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "external.program.cmdline": [
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/RunDownloadSessionBat.xlsx",
        "dataSheet": "RunBat_Macros",
        "position": "Row 4",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "external.program.execname": [
      {
        "advices": [],
        "definedAs": "base.save(var,value)",
        "location": "artifact/script/RunDownloadSessionBat.xlsx",
        "dataSheet": "RunBat_Macros",
        "position": "Row 7",
        "type": {
          "order": 0,
          "name": "step"
        }
      }
    ],
    "startup": [
      {
        "advices": [],
        "definedAs": "url\u003dwhatever this is, it\u0027s fine",
        "location": "artifact/project.properties",
        "dataSheet": "",
        "position": "",
        "type": {
          "order": 2,
          "name": "project.properties"
        }
      }
    ]
  }
};