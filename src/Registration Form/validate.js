export const validate = (e) => {
    
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let rePass = document.getElementById("coPass").value;
    let lname = document.getElementById("lname").value;
    let mobile = document.getElementById("mobile").value;
    let add = document.getElementById("add").value;
    let region = document.getElementById("region").value;
    let zip = document.getElementById("zip").value;
    let country = document.getElementById("country").value;

    if (fname === "" && email === "" 
    && pass === "" && rePass === "" && lname === "" && mobile === "" && add === "" && region === "" && zip === "" && country == -1){
        document.getElementById("msg1").innerHTML = "Email is Required!!!"
        document.getElementById("msg2").innerHTML = "Password is Required!!"
        document.getElementById("msg3").innerHTML = "Password is Required!!"
        document.getElementById("msg4").innerHTML = "First Name is Required!!!"
        document.getElementById("msg5").innerHTML = "Last Name is Required!!"
        document.getElementById("msg6").innerHTML = "Phone Number is Required!!"
        document.getElementById("msg7").innerHTML = "Address is Required!!"
        document.getElementById("msg9").innerHTML = "Region is Required!!"
        document.getElementById("msg10").innerHTML = "Postcode/Zip is Required!!"
        document.getElementById("msg11").innerHTML = "Country is Required!!"

        return false;
    }
    
}