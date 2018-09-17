var express = require('express');
var pgp = require('pg-promise')();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
var app = express();

//app.use(express.static ('static') );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
        
    });

    app.get('/home', function(req, res) {
        var name = ['KAMONWAN PLAISOPHON'];
        var hobbies = ['id = 5930212014','Major = Ebiz'];
        var bdate ='brith day = 07/07/1997';
        res.render('pages/about',{fullname : name, hobbies:hobbies,bdate: bdate});
            
        });
    //Display all products
        app.get('/students', function(req, res) {
            var sid = req.param('sid');
            var sql='select* from students';
                if(sid){
                    sql += ' where sid ='+sid;
                }
           db.any(sql)
            .then(function(data){
                console.log('DATA:'+data);
                res.render('pages/students',{students: data})
                
            })
            .catch(function(error){
                console.log('ERROR:'+error);
            })

        });
   //Display all user
            app.get('/subjects/:code', function(req, res) {
                var id = req.param('code');
                var sql='select* from subjects';
                if(id){
                    sql += ' where code ='+id;
                }
                db.any(sql)
                 .then(function(data){
                     console.log('DATA:'+data);
                     res.render('pages/subjects',{subjects: data})
                     
                 })
                 .catch(function(error){
                     console.log('ERROR:'+error);
                 })
     
                 });

  console.log('Appp is running at http://localhost:8080');          

app.listen(8080);