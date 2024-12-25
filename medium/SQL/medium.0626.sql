/**
 * 626. Exchange Seats
 */

SELECT 
    id, 
    student
FROM (
    SELECT 
        s.id,
	    LAG(s.student) OVER (ORDER BY s.id) student
    FROM seat s) even
WHERE even.id % 2 = 0
UNION ALL 
SELECT 
    id, 
    COALESCE (student,prev) student
FROM (
    SELECT 
        s.id, 
        s.student prev,
	    lead(s.student) OVER (ORDER by s.id) student
    FROM seat s) odd
WHERE odd.id % 2 = 1
ORDER BY id