import mysql from 'mysql';
import cors from 'cors';
import express from 'express';


const app = express();

app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '123',  
    database: 'mytodo'
})


db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL Connected...');
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
}); 

app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

app.post('/create', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    db.query('INSERT INTO students (firstName, lastName, email) VALUES (?,?,?)', [firstName, lastName, email], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json("Values Inserted");
        }
    });


    app.get('/read/:id', (req, res)=>{
        const id = req.params.id;
        db.query('SELECT * FROM students WHERE id = (?)', [id], (err, result) => {
            if (err) {
                console.log('server error');
            } else {
                res.json(result);
            }
        });
    })
});