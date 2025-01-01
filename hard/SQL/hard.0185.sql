/**
 * 185. Department Top Three Salaries
 */

WITH hit AS (
    SELECT 
        e.departmentid, 
        e.name, 
	    DENSE_RANK() OVER (PARTITION BY e.departmentid ORDER BY e.salary DESC) rate, 
        e.salary 
    FROM employee e)

SELECT 
    d.name department, 
    hit.name employee, 
    hit.salary 
FROM hit 
    JOIN department d
        ON hit.departmentid = d.id
WHERE hit.rate <= 3