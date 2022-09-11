//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./src/routes/home');


//앱세팅
app.set('views', './src/views');
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//라우터에 있는걸 가져온다(미들웨어를 사용하는 곳)
// use -> 미들웨어를 등록하는 메서드다
app.use('/' , home);

module.exports = app;