# Database Automation

## Introduction
Just to be clear: automation may or may not be related to testing.  Certainly test automation is 
greatly desired due to its myriad of benefits.  But automation can include tasks that provides no 
intrinsic value towards product quality or test coverage.  Depending on how the script is set up, 
Sentry can be used for just _automation_ or for test automation.

Sentry provides a set of capabilities that interact with target database to extract, manipulate and 
validate its data.  Speaking of database, we are referring only to RDBMS.  Sentry has other 
capabilities dealing with Mongo, which will be separately discussed.

## Setup
First thing we need to do is to set up _profile_ for each database connectivity we need.  To do 
that, we would add connection details in data file, like this:

![database connectivity](resources/db-setup.png)

Here, we have 3 distinct database profiles specified:
- `qapay01`
- `ngpdb`
- `isam`

You can differentiate them by how these profile names are used as prefix to a set of data variables.  
This is the approach in Sentry to create complex data grouping, where an arbitrary "prefix" groups
a series of configuration together.  In this case, a database connection profile consists a set of 
data variables with the same 'prefix':

```
<PROFILE>.type       = postgresql|mysql|sqlserver|oracle|db2|isam
<PROFILE>.url        = jdbc:... ...
<PROFILE>.user       = ...
<PROFILE>.password   = ...
<PROFILE>.automcommit= ...
<PROFILE>.treatNullAs= ...
```

Check out [rdbms](https://confluence.ep.com/display/QA/rdbms) for more details.


Note that `.type`, `.url`, `.user`, and `.password` are **REQUIRED**.

You can create as many profiles as you need to.  Make sure they are unique and contains no dot (`.`).
Also, as a convinience, it might be best to put all these profiles in the `#default` data sheet so
that they can utilize by any test scenario.


***


### TODO
1)	Intro / Setup
2)	Dynamic SQL / incorporate data variable
3)	SELECT to inspect
4)	SELECT to validate
5)	SELECT to CSV / bulk comparison
6)	Query metadata
7)	Flow control through query resultset and metadata
8)	UPDATE database via SQL
9)	Transaction support
10)	Executing multiple SQLs / Execution SQL file
11)	Sentry Expression for database automation 
12)	Bulk generate SQL via "template"

