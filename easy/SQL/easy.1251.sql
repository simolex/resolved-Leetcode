/**
 * 1251. Average Selling Price
 */

SELECT 
    p.product_id, 
    COALESCE(
        ROUND(
            SUM(p.price*u.units)::NUMERIC / sum(u.units), 2 
            ), 0) average_price
FROM prices p LEFT JOIN unitssold u 
	ON p.product_id = u.product_id
    AND p.start_date <= u.purchase_date
    AND p.end_date >= u.purchase_date
GROUP BY p.product_id