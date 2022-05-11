const queryString = window.location.search;

console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const UsernameCon = urlParams.get('username');
const passwordCon = urlParams.get('password');

window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
 	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];
	if(username.value != UsernameCon || password.value != passwordCon)
	{
		alert("Try Again");
		return false;
	}
	else
	{
		alert("Successful");
	}

}			