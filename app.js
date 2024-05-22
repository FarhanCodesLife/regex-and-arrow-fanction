let form = document.querySelector('#form')
let first_name = document.querySelector('#first_name')
let last_name = document.querySelector('#last_name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let retype_password = document.querySelector('#retype_password')


let label1 = document.querySelector('#l1')
let label2 = document.querySelector('#l2')
let label3 = document.querySelector('#l3')



let first_name_regex =/^[a-zA-Z]{3,15}$/;
let last_name_regex =/^[a-zA-Z]{3,15}$/;
let email_regex = /^(?=.*[0-9])(?=.*[._%+-])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// let email_regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[._%+-])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/


let password_regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (first_name_regex.test(first_name.value) && last_name_regex.test(last_name.value) && email_regex.test(email.value) && password_regex.test(password.value) && password.value === retype_password.value) {
       console.log(first_name.value);
       console.log(last_name.value);
       console.log(email.value);
       console.log(password.value); 
    }
    




else{
    `${alert('enter currect information')}`
    label1.innerHTML = `lenth min 3 and max 15 <br>`
    label2.innerHTML = 'min 1 number ,min 1 special cherecter and @gmail.com <br>'
    label3.innerHTML = 'min 8 cherecter lenth ,min 1 capital word ,min 1 number ,min 1 special cherecter <br>'
}}
)