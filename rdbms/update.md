---
layout: default
title: Nexial Tutorials for Database Automation - UPDATE
permalink: /rdbms/update
---

# Database Automation

![logo](../image/logo-x.png)

<div class="site-links site-links-header">
<a class="link-previous" href="multisql.html">&laquo; Multiple SQLs</a> | 
<a class="link-next" href="expression.html">Nexial Expression &raquo;</a>
</div>


## Section 7: UPDATE database


Multiple SQL in one file, update queries can also be named

## Transaction Error

![transaction lock data](image/rdbms-07-updateerror.data.png)

![INSERT_new_customer.sql](image/rdbms-07-updateerror.sql.png)

![transaction local script](image/rdbms-07-updateerror.script.png)


![transaction local output](image/rdbms-07-updateerror.output.png)

Suppose there is concurrent access to the same table during the above test execution.  This could 
possibly lead to database failure.  In such case, sine we've defined our database without autocommit 
(see the above; `myb_update.autocommit|false`), error amidst in-progress transaction would rollback 
such transaction.  Here's how such condition would show up in test result:<br/>
![transaction local error](image/rdbms-07-updateerror.error.png)


## Collective Result

![rdmbs-07-sql](image/rdbms-07-multisql_rollback.sql.png)

![rdbms-07-multisql_rollback](image/rdbms-07-multisql_rollback.script.png)

![rdbms-07-multisql_rollback_output](image/rdbms-07-multisql_rollback.output.png)


## Transaction Support


***

<div class="site-links site-links-header">
<a class="link-previous" href="multisql.html">&laquo; Multiple SQLs</a> | 
<a class="link-next" href="expression.html">Nexial Expression &raquo;</a>
</div>
