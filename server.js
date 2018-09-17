var express = require('express');
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});




//app.use(express.static ('static') );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/home');
        
    });

    app.get('/home', function(req, res) {
        var name = ['KAMONWAN PLAISOPHON'];
        var hobbies = ['id = 5930212014','Major = Ebiz'];
        var bdate ='brith day = 07/07/1997';
        res.render('pages/about',{fullname : name, hobbies:hobbies,bdate: bdate});
            
        });
    //Display all students
        app.get('/students', function(req, res) {
            connection.query('SELECT* from students', function (err, rows, fields) {
            if (err) throw err
            res.render('pages/students',{students:rows})      
            console.log( rows)
                    })
connection.end();
});
            
    
   //Display all subjects
   app.get('/subjects', function(req, res) {
    connection.query('SELECT* from subjects', function (err, rows, fields) {
    if (err) throw err
    res.render('pages/subjects',{subjects:rows})      
    console.log( rows)
            })
connection.end();
});

  console.log('Appp is running at http://localhost:8080');          

app.listen(8080);