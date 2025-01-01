/**
 * 602. Friend Requests II: Who Has the Most Friends
 */

 WITH a AS (
    SELECT 
        r.requester_id, 
        r.accepter_id
    FROM requestaccepted r
    UNION ALL
    SELECT 
        r.accepter_id requester_id, 
        r.requester_id accepter_id
    FROM requestaccepted r)

SELECT 
    a.requester_id id, 
    COUNT(DISTINCT a.accepter_id) num
FROM a
GROUP BY a.requester_id
ORDER BY num DESC
LIMIT 1