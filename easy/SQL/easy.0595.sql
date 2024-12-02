/**
 * 595. Big Countries
 */

 select 
	w.name, 
	w.population,
	w.area
from world w
WHERE W.population >=25000000
    OR W.area >= 3000000 