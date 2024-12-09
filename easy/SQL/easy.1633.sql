/**
 * 1633. Percentage of Users Attended a Contest
 */

SELECT 
    r.contest_id, 
    ROUND(
        COUNT(*)::NUMERIC 
            * 100
            / (
                SELECT COUNT(*) FROM users
                ), 2
        ) percentage 
FROM  register r 
	LEFT JOIN users u
    ON r.user_id = u.user_id
GROUP by r.contest_id
ORDER BY 
    percentage  desc,
    contest_id asc
