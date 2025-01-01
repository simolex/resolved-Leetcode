/**
 * 196. Delete Duplicate Emails
 */

WITH 
del AS (
	SELECT 
        p.id, 
        ROW_NUMBER() OVER (PARTITION BY p.email ORDER BY p.id) repeat
    FROM person p), 
repeated AS (
	SELECT del.id
    FROM del
    WHERE del.repeat > 1
)

DELETE FROM person p 
WHERE p.id IN (
    SELECT id FROM repeated)