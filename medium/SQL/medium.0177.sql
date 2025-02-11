/**
 * 177. Nth Highest Salary
 */

CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
    IF N <= 0 THEN
        RETURN;
    END IF;
    RETURN QUERY (
        SELECT DISTINCT e.salary
        FROM Employee  e
        ORDER BY e.salary DESC
        OFFSET N-1
        LIMIT 1
    );
END;
$$ LANGUAGE plpgsql;