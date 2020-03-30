/* Get the names of all of the students from a single cohort.

Select their id and name.
Order them by their name in alphabetical order.
Since this query needs to work with any specific cohort, just use any number for the cohort_id.
*/

SELECT id, name 
FROM students 
WHERE cohort_id = 1
ORDER BY name;

SELECT count(id)
FROM students 
WHERE cohort_id IN (1,2,3);

SELECT name, id, cohort_id
FROM students
WHERE phone IS NULL OR email IS NULL;

SELECT name, id, email, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com'
AND phone IS NULL;

SELECT name, id, cohort_id
FROM students
WHERE end_date IS NULL
ORDER BY cohort_id;

SELECT name, email, phone
FROM students
WHERE github IS NULL
AND end_date IS NOT NULL;