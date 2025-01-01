/**
 * 585. Investments in 2016
 */

WITH t15 AS (
    SELECT i.tiv_2015
    FROM insurance i
    GROUP BY i.tiv_2015
    HAVING COUNT(*) > 1
  ),
  loc AS (
    SELECT 
        i.lat, 
        i.lon
    FROM insurance i
    GROUP BY 
        i.lat, 
        i.lon
    HAVING COUNT(*) = 1
  )

SELECT ROUND(SUM(i.tiv_2016)::NUMERIC, 2) tiv_2016
FROM insurance i 
    JOIN t15 
        ON i.tiv_2015 = t15.tiv_2015
    JOIN loc 
        ON i.lat = loc.lat 
        AND i.lon = loc.lon 