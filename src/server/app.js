const express = require('express') // 引入express模块
const app = express()
const fs = require('fs') // 引入fs模块
// const url=require("url");

// const mysql = require('mysql')
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'test'
// })

var bodyParser = require('body-parser')// 实例化express
/*
  使用experss：
    1.引入express:
      let app = require('express')
    2.引入中间键body-parser
      let parser = require('body-parser')
    3.将body-parser引入进express
      app.use(parser, {
        设置编码格式：
          extended:false
          按照正常编码进行
      })
    4.监听服务器端口
      app.listen(8888)
    5.编写路由
      app.get/post('url', (req, res) => {
        里面进行操作，将数据返回前端
      })
*/
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.listen(8888) // 指定端口;
app.get('/', function (req, res) { // 匹配主页的get请求
  res.send('首页')
})

// app.post('/login', (req, res) => {
//   let name = req.body.username
//   let pass = req.body.password
//   if (req.body.username === '' || req.body.password === '') {
//     res.send({
//       'code': 1,
//       'msg': '用户名或密码不能为空'
//     })
//   } else {
//     connection.query(`select * from regist where name="${name}";`, (err, data) => {
//       if (data.length === 0) {
//         console.log(err)
//         res.send({
//           'code': 2,
//           'msg': '用户名不存在'
//         })
//       } else {
//         if (data[0].pass === pass) {
//           res.send({
//             'code': 0,
//             'msg': '登录成功'
//           })
//         } else {
//           res.send({
//             'code': 2,
//             'msg': '密码错误'
//           })
//         }
//       }
//     })
//   }
// })

app.post('/phoneCode', (req, res) => {
  console.log(req.body)
  res.send({a: 123456})
})

app.post('/regist', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.get('/hotData', (req, res) => {
  console.log(req.body)
  fs.readFile('../assets/js/hotDatas.json', 'utf-8', (err, data) => {
    if (err) {
      res.send('文件读取失败')
    } else {
      let json = JSON.parse(data)
      if (json.length === 0) {
        res.send('暂无数据')
      } else {
        res.send(json)
      }
    }
  })
})
app.get('/songData', (req, res) => {
  fs.readFile('../assets/js/songList.json', 'utf-8', (err, data) => {
    if (err) {
      res.send('文件读取失败')
    } else {
      let json = JSON.parse(data)
      if (json.length === 0) {
        res.send('暂无数据')
      } else {
        res.send(json)
      }
    }
  })
})
app.get('/singer', (req, res) => {
  fs.readFile('../assets/js/singer.json', 'utf-8', (err, data) => {
    if (err) {
      res.send('文件读取失败')
    } else {
      let json = JSON.parse(data)
      if (json.length === 0) {
        res.send('暂无数据')
      } else {
        res.send(json)
      }
    }
  })
})
