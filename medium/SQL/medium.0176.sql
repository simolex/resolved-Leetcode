/**
 * 176. Second Highest Salary
 */

SELECT (
    SELECT DISTINCT e.salary
    FROM employee e
    GROUP BY e.salary
    ORDER BY e.salary DESC 
    LIMIT 1
    OFFSET 1) SecondHighestSalary