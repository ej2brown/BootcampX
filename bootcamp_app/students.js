const { Pool } = require('pg');

const pool = new Pool({
  user: 'elizabeth',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE %$1%
LIMIT $2;
`;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array. 
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values);

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '%${process.argv[2]}%'
// LIMIT ${process.argv[3] || 5};
// `)
// .then(res => { //we're not dealing with SQL or the database any more, we're just dealing with JavaScript objects.
//     console.log(res); //this
//     console.log(res.rows); //vs this
//     res.rows.forEach(user => {
//         console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
//     }) //vs this
// })
// .catch(err => console.error('query error', err.stack));