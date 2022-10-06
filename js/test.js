
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

// CHECK NAME 
function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.lenght ==0){
        nameError.innerHTML = 'الاسم مطلوب';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'اكتب الاسم كاملا';
        return false;
    }
    nameError.innerHTML = '<lable><i class="fas fa-check-circle"></i></lable';
    return true;
}

// CHECK PHONE  
function validatePhone(){
    var Phone = document.getElementById('contact-phone').value;

    if(Phone.length == 0){
        phoneError.innerHTML  = 'الهاتف مطلوب';
        return false;
    }
    if(Phone.length !== 10){
        phoneError.innerHTML  = 'يجب ان يكون رقم الهاتف من 10 ارقام';
        return false;
    }
    if(!Phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML  = 'ارقام فقط من فضلك';
        return false;
    }
    phoneError.innerHTML = '<lable><i class="fas fa-check-circle"></i></lable';
    return true;
}

// CHECK EMAIL 
function validateEmail(){
    var email = document.getElementById('contact-email').value;

if(email.lenght == 0){
emailError.innerHTML = 'الايميل مطلوب'
return false;
}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
emailError.innerHTML = 'الايميل غير صحيح'
return false;
}

emailError.innerHTML = '<lable><i class="fas fa-check-circle"></i></lable>';
return true;
}

// CHECK MESSAGE 
function validateMessage(){
    var meassage = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - meassage.lenght;
    
    if(left > 0){
        messageError.innerHTML = left + 'more character required';
        return false;
    }
    messageError.innerHTML = '<lable><i class="fas fa-check-circle"></i></lable>';
    return true;
}