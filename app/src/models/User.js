const Userstorage = require('./Userstorage')

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const { id , pw } = Userstorage.getUserInfo(client.id);

        if (id) {
            if(id === client.id && pw === client.pw){
                return { success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."}
        }
        return {success : false, msg : "존재하지 않는 아이디 입니다."}
        //console.log(id , pw)
    }

    register() {
        const client = this.body;
        const response = Userstorage.save(client);
        return response;
    }
}

module.exports = User;