const router = require("express").Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:'); //replace :memory: with the file path to your database

router.get('/', (req, res) => {
  res.status(200).send("version 1.0.0");
});

//you probably shouldn't keep this, I just kept it to try things out
router.get('/initialize_db', (req, res) => {
  db.serialize(function () {
    db.run('CREATE TABLE test (test_column TEXT)');
    db.run('INSERT INTO test VALUES(?)', "Hello database world");
  })
  res.status(200).send()
});

router.get('/database_info', (req, res) => {
  db.all('SELECT * FROM test', (err, rows) => {
    console.log(rows);
    res.status(200).send(rows)
  });
});
module.exports = router