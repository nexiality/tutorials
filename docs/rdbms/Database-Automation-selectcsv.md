# Database Automation

![logo](image/logo-x.png)


<div class="site-links site-links-header">
<a class="link-previous" href="Database-Automation-selectvalidate.html">&laquo; SELECT to validate</a> | 
<a class="link-next" href="Database-Automation-metadata.html">Query metadata &raquo;</a>
</div>

## Section 5: SELECT to CSV / bulk comparison


## Compare Query Results

![Compare1 data](image/rdbms-03-Compare1.data.png)


![Compare1 script](image/rdbms-03-Compare1.script.png)

## Compare Query Results, Take 2

![Compare2 data](image/rdbms-03-Compare2.data.png)

The first two comparisons ran as expected - no differences found:<br/>
![Compare2 nodif](image/rdbms-03-Compare2.nodiff.png)

However the last comparison shows multiple variance between the two CSV output:<br/>
![Compare2 nodif](image/rdbms-03-Compare2.diff.png)

I should say that this is _also_ expected since the underlying queries for them are different.

## Compare Against Baseline File

![Compare3 data](image/rdbms-03-Compare3.data.png)

![Compare3 script](image/rdbms-03-Compare3.script.png)

![Compare3 compare](image/rdbms-03-Compare3.diff.png)

![Compare3 compare with match](image/rdbms-03-Compare3.diff_and_match.png)



***

<div class="site-links site-links-footer">
<a class="link-previous" href="Database-Automation-selectvalidate.html">&laquo; SELECT to validate</a> | 
<a class="link-next" href="Database-Automation-metadata.html">Query metadata &raquo;</a>
</div>
