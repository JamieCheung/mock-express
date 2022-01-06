const Mock = require('mockjs')
const express = require('express')
const app = express()
const port = 8090

const accountPwdDetail = require( '../public/api/accountPwdDetail.json') // 账号列表
const noData = require( '../public/api/noData.json') // 无数据
const resetPwd = require( '../public/api/resetPwd.json') // 通用响应

app.get('/', (req, res) => {
  res.send('hello world')
})


// 账号列表
app.get('/testexpress/sp/accountPwdDetail', (req, res) => {
  let data = Mock.mock(
    // accountPwdDetail
    noData
  )
  res.json(data)
})

// 重置密码
app.get('/testexpress/sp/resetPwd', (req, res) => {
  let data = Mock.mock(
    resetPwd
  )
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})