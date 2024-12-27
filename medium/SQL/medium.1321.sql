/**
 * 1321. Restaurant Growth
 */

WITH on_day AS (
  SELECT 
    c.visited_on, 
    SUM(c.amount) amount
  FROM customer c
  GROUP BY c.visited_on
  ORDER BY c.visited_on
)

SELECT 
    visited_on,
    SUM(c.amount) OVER(ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)  amount,
    ROUND(AVG(c.amount) OVER(ROWS BETWEEN 6 PRECEDING AND CURRENT ROW),2)  average_amount
FROM on_day c 
OFFSET 6
    