# Database Automation
![logo](image/logo-x.png) &nbsp;&nbsp;&nbsp;[« Back to Previous Section](Database-Automation.md)

## Section 2: Dynamic SQL / incorporate data variable
Built within Nexial is the flexibility to dynamically construct "things" such as test data.  We 
will have a separate tutorial dedicated to that topic.  For now, we want to explore the 
possibility of constructing SQL query dynamically so that:
- our automation can react accordingly to external controls
- our automation can be reusable - like a template - towards similar scenarios
- one automation can integrate with other another automation script by utilizing the same
data variables

Throughout this tutorial, we will be using a sample [sqlite](http://www.sqlite.org/) database 
provided by the good people at [sqlitetutorial.net](http://www.sqlitetutorial.net/sqlite-sample-database/).  
As a point of reference, this sample database has the following ERD:

[![sample sqlite](image/sqlite-sample-database-diagram-color.png)](http://www.sqlitetutorial.net/sqlite-sample-database/)

The examples shown here can be found in [this script](../artifact/script/rdbms-02.xlsx) and its 
corresponding [data file](../artifact/data/rdbms-02.data.xlsx).

Now let's see some examples!

------------------------------------------------------------------------------------------------------------------------


## Example 1: Parameterizing SQL
We'll start with a simple example. With Nexial, we can construct a SQL statement with dynamic data 
fairly effortlessly.  In essense, we can use the `${...}` syntax to substitute a variable with its 
value.  For example,

| variable name | value                        |
| :------------ | :--------------------------- |
| first name    | John                         |
| last name     | Denver                       |
| full name     | `${first name} ${last name}` |

As such, and as one would expect, `${full name}` would resolve to `John Denver`.

Here's our example in action.  The data file contains 2 data sheets:

| data sheet    |  content                                            |
| :------------ | :-------------------------------------------------- |
| [#default]    | ![#default](image/rdbms-mydb.png)                   |
| [DynamicSQL1] | ![DynamicSQL1](image/rdbms-02-DynamicSQL1.data.png) |

The `supporting customer SQL` is otherwise a normal SQL, except with the use of `${...}`.  This
allows for the inclusion of dynamic data.  The said query would render as follows:

```
SELECT
	C.COMPANY                        AS CUSTOMER_COMPANY,
	C.FIRSTNAME || ' ' || C.LASTNAME AS CUSTOMER_NAME,
	C.EMAIL                          AS CUSTOMER_EMAIL,
	E.TITLE                          AS REP_TITLE,
	E.FIRSTNAME || ' ' || E.LASTNAME AS REP_NAME,
	E.EMAIL                          AS REP_EMAIL
FROM customers C, employees E
WHERE
	C.SUPPORTREPID = E.EMPLOYEEID AND
	C.COUNTRY = 'Brazil'
ORDER BY REP_NAME, CUSTOMER_NAME;
```

So now, if we would to change `customer country` to another value, like `Germany`, then the SQL
would render dynamically to the new value.

Notice that Nexial will automatically trim away the trailing semi-colon as well - a convenience 
in case you are copying a query from your favourite database editor or from another SQL file.

Our script contains a query execution and a series of assertions:<br/>
![DynamicSQL1](image/rdbms-02-DynamicSQL1.png)

First we execute the query represented by `${supporting customer SQL}`.  Then a series of 
assertions on the query result:
1. Make sure exactly 5 rows are returned
2. Make sure that `Jane Peacock`, `Steven Johnson` and `Margaret Park` are all supporting 
representatives for the Brazil customers.

Before executing the script, let's see what this query would render:<br/>
![DynamicSQL1 result](image/rdbms-02-DynamicSQL1.result.png)

So if everything goes as plan, our script would return 100% PASS.  Let's run it:

```
nexial.[sh|cmd] -script [PROJECT_HOME]/artifact/script/rdbms-02.xlsx -scenario DynamicSQL1
```

The output confirms the expected outcome:<br/>
![DynamicSQL1](image/rdbms-02-DynamicSQL1.output.png)

> **We can apply this simple technique across multiple variables and we can use the same variable
over multiple queries.** 


## Example 2: Looping Through Resultset
As an idea of what one can do with dynamic SQL, here's a slight modification to the same example:<br/>
![DynamicSQL1a](image/rdbms-02-DynamicSQL1a.script.png)

Instead of asserting query result, we can loop through the resultset to dynamically generate 
external content.  In this case, we are generating what would have been a customer-specific 
marketing email content.  By using `base|repeatUntil(steps,maxWaitMs)` command we can loop
through a series of commands, such as generating email content for each row of the resultset. The
resulting output looks something like this:<br/>
![DynamicSQL1a output](image/rdbms-02-DynamicSQL1a.output.png)

The respective email content are as follows:<br/>
![DynamicSQL1a email0](image/rdbms-02-DynamicSQL1a.output-email0.png)
![DynamicSQL1a email1](image/rdbms-02-DynamicSQL1a.output-email1.png)
![DynamicSQL1a email2](image/rdbms-02-DynamicSQL1a.output-email2.png)
![DynamicSQL1a email3](image/rdbms-02-DynamicSQL1a.output-email3.png)
![DynamicSQL1a email4](image/rdbms-02-DynamicSQL1a.output-email4.png)


## Example 3: Just-in-time WHERE clause construction
Continue the idea of generating SQL statement dynamically, we can also generate the entire WHERE 
clause, or a portion of it, dynamically.  Using flow control, we can control the test steps is
execute or to skip.  

Let's see an example:<br/>
![DynamicSQL2 data](image/rdbms-02-DynamicSQL2.data.png)

Here, the data file contains a SQL statement (named as `songs SQL`).  We have also a bunch of 
_partial WHERE clauses_:

- `mediatype where clause`: partial WHERE clause to limit the resultset to the specified media type
- `genre where clause`: partial WHERE clause to limit the resultset to specified music genre
- `album where clause`: partial WHERE clause to limit the resultset to specified album

The general idea is to append one of these _partial WHERE clauses_ to `${song SQL}` and thus modify
the impact of the said query.  In order to do so dynamically, we want to control the query 
modification via [flow control](../../documentation/flowcontrols/).

Take a look at the script:<br/>
![DynamicSQL2 script](image/rdbms-02-DynamicSQL2.script.png)

Notice the `ProceedIf(...)` statements under the **flow controls** column.  This is how you read it:

| flow control                      | read as                                                                                          |
|:----------------------------------|:-------------------------------------------------------------------------------------------------|
| `ProceedIf( ${media type} != "")` | "_If the data variable `media type` is defined with non-empty value, execute current test step_" |
| `ProceedIf( ${genre} != "")`      | "_If the data variable `genre` is defined with non-empty value, execute current test step_"      |
| `ProceedIf( ${album} != "")`      | "_If the data variable `album` is defined with non-empty value, execute current test step_"      |

Look at the data file again (above), we have a data variable `genre` defined with value `Jazz`.  So 
this means the test step with the flow control `ProceedIf( ${genre} != "")` will execute since 
`Jazz` is not non-empty value.  Whilst the test step with `ProceedIf( ${media type} != "")` will 
not execute, and the test step with `ProceedIf( ${album} != "")` will not execute either.

The end result: the following SQL will be executed:

```
SELECT
        A.TITLE,
        C.NAME,
        R.NAME,
        UNITPRICE
FROM TRACKS C, ALBUMS A, ARTISTS R
WHERE C.ALBUMID = A.ALBUMID
      AND A.ARTISTID = R.ARTISTID AND C.GENREID IN (SELECT GENREID FROM GENRES WHERE NAME LIKE '%Jazz%')
```

The last line of the above SQL comes from `${genre where clause}`.  This is in agreement with the 
executed test step, which basically combines `${songs SQL}` and `${genre where clause}` as one query.

Executing this example:
```
nexial.[sh|cmd] -script [PROJECT_HOME]/artifact/script/rdbms-02.xlsx -scenario DynamicSQL2
```

Output:<br/>
![DynamicSQL2 output](image/rdbms-02-DynamicSQL2.output.png)

Observe that the first and third commands were _SKIPPED_ since the condition in their respective 
flow control was not met.

The last command saved the output to a CSV file (excerpt below):<br/>
![DynamicSQL2 csv](image/rdbms-02-DynamicSQL2.csv.png)

And yes, they are all Jazz records! ![](image/smiley-with-shades.png)


## Example 4: 

## Example 3: Dynamic SELECT clause 


There's a much more powerful way to generate dynamic SQL using Nexial Expression.  We will cover 
this in a later tutorial.

Click on the link below to get a better understand of what we can inspect from a SELECT query.

---

Up next: [SELECT to inspect](Database-Automation-selectinspect.md)

