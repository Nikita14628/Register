let btn = document.getElementById('btn');
let txt = document.getElementById('txt')
function changeColor(color){
document.body.style.background = color;
btn.style.background = color;
txt.style.borderColor = color;

document.querySelectorAll('span').forEach(function(item){
item.classList.remove('active');
})
event.target.classList.add('active')
}

        
/*------------------------------------------*/



let pswrd= document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');
let pswrd2= document.getElementById('pswrd2');
let toggleBtn2 = document.getElementById('toggleBtn2');


let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');


function checkPassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    if(lower.test(data)){
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
    }
    /*-------*/
    if(upper.test(data)){
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }
    /*-------*/
    if(number.test(data)){
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }
    /*-------*/
    if(special.test(data)){
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }
    /*-------*/
    if(length.test(data)){
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }
}

toggleBtn.onclick = function(){
    if (pswrd.type == 'password'){
        pswrd.setAttribute('type','text');
        toggleBtn.classList.add('hide');
    } else {
        pswrd.setAttribute('type','password');
        toggleBtn.classList.remove('hide');

    }
}

toggleBtn2.onclick = function(){
    if (pswrd2.type == 'password'){
        pswrd2.setAttribute('type','text');
        toggleBtn2.classList.add('hide');
    } else {
        pswrd2.setAttribute('type','password');
        toggleBtn2.classList.remove('hide');

    }
}