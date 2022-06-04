const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "Fariz",
  password: "12345678f",
  database: "MY_DATABASE",
});

connection.connect((err) => {
  if (!err) {
    console.log("SUCCESS");
  } else {
    console.log(err);
  }
});

connection.query(
  `
  INSERT INTO test_table (Task_description, Due_date, Employee, Finished_date)
  VALUES
    ('create ER diagram', '2020-05-20', 'Alex', '2020-05-19'),
    ('connect node.js to mysql', '2020-05-13', 'John', '2020-05-17'),
    ('create get-request handler/task', NULL, 'Alex', '2020-04-15'),
    ('create post-request handler/task', '2020-04-15', 'Donald', NULL),
    ('create sql-query for get tasks', NULL, 'John', NULL),
    ('create sql-query for add task', '2020-03-04', 'Martin', '2020-03-04'),
    ('configure server to auto deploy', '2020-03-12', NULL, NULL);
`,
  (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.error(err);
    }
  }
);
