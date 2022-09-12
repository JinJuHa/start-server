//const id = document.querySelector('선택자')
const id = document.querySelector('#id'),
    pword = document.querySelector('#pw'),
    loginb = document.querySelector('button');

//console.log(id);

loginb.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value,
    };
    //console.log(req);
    //console.log( JSON.stringify(req));

    fetch('/login', {
        method : 'POST' ,
        headers : {
            "Content-Type" : "application/json", 
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = '/';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러발생"))
    });

}
