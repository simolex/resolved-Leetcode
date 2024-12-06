/**
 * 570. Managers with at Least 5 Direct Reports
 */

WITH 
b AS (
    SELECT 
        boss.id, 
        boss.name
    FROM employee boss  
        JOIN employee slave 
        ON boss.id = slave.managerid
    GROUP BY boss.id, boss.name
    HAVING COUNT(*)>=5
)

SELECT b.name FROM b