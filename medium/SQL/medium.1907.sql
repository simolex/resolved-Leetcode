with g as (
	select 
  		a.account_id,
  		sum(a.income)  salary
  	from accounts a
  	group by a.account_id
)
SELECT 
	CASE
    	when g.salary <20000 then 'Low Salary'
    	when g.salary <=50000 then 'Average Salary'
    	Else 'High Salary'
   END sasas
        
FROM  g