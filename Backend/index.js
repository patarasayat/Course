const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const e = require('express');
const app = express();
const cors = require('cors');
const port = 5000

app.use(bodyParser.json());
app.use(cors());

let users = []
let counter = 1 ;
let conn = null

const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 5500
    })
}

app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});