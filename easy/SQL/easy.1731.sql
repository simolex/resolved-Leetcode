/**
 * 1731. The Number of Employees Which Report to Each Employee
 */

SELECT  
    boss.employee_id, 
    boss.name, 
    COUNT(*) reports_count, 
    ROUND(AVG(s.age),0) average_age 
FROM employees boss 
    JOIN employees S
	    ON boss.employee_id = s.reports_to
GROUP BY 
    boss.employee_id, 
    boss.name
ORDER BY boss.employee_id