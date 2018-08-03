INSERT INTO EMPLOYEES (EMPLOYEEID, LASTNAME, FIRSTNAME, TITLE, REPORTSTO, BIRTHDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, EMAIL)
select max(EMPLOYEEID) + 1, 'Brown', 'James', 'Funk Master', 'Nobody', '1963-09-30', '101 Beat Street', 'Funky Town', 'MI', 'USA', '20931', 'funky@tac.com' from EMPLOYEES
;

INSERT INTO EMPLOYEES (EMPLOYEEID, LASTNAME, FIRSTNAME, TITLE, REPORTSTO, BIRTHDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, EMAIL)
select max(EMPLOYEEID) + 1, 'Marshall', 'Dean', 'Superstar', 'Hollywood', '1961-11-02', '900 Playhouse Crescent', 'Hollywood', 'MI', 'USA', '900317', 'acting@easymoney.com' from EMPLOYEES;

INSERT INTO EMPLOYEES (EMPLOYEEID, LASTNAME, FIRSTNAME, TITLE, REPORTSTO, BIRTHDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, EMAIL)
select max(EMPLOYEEID) + 1, 'Stone', 'Rolling', 'Rockstars', 'No one', '1965-03-24', '1234 Fender Bender', 'Anytown', 'CA', 'USA', '912345', 'amajor7@5thfret.mus' from EMPLOYEES
;

-- nexial:new_employees
SELECT * FROM EMPLOYEES WHERE LASTNAME in ('Brown', 'Marshall', 'Stone')
;


ROLLBACK
;