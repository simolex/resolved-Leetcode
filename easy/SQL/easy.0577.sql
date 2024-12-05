/**
 * 577. Employee Bonus
 */

SELECT e.name, b.bonus
FROM employee e LEFT JOIN bonus b ON e.empid = b.empid 
WHERE b.bonus IS NULL OR  b.bonus < 1000