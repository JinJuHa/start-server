//const id = document.querySelector('선택자')
const id = document.querySelector('#id'),
    namei = document.querySelector('#name'),
    email = document.querySelector('#email'),
    pword = document.querySelector('#pw'),
    pwordConfirm = document.querySelector('#Confirm-pw'),
    registerb = document.querySelector('.sub');


//console.log(id);

registerb.addEventListener("click", register);

function register() {
    const req = {
        id : id.value,
        name: namei.value,
        pw : pword.value,
        pwordConfirm : pwordConfirm.value
    };
    //console.log(req);
    //console.log( JSON.stringify(req));

    fetch('/register', {
        method : 'POST' ,
        headers : {
            "Content-Type" : "application/json", 
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = '/login';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러발생"))
    });

}