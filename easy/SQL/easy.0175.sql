/**
 * 175. Combine Two Tables
 */
SELECT 
    p.firstname, 
    p.lastname, 
    a.city, 
    a.state
FROM person p 
	 LEFT JOIN address a 
    	ON a.personid = p.personid