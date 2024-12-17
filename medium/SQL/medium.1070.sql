/**
 * 1070. Product Sales Analysis III
 */

WITH first AS (
SELECT 
	s.product_id,
    MIN(s.year) AS first_year
FROM sales s
GROUP BY s.product_id)

SELECT 
    s.product_id, 
    f.first_year, 
    s.quantity, 
    s.price
FROM sales s JOIN first f 
    ON  s.year = f.first_year
    AND s.product_id = f.product_id