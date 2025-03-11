/**
 * 181. Employees Earning More Than Their Managers
 */

SELECT 
    e.name employee
FROM employee e 
	JOIN employee em
    	ON e.managerid = em.id
WHERE 
	e.salary > em.salary