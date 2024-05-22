let form = document.querySelector('#form')
let first_name = document.querySelector('#first_name')
let last_name = document.querySelector('#last_name')
let cnic = document.querySelector('#cnic')
let age = document.querySelector('#age')

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let retype_password = document.querySelector('#retype_password')


let label1 = document.querySelector('#l1')
let label2 = document.querySelector('#l2')
let label3 = document.querySelector('#l3')
let label4 = document.querySelector('#l4')
let label5 = document.querySelector('#l5')



let first_name_regex =/^[a-zA-Z]{3,15}$/;
let last_name_regex =/^[a-zA-Z]{3,15}$/;
let cnic_regex = /^42\d{11}$/;
let age_regex = /^(1[89]|[2-5][0-9]|60)$/


let email_regex = /^(?=.*[0-9])(?=.*[._%+-])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// let email_regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[._%+-])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/


let password_regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (first_name_regex.test(first_name.value) && last_name_regex.test(last_name.value) && age_regex.test(age.value) && cnic_regex.test(cnic.value) && email_regex.test(email.value) && password_regex.test(password.value) && password.value === retype_password.value) {
       console.log(first_name.value);
       console.log(last_name.value);
       console.log(age.value);
       console.log(cnic.value);
       console.log(email.value);
       console.log(password.value); 

       first_name.value = ''
       last_name.value = ''
       age.value = ''
       cnic.value = ''
       email.value = ''
       password.value = ''
       retype_password.value = ''

       label1.innerHTML = ``
       label2.innerHTML = ``
       label3.innerHTML = ``
       label4.innerHTML = ``
       label5.innerHTML = ``
   
    }
    
else if((first_name_regex.test(first_name.value)) == false){
    label1.innerHTML = `lenth min 3 and max 15 <br>`
    


}
else if (last_name_regex.test(last_name.value) == false){
    label1.innerHTML = `lenth min 3 and max 15 <br>`
}

else if (age.value<18 || age.value>60){
    label1.innerHTML = ``
    

    label2.innerHTML = 'bhi age ka masla he<br> '
}
else if(cnic_regex.test(cnic.value) == false){
    label1.innerHTML = ``
    label2.innerHTML = ``

    label3.innerHTML = 'Cnic theek likho<br> '

}

else if(email_regex.test(email.value) == false){
    label1.innerHTML = ``
    label2.innerHTML = ``
    label3.innerHTML = ``

    label4.innerHTML = 'email theek nhi min 1 number or 1 special cherecter ka used karo<br> '

}

else if(password_regex.test(password.value) == false){
    label1.innerHTML = ``
    label2.innerHTML = ``
    label3.innerHTML = ``
    label4.innerHTML = ``


    label5.innerHTML ='password strong nhi he <br>min length 8 cherexter , min 1 capital alphabate , min 1 number ,min 1 special cherecter <br>' 

}

else if(password != retype_password){
    label1.innerHTML = ``
    label2.innerHTML = ``
    label3.innerHTML = ``
    label4.innerHTML = ``


    label5.innerHTML = 'please curect same password<br>'

} 

else{
    `${alert('enter currect information')}`
    
    // label2.innerHTML = 'min 1 number ,min 1 special cherecter and @gmail.com <br>'
    // label3.innerHTML = 'min 8 cherecter lenth ,min 1 capital word ,min 1 number ,min 1 special cherecter <br>'
}}
)




