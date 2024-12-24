/**
 * 1204. Last Person to Fit in the Bus
 */

WITH 
RECURSIVE bus AS(
    SELECT 
        q.person_name, 
        q.weight, 
        q.turn 
    FROM queue q 
    WHERE q.turn = 1
    UNION
    SELECT 
        q.person_name, 
        b.weight + q.weight AS weight, 
        q.turn 
    FROM bus b 
        JOIN queue q 
            ON b.turn + 1 = q.turn)
SELECT 
    bus.person_name
FROM bus 
WHERE bus.weight <=1000
ORDER BY bus.weight DESC
LIMIT 1