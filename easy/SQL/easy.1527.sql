/**
 * 1527. Patients With a Condition
 */

SELECT *
FROM patients p
WHERE p.conditions ~* '(^| )DIAB1'