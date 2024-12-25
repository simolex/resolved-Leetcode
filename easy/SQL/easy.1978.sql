/**
 * 1978. Employees Whose Manager Left the Company
 */

SELECT e.employee_id
FROM employees e 
WHERE e.manager_id NOT IN (
    SELECT m.employee_id 
    FROM employees m)
AND e.salary<30000
ORDER BY e.employee_id