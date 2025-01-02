/**
 * 1484. Group Sold Products By The Date
 */

SELECT 
    a.sell_date,
    COUNT(DISTINCT a.product) num_sold, 
    STRING_AGG(DISTINCT a.product, ',') products                     
FROM activities a
GROUP BY a.sell_date
ORDER BY a.sell_date