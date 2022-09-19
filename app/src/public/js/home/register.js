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
    if(pw.value !== pwordConfirm.value){
        alert('비밀번호가 일치하지 않습니다.')
    }
    const req = {
        id : id.value,
        name: namei.value,
        email : email.value,
        pw : pword.value,
    };
    console.log(req);
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