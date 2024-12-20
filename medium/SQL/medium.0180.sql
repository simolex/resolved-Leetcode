/**
 * 180. Consecutive Numbers
 */

WITH pre AS (
    SELECT
	    l.id,
        l.num num1,
        LEAD(l.num) OVER ( ORDER BY l.id) num2,
        LAG(l.num) OVER ( ORDER BY l.id) num3
    FROM logs l)
SELECT DISTINCT p.num1 ConsecutiveNums
FROM pre p
WHERE p.num1=p.num2 
    AND p.num2=p.num3