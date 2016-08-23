var express = require('express');
var router = express.Router();

router.get('/all_data',(req,res)=>{
  res.json({status:'y',msg:'获取数据成功',data:[]})
})

router.get('/get_one',(req,res)=>{
  res.json({status:'y',msg:'ok'})
})

module.exports = router;
