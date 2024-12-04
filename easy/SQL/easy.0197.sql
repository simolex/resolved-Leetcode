/**
 * 197. Rising Temperature
 */

SELECT W2.id
FROM weather w1 
	join weather w2 on 
    	(W1.recorddate- W2.recorddate)=-1
WHERE W2.temperature> W1.temperature