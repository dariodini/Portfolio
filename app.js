function init() {
    emailjs.init("cU4hFRzVmpWwKqNK7");
}

function validate() {
    let nome = document.querySelector("#form-nome");
    let email = document.querySelector("#form-email");
    let messaggio = document.querySelector("#form-messaggio");
    let btn = document.getElementById("bottone-invia");

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (nome.value === "" || email.value === "" || messaggio.value === "") {
            datiMancanti();
        } else {
            if(checkEmail(email.value)){
                sendEmail(nome.value, email.value, messaggio.value);
                toggleFormAndBlur();
                setTimeout(emailInviata, 500);
            }
            else{
                datiMancanti();
            }
        }
    });
}


function checkEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function sendEmail(nome, email, messaggio) {
    emailjs.send("service_dario_portfolio", "template_dario_portfolio", {
        email: email,
        nome: nome,
        messaggio: messaggio,
    });
}


function datiMancanti(){
    addAlert();
}
function addAlert() {
    document.getElementById("alert").classList.add("active-alert");
}
function removeAlert(){
    document.getElementById("alert").classList.remove('active-alert');
}


function toggleFormAndBlur() {
    document.getElementById("blur").classList.toggle("active");
    document.getElementById("popup").classList.toggle("active");
}



function emailInviata(){
    addSuccess();
}
function addSuccess(){
    document.getElementById('success').classList.add('active-success');

    setTimeout(()=>{
        document.getElementById('success').classList.remove('active-success');
    }, 4500)
}



init();
validate();



let close = document.getElementById('close');
close.addEventListener('click', removeAlert);
close.addEventListener('click', toggleFormAndBlur);

