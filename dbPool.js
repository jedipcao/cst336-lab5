const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gdikgoyczz7jmdlx",
    password: "rxeu717r8ij1xzxm",
    database: "ax1ner2qldd5tgv2"
});

module.exports = pool;