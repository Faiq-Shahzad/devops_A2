const mysql = require('mysql2');

console.log("Database DB_HOST", process.env.DB_HOST);
console.log("Database DB_USER", process.env.DB_USER);
console.log("Database DB_PASSWORD", process.env.DB_PASSWORD);
console.log("Database DB_PORT", process.env.DB_PORT);
console.log("Database DB_NAME", process.env.DB_NAME);

const connection = mysql.createConnection({
  host     : process.env.DB_HOST || "localhost",
  user     : process.env.DB_USER || "root",
  password : process.env.DB_PASSWORD || "root",
  port     : process.env.DB_PORT || 3306,
  database  : process.env.DB_NAME || 'user',

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS `users` (user_id int(11) NOT NULL AUTO_INCREMENT, user_email varchar(50) NOT NULL, user_pass varchar(32) NOT NULL, user_fname varchar(50) NOT NULL, CONSTRAINT PK_user_id PRIMARY KEY(user_id), CONSTRAINT UK_user_email UNIQUE(user_email));"
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = connection;