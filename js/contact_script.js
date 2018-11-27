/*
Thomas Boller
Basic form data collection
*/

	var subButton = document.getElementById('submit');
	
	function submitBtnHandler () {
		//tests the button was clicked
		console.log('submit clicked');
		
		var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		//stores the form data for use
		var name = document.getElementById('name');
		var email = document.getElementById('email');
		
		var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		//var email = document.getElementById('email');
		if (regexEmail.test(email.value)) {
			submitForm();
		} else {
			alert("You need to enter a valid email address")
		}
	};		
		
	function submitForm () {		
		//Alerts the user that their data was submited
		alert("Your information was received, someone will contact you shortly");		
	
		/* This code would mail the form to isud - I have this commented out so they are not getting emails on accident
		var yourMessage = document.getElementById("message").value + document.getElementById("name").value + document.getElementById("email").value;
		var subject = document.getElementById("subject").value;
		document.location.href = "mailto:isud2018@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
		*/
	}