/**
 * 1141. User Activity for the Past 30 Days I
 */

SELECT 
	a.activity_date AS day,
    COUNT(DISTINCT a.user_id) AS active_users 
FROM activity a
WHERE a.activity_date BETWEEN '2019-07-27'::DATE-29 
    AND '2019-07-27'
GROUP BY a.activity_date