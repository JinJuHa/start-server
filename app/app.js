//모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//라우팅
const home = require('./src/routes/home');


//앱세팅
app.set('views', './src/views');
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//익스프레스에서 정적 파일을 읽어올 때 사용하는 메서드
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함된 경우 제대로 인식하지 못하는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));


//라우터에 있는걸 가져온다(미들웨어를 사용하는 곳)
// use -> 미들웨어를 등록하는 메서드다
app.use('/' , home);

module.exports = app;