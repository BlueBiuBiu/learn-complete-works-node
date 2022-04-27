const mysql = require("mysql2")

const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: "123456",
  database: 'test',
})

connection.getConnection((err,conn) => {
  conn.connect((err) => {
    if(err){
      console.log("数据库连接失败:",err);
    } else {
      console.log("数据库连接成功~");
    }
  })
})

module.exports = connection.promise()