/**
 * 1045. Customers Who Bought All Products
 */

WITH 
uniq AS (
    SELECT c.customer_id
    FROM customer c 
    GROUP BY c.customer_id),
al AS (
    SELECT customer_id , product_key
    FROM uniq u , product p),
nf AS (
    SELECT al.customer_id
    FROM al
	LEFT JOIN customer c 
        ON al.product_key = c.product_key 
        AND al.customer_id = c.customer_id
    WHERE c.product_key IS NULL)

SELECT u.customer_id
FROM uniq u
WHERE u.customer_id NOT IN 
    (SELECT customer_id FROM  nf)