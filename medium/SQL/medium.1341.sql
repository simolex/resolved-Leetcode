/**
 * 1341. Movie Rating
 */

WITH r1 AS (
    SELECT  
        u.name, 
        COUNT (*) cnt
    FROM movierating mr 
        JOIN users u 
            ON mr.user_id = u.user_id
    GROUP BY 
        mr.user_id, 
        u.name
    ORDER BY 
        cnt DESC, 
        u.name ASC
    LIMIT 1),
r2 AS (
    SELECT 
        m.title, 
        AVG(mr.rating) rating
    FROM movierating mr 
        JOIN movies m 
            ON mr.movie_id = m.movie_id    
    WHERE DATE_TRUNC('month', mr.created_at) = '2020-02-01'
    GROUP BY m.title
    ORDER BY 
        rating DESC, 
        title ASC
    LIMIT 1)
SELECT r1.name results FROM r1
    UNION ALL
SELECT r2.title results FROM r2