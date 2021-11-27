// const express = require('express');
// const router = express.Router();
// const db = require('../db');

// db.connect((err)=>{
//     let sql = 'SELECT SUM(compliance)/300* 100 as test FROM product_brand, report_product GROUP BY brand_name ' ;
//     db.query(sql, (err, rows)=>{
//         if(err) throw err;
//         console.log(rows)
//     });
// });

// module.exports = router;