/**
 * 1075. Project Employees I
 */

SELECT 
    p.project_id, 
    ROUND(
        AVG(e.experience_years), 2) average_years 
FROM project p 
	JOIN employee e
    ON p.employee_id = e.employee_id
GROUP BY p.project_id