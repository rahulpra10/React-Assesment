
// Reguler Exp for Email

export const reg_email = (e) => {

    e.preventDefault()
    let email = document.getElementById("email").value;
    let reguler_email = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (reguler_email.test(email)){
        document.getElementById("msg1").innerHTML = "";
        return false;
    }else{
        document.getElementById("msg1").innerHTML = "Please Enter Valid Email!!"
        return false;
    }
    
}

export const reg_pass = (e) => {

    e.preventDefault()
    let pass = document.getElementById("pass").value;
    let reg_pass = new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    );

    if(reg_pass.test(pass)){
        document.getElementById("msg2").innerHTML = "";
        return false;
    }else{
        document.getElementById("msg2").innerHTML = "Please Enter Valid Password!!"
        return false;
    }
}

// Confirm Password validate

export const check_pass = (e) => {
    e.preventDefault()
    let pass = document.getElementById("pass").value;
    let co_pass = document.getElementById("coPass").value;
    if(pass !== co_pass){
        document.getElementById("msg3").innerHTML = "PASSWORD and CONFIRM PASSWORD was not same";
        return false;
    }else{
        document.getElementById("msg3").innerHTML = "";
        return false;
    }
}

// name validate max_length 4 characters

export const check_name = (e) => {
    e.preventDefault()
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    if((fname && lname).length > 4){
        document.getElementById("msg4").innerHTML = "Enter NAME less than or equal to 4 character";
        document.getElementById("msg5").innerHTML = "Enter NAME less than or equal to 4 character";
        return false;
    }else{
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("msg4").innerHTML = "";        
        return false;
    }
}