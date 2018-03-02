-- nexial:insert_new_support_rep
INSERT INTO EMPLOYEES (LASTNAME, FIRSTNAME, TITLE, REPORTSTO, BIRTHDATE, HIREDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, PHONE, FAX, EMAIL)
VALUES ('Brown', 'James', 'Funk Master', 'Nobody', '1963-09-30', NULL, '101 Beat Street', 'Funky Town', 'MI', 'USA', '20931', NULL, NULL, 'funky@tac.com');

-- nexial:support_rep
SELECT EMPLOYEEID AS "EmployeeId"
FROM EMPLOYEES WHERE LASTNAME = 'Brown' AND FIRSTNAME = 'James';

-- nexial:insert_new_customer
INSERT INTO CUSTOMERS (FIRSTNAME, LASTNAME, COMPANY, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, PHONE, FAX, EMAIL, SUPPORTREPID)
VALUES ('John', 'Smith', 'Acme', '123 Elm Street', 'Fullerton', 'PA', 'USA', '10491', '702-541-2213', NULL, 'john.smith@acme.com', ${support_rep}.data[0].EmployeeId);


