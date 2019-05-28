## AWS.SQS Examples

### Example 1

#### On Terminal 1 (main control)
1. Open terminal to `${NEXIAL_HOME}/bin`
2. run `cd - ; cd - ; ./nexial.sh -script ~/projects/nexial/tutorials/examples/sqs/artifact/script/LocalScript.xlsx -scenario random-render -override nexial.quiet=true`

#### On Terminal 2 (number adder)
1. Open terminal to `${NEXIAL_HOME}/bin`
2. run `cd - ; cd - ;./nexial.sh -script ~/projects/nexial/tutorials/examples/sqs/artifact/script/RemoteScript1.xlsx -scenario add -override nexial.quiet=true`

#### On Terminal 3 (calc reporter)
1. Open terminal to `${NEXIAL_HOME}/bin`
2. run `cd - ; cd - ; ./nexial.sh -script ~/projects/nexial/tutorials/examples/sqs/artifact/script/RemoteScript1.xlsx -scenario tally -override nexial.quiet=true`

After all the automation completed, observe back in Terminal 1 the final tally in JSON.

-----

### Example 2
#### On Terminal 1 (main control)
1. Open terminal to `${NEXIAL_HOME}/bin`
2. run `cd - ; cd - ; ./nexial.sh -script ~/projects/nexial/tutorials/examples/sqs/artifact/script/LocalScript.xlsx -scenario remote-control -interactive`
3. run first activity: `5 1`, then `x`
4. this will activate `step >> observe()` command

#### On Terminal 2 (remote web automation)
1. Open terminal to `${NEXIAL_HOME}/bin`
2. run `cd - ;cd - ; ./nexial.sh -script ~/projects/nexial/tutorials/examples/sqs/artifact/script/RemoteScript2.xlsx -interactive`
3. run first activity: `5 1`, then `x`

Back to Terminal 1, enter the following:
```
open|http://www.google.com
type|name=q|"Nexial Automation" LinkedIn
click|name=btnK
click|(//div[@class="r"]/a)[1]

open|http://www.google.com
type|name=q|"joon jung" VP QA Entertainment Partners
click|name=btnK
click|(//div[@class="r"]/a)[1]
read-text|css=.personGeneral
read-text|css=.personCompanyInfo .personCompanyInfo_section:first-of-type

shutdown
```

Observe how Terminal 2 is reacting to the instructions entered to Terminal 1. Turn up your speaker! ;-)

-----

### Example 3
#### On Terminal 2 (remote web automation)
1. Open terminal to `${NEXIAL_HOME}/bin`
2. run `cd - ;cd - ; ./nexial.sh -script ~/projects/nexial/tutorials/examples/sqs/artifact/script/remote-craigslist.xlsx -interactive`
3. run first activity: `5 1`, then `x`
