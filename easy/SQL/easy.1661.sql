/**
 * 1661. Average Time of Process per Machine
 */

with p as (select 
	a1.machine_id,
    a1.process_id,
    a2.timestamp - a1.timestamp as p_time 

from activity a1 
	join activity a2 on a1.machine_id = a2.machine_id 
    	and a1.process_id=a2.process_id
        and a1.activity_type = 'start'
        and a2.activity_type= 'end')
select   p.machine_id,  round(avg(p_time)::NUMERIC,3) processing_time 
from p
GROUP by p.machine_id