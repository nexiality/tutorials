-- nexial:customer
SELECT * FROM CUSTOMERS WHERE LASTNAME = '${Last Name}' AND FIRSTNAME = '${First Name}';

-- nexial:support
SELECT * FROM EMPLOYEES;

-- query will be executed, but its result will not be used anywhere since we are using db >> saveResults() command
SELECT * FROM INVOICES;

-- nexial:invoice_items
SELECT * FROM INVOICE_ITEMS WHERE INVOICEID = 5;
