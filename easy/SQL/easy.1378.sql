/**
 * 1378. Replace Employee ID With The Unique Identifier
 */

SELECT u.unique_id, e.name
from employees e 
	left join employeeuni u on e.id = u.id