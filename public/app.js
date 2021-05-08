$(document).ready(function(){
	$.getJSON("/api/commonuser")
	.then(Users)
	.catch(function(err){
		console.log(err);
	});
	
});

function Users(users){
	users.forEach(function(user){
		addUser(user);
    });
}; 

function createUser(){
	var firstNameInput = $('#firstName').val();
	var lastNameInput = $('#lastName').val();
	var email_idInput = $('#email_id').val();
	var passwordInput = $("#password").val();
	var addressInput = $("#address").val();
	var stateInput = $("#state").val();
	var cityInput = $("#city").val();
	var pincodeInput = $('#pincode').val();
	var phone_noInput= $('#phone_no').val();
	//alert(userInput);
	$.post("/api/commonuser", {
		FirstName: firstNameInput,
		LastName: lastNameInput,
		Email_id: email_idInput,
		password: passwordInput,
		Address: addressInput,
		State: stateInput,
		City: cityInput,
		Pincode: pincodeInput,
		Phone_no: phone_noInput
	})
	.then(function(newUser){
		$("#username").val("");
	 	$("#password").val("");
		$("#email_id").val("");
		$("#phn").val("");
		$("#address").val("");
		addUser(newUser);
	})
	.catch(function(err){
		console.log(err);
	})
}

function addUser(newUser){
	var newTodo = $('<li>'+ newUser.FirstName+ ' </li>');
	newTodo.data("id", newUser._id);
	$('.list').append(newTodo);
}
