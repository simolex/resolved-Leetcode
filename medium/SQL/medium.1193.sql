/**
 * 1193. Monthly Transactions I
 */

SELECT 
	TO_CHAR( t.trans_date, 'YYYY-MM') AS month,
    t.country,
    COUNT(*) trans_count,
    SUM(
      CASE 
      	WHEN t.state = 'approved' THEN 1
      	ELSE 0 	
      END 
    ) approved_count,
    SUM(t.amount) trans_total_amount,
    SUM(
      CASE 
      	WHEN t.state = 'approved' THEN t.amount
      	ELSE 0 	
      END 
    ) approved_total_amount
FROM transactions t
GROUP BY 
	TO_CHAR( t.trans_date, 'YYYY-MM'),
    t.country
