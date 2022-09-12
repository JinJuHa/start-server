class Userstorage {
    //임시 데이터 만들기
    static #users = {
        id : ["jjhh" , "개발자", "나사원"],
        pw : ["1234" , "2468" , "1705"],
        name : [" 진주하" , "진권영" , "나희도"],
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
}

module.exports = Userstorage;