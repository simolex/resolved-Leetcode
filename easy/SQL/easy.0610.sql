/**
 * 610. Triangle Judgement
 */

SELECT 
    t.x,
    t.y,
    t.z,
	CASE
    	when (
            (t.x + t.y) > t.z 
        and (t.y + t.z) > t.x
        and (t.z + t.x) > t.y) then 'Yes'
        else 'No'
    end triangle
from triangle t