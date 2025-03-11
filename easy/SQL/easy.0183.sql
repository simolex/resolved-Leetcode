/**
 * 183. Customers Who Never Order
 */

SELECT 
	c.name customers
FROM customers c
	LEFT JOIN orders o 
    	ON o.customerid = c.id
WHERE o.customerid IS  NULL