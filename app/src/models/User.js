const Userstorage = require('./Userstorage')

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id , pw } = Userstorage.getUserInfo(this.body.id);

        if (id) {
            if(id === this.body.id && pw === this.body.pw){
                return { success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."}
        }
        return {success : false, msg : "존재하지 않는 아이디 입니다."}
        //console.log(id , pw)
    }
}

module.exports = User;