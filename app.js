const emailSearch = () => {
    const inputEmail = document.getElementById('input-email');
    const emailSearch = inputEmail.value;
    emailShow(emailSearch);
}

const emailShow = email => {
    const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email.match(validation)){
        alert('you are email is valid')
    }else{
        alert('Error ! you are email not valid');
    }
}