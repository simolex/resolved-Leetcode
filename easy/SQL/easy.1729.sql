/**
 * 1729. Find Followers Count
 */

SELECT 
    f.user_id, 
    COUNT(*) followers_count
FROM followers f
GROUP BY f.user_id
ORDER BY f.user_id