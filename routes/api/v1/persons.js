/**
 * person信息数据
 */
var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.json({
        status: 'y',
        data: [],
        msg: '获取所有人员信息成功'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        status: 'y',
        data: {},
        msg: '获取人员信息成功'
    })
})

router.post('/new',(req,res)=>{
  res.json({
    status: 'y',
    msg: '新增人员信息成功'
  })
})

router.put('/update/:id',(req,res)=>{
  res.json({
    status: 'y',
    msg: '修改人员信息成功'
  })
})

router.delete('/:id',(req,res)=>{
  res.json({
    status: 'y',
    msg: '删除人员信息成功'
  })
})

module.exports = router;
