"use strict";
const models = require('./db');

const express = require('express');
const router = express.Router();


// 获取全部账号
router.get('/api/login/getAccount',(req,res) => {
    // 查找数据库
     models.Login.find({}, (err,data) => {
        if (err) {
            // res.send(err);
            res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
        } else {
            console.log(data)
            if (data.length > 0) {
                res.send({'status': 1000, 'message': 'Login successfully!', 'data': data});
            } else {
                res.send({'status': 1002, 'message': 'The account is not existed!', 'data': err});
            }
        }
    });
    
});

router.post('/api/login/insertLoginInfo',(req,res) => {
    // 查找数据库
    let loginObj = new models.Login({name:req.body.name , age:req.body.age})
    loginObj.save((err , data)=>{
    	 if (err) {
            res.send({'status': 1001, 'message': 'insert fail ... ', 'data': err});
        } else {
            res.send({'status': 200, 'message': 'insert success', 'data': data})
        }
    })
    
});

module.exports = router;