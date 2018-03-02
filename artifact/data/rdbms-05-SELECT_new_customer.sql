-- nexial:customer
SELECT * FROM CUSTOMERS WHERE LASTNAME = '${Last Name}' AND FIRSTNAME = '${First Name}';

-- nexial:support
SELECT * FROM EMPLOYEES WHERE EMPLOYEEID = ${customer}.data[0].SupportRepId;

-- nexial:invoice
SELECT * FROM INVOICES WHERE CUSTOMERID = ${customer}.data[0].CustomerId LIMIT 1;

-- nexial:invoice_items
SELECT * FROM INVOICE_ITEMS WHERE INVOICEID = ${invoice}.data[0].InvoiceId LIMIT 1;
