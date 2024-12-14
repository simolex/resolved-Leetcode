/**
 * 2356. Number of Unique Subjects Taught by Each Teacher
 */

WITH ts AS (
    SELECT 
        t.teacher_id, 
        t.subject_id
    FROM teacher t
    GROUP BY 
        t.teacher_id, 
        t.subject_id
)
SELECT 
    ts.teacher_id, 
    COUNT(*) cnt 
FROM ts
GROUP BY ts.teacher_id