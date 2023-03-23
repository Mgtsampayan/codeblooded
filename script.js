var attempts = 0;

function checkLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "admin@gmail.com" && password == "password") {
		alert("Login successful!");
		window.location = "index.html";
	} else {
		attempts++;
		var remainingAttempts = 3 - attempts;
		document.getElementById("error-message").innerHTML = "Incorrect username or password. You have " + remainingAttempts + " attempts left.";
		if (attempts == 3) {
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("login-button").disabled = true;
			document.getElementById("error-message").innerHTML = "You have been locked out for 10 Seconds.";
			setTimeout(function() {
				document.getElementById("username").disabled = false;
				document.getElementById("password").disabled = false;
				document.getElementById("login-button").disabled = false;
				document.getElementById("error-message").innerHTML = "DI KA PA NAGSASAWANG MAGKAMALI AYUSIN MO NAMAN";
				attempts = 0;
			}, 10000); // 10 seconds lang para hindi naman sobrang tagal
		}
	}
}

document.getElementById("login-button").addEventListener("click", function(event) {
	event.preventDefault();
	checkLogin();
});