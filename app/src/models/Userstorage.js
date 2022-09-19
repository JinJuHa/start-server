class Userstorage {
    //임시 데이터 만들기
    static #users = {
        id : ["jjhh" , "개발자", "나사원"],
        pw : ["1234" , "2468" , "1705"],
        name : [" 진주하" , "진권영" , "나희도"],
        email : ["jjhh321@gmail.com", "gin@gmail.com", "gon@gmail.com"],
    }

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            //console.log(newUsers, field);
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pw, name]
        const userInfo = usersKeys.reduce((newUser , info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    // 일회용처럼 데이터 저장하기
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.email.push(userInfo.email);
        users.pw.push(userInfo.pw);
        return { success : true };
        //console.log(users);
    }
}

module.exports = Userstorage;