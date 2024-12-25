/**
 * 1907. Count Salary Categories
 */

WITH 
all_category AS (
    SELECT 'Low Salary' category
        UNION ALL
    SELECT 'Average Salary' category  
        UNION ALL
    SELECT 'High Salary' category),
counting AS ( 
    SELECT 
	    CASE
            WHEN a.income <20000 THEN 'Low Salary'
            WHEN a.income <=50000 THEN 'Average Salary'
            ELSE 'High Salary'
        END category,
        COUNT(*)  accounts_count 
    FROM  accounts a
    GROUP BY category
)

SELECT 
    ac.category,  
    COALESCE (accounts_count, 0) accounts_count
FROM all_category ac 
    LEFT JOIN counting c 
	    ON ac.category = c.category
