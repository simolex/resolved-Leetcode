/**
 * 1789. Primary Department for Each Employee
 */

WITH prim AS (
    SELECT 
        e.employee_id, 
        COUNT(*) cnt
    FROM employee e
    GROUP BY e.employee_id)
SELECT 
    e.employee_id, 
    e.department_id
FROM employee e 
    JOIN prim p 
	    ON e.employee_id = p.employee_id
        AND ((p.cnt = 1 AND e.primary_flag = 'N') 
            OR (p.cnt > 1 AND e.primary_flag = 'Y'))