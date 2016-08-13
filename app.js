var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))




app.listen(3000,function(){
  console.log('服务器运行中....')
})
