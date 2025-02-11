/**
 * 175. Combine Two Tables
 */
SELECT p.firstname, p.lastname, a.city, a.state
from person p 
	 LEFT JOIN address a 
    	on a.personid = p.personid