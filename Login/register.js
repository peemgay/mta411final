window.onload = pageLoad;

function pageLoad() {
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["retypepassword"];
    var error=document.getElementById("errormsg");
    error.innerHTML="";
    if (pass.value == repass.value)
    {
        alert("Successful");
    }
    else if (pass.value != repass.value)
    {
        error.innerHTML+=" Try Again";
        alert("Try Again");
        return false;
    }

}