/**
 * 550. Game Play Analysis IV
 */

WITH 
nums AS (
    SELECT 
        a.player_id,
        a.device_id,
        a.event_date,
        ROW_NUMBER() OVER (PARTITION BY a.player_id ORDER BY a.event_date) num
    FROM activity a),
players AS (
	SELECT COUNT(*) cnt
  	FROM nums
  	WHERE nums.num = 1
),
again AS (
  SELECT COUNT(*) cnt

FROM 
    nums n1, 
    nums n2
WHERE n1.num=1 
	AND n2.num = 2
    AND n1.event_date+1 = n2.event_date
    AND n1.player_id = n2.player_id
)

SELECT 
    ROUND(again.cnt::NUMERIC / players.cnt, 2) fraction
FROM 
    players, 
    again