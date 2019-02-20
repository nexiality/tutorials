let projectJson = {
  "name": "macros",
  "scanTime": 1550694355924,
  "macros": [
    {
      "data": [
        {
          "description": "Inspect a Nexial commands page to collect the available commands (name and url) as a JSON array",
          "expects": [
            {
              "description": "The URL for the target command type",
              "name": "command-type.link.url",
              "default": "(empty)"
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
  ]
};