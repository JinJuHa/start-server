// //임시 데이터 만들기
// const users = {
//     id : ["jjhh" , "개발자", "나사원"],
//     pw : ["1234" , "2468" , "1705"]
// }

const { response } = require('express')
const User = require('../../models/user')
//const Userstorage = require('../../models/Userstorage')


const output = {
    home : (req, res)=>{
        res.render('home/index.html')
    },
    
    login : (req, res)=>{
        res.render('home/login.html')
    },
    register : (req, res)=>{
        res.render('home/register.html')
    },
}

const process = {
    login : (req, res)=>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

        //console.log(req.body);
    //     const id = req.body.id,
    //             pw = req.body.pw;

    // //const userstorage = new Userstorage();
    // //console.log(Userstorage.getUsers('id' , 'pw'));
    // const users = Userstorage.getUsers("id" , "pw");
    // //console.log(users);
    // //    //console.log(id, pw);
    //     const response = {};
    //    if(users.id.includes(id)){
    //     const idx = users.id.indexOf(id);
    //     if(users.pw[idx] === pw){
    //         response.success = true;
    //         return res.json(response);
    //     }
    //    }

    //    response.success = false;
    //    response.msg = "로그인에 실패 하셨습니다.";
    //    return res.json(response);

    // //    return res.json({
    // //     success : false,
    // //     msg: "로그인에 실패 하셨습니다."
    // //    })
       
    },
    register : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
}

// const user = new User(req.body);
// const response = user.login();
// return res.json(response);