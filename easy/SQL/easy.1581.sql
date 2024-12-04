/**
 * 1581. Customer Who Visited but Did Not Make Any Transactions
 */

SELECT v.customer_id,  count(*) count_no_trans 
from visits v LEFT join transactions t on v.visit_id = t.visit_id
where t.visit_id is NULL
GROUP by v.customer_id