/**
 * 1164. Product Price at a Given Date
 */

WITH 
a AS (
    SELECT 
        p.product_id, 
        MAX(pp.change_date) change_date 
    FROM products p 
        LEFT JOIN products pp
	        ON p.product_id = p.product_id
            AND p.change_date =pp.change_date
            AND pp.change_date<='2019-08-16'
    GROUP BY p.product_id)
SELECT 
    a.product_id, 
    COALESCE(p.new_price, 10) price
FROM a 
    LEFT JOIN products p
        ON a.product_id = p.product_id
        AND a.change_date = p.change_date