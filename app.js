var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 引入格式化页面传递参数时数据格式化的中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('bundle'))

// app.get('/hehe',(req,res)=>{
//   res.send('hehe')
// })

/**
 * 加入api调用时跨域访问问题的处理
 */
app.all('/api/*', (req, res, next) => {
  console.log('请求已到达...')
    res.header('Access-Control-Allow_Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})

////引入api的js
app.use('/api',require('./routes/api/v1/data.js'))
app.use('/api/person',require('./routes/api/v1/persons.js'))

app.listen(3000, function() {
    console.log('服务器运行中....')
})
