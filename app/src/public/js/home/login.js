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
    }
    console.log(req);
}
