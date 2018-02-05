# Database Automation

![logo](image/logo-x.png)

<div class="site-links site-links-header">
<a class="link-previous" href="Database-Automation-transaction.html">&laquo; Transaction Support</a> | 
<a class="link-next" href="Database-Automation-expression.html">Nexial Expression &raquo;</a>
</div>


## Section 10: Multiple SQLs


## SELECT one, SELECT all
Nexial supports both the execution of a single SQL or multiple SQL statements. We've already seen 
in action the `rdbms|runSQL(var,db,sql)` command.  There's also the 
<code>rdbms|runSQL**s**(var,db,**sqls**)</code> command:<br/>
![Compare1 runSQLs](image/rdbms-03-Compare1.runSQLs.png)

The parameter `sqls` would be a multiple lines of SQL statements separated by semi-colon (`;`), 
just as the convention for most database tools.  In order for one to distinguish the result of
different SQL execution, one would _annotate_ each of the SQL statement with a SQL comment in the
form of `-- nexial:[VARIABLE]`, like this:
```sql
-- nexial:VAR1
SELECT ... ...

-- nexial:VAR2
INSERT INTO ... ...

-- more comments here, but this line is ignored by Nexial
-- however, the "Nexial" comment must be immediately preceeding the SQL statement
-- nexial:VAR3
call SP_... ...
```

After the execution of `runSQLs()` command, one could directly reference the variables referenced
in the SQL statements above, like so:<br/>
![useVars after runSQLs](image/rdbms-03-Compare1.runSQLsUseVars.png)

One obvious convenience with this is the fluidity of using the SQL statements developed on a
database tool/editor directly in Nexial.  You can simply copy the SQL statements to/from your
favorite database editors and Nexial datasheet.  Since the use SQL comment (via `-- `) and 
statement terminator (via `;`) are fairly universal.  The same SQL statements can be used in the
database editors and in Nexial.<br/>
![from dbtools](image/rdbms-03-dbtools1.png)

To go one step further, Nexial also supports the execution of multiple SQL statements via a file:<br/>
![runFile](image/rdbms-03-Compare1.runFile.png)

This command behaves the same as `rdbms|runSQLs(var,db,sqls)` in terms of multiple SQL and Nexial 
variable support, but also the benefit of completely externalizing SQL statements out of Nexial 
artifacts.  There is one other benefit (or at least a difference) with using an externalized SQL
file - late data variable evaluation.

#### Late data variable evaluation
The main idea is to evaluate the specified data variables at the last possible moment - in other word, 
just-in-time.



***

<div class="site-links site-links-footer">
<a class="link-previous" href="Database-Automation-transaction.html">&laquo; Transaction Support</a> | 
<a class="link-next" href="Database-Automation-expression.html">Nexial Expression &raquo;</a>
</div>
