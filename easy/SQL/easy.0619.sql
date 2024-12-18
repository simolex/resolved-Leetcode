SELECT  
    COALESCE (
        (SELECT  m.num
        FROM mynumbers m
        GROUP BY m.num
        HAVING COUNT(*) = 1
        ORDER BY m.num DESC
        LIMIT 1), NULL)  num