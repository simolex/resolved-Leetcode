/**
 * 1280. Students and Examinations
 */

SELECT
	st.student_id ,
    st.student_name, 
    su.subject_name,    
    count(e.*) attended_exams
FROM    students st
CROSS JOIN subjects su
LEFT JOIN examinations e
	ON e.student_id = st.student_id 
    AND su.subject_name = e.subject_name

GROUP BY 
	st.student_id,
    st.student_name, 
    su.subject_name
ORDER BY 
	st.student_id ,
    su.subject_name