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
    database: 'students'
})



app.listen(3001, () => {
    console.log('Server is running on port 3001');
}); 