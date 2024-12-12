/**
 * 1211. Queries Quality and Percentage
 */

SELECT 
	q.query_name, 
	ROUND(
        AVG(q.rating::numeric / q.position), 2) quality,
    ROUND(
        AVG(
            CASE
                WHEN q.rating < 3 then 1
                ELSE 0
            END) * 100, 2) poor_query_percentage
FROM queries q
GROUP BY q.query_name