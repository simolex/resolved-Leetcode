/**
 * 584. Find Customer Referee
 */
SELECT c.name FROM customer c
where   c.id not in 
(SELECT c2.id from  customer c2 where c2.referee_id=2)