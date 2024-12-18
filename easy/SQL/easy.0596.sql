/**
 * 596. Classes More Than 5 Students
 */

SELECT c.class
FROM courses c
GROUP BY c.class
HAVING COUNT(*)>=5