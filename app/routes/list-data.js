const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/data-list', (req, res)=>{
    let sql = 'SELECT (brand_name),  SUM(compliance)/300* 100 AS total_persen FROM  product_brand, report_product GROUP BY brand_name ' ;
    db.query(sql, (err, data, fields)=>{
        if(err) throw err;
        res.render('list', {title: 'Data list', listData: data});
    });
});

module.exports = router;