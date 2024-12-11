/**
 * 1174. Immediate Food Delivery II
 */

WITH q AS (
  SELECT 
    *,
    ROW_NUMBER() OVER (PARTITION BY d.customer_id  ORDER BY d.order_date) num
	FROM delivery d
) 
SELECT 
    ROUND(
        AVG (
            CASE
                WHEN q.order_date = q.customer_pref_delivery_date THEN 1
                ELSE 0
            END) * 100, 2) immediate_percentage 
FROM q 
WHERE q.num = 1