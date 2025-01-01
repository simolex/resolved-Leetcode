/**
 * 1667. Fix Names in a Table
 */

SELECT 
    u.user_id, 
    UPPER(SUBSTRING(u.name, 1,  1)) || LOWER(SUBSTRING(u.name, 2)) name  
FROM users u
ORDER BY u.user_id