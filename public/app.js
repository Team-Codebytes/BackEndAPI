$(document).ready(function(){
	$.getJSON("/api/enterpriceuser")
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
	$.post("/api/commonuser/create", {
		FirstName: firstNameInput,
		LastName: lastNameInput,
		Email_id: email_idInput,
		Password: passwordInput,
		Address: addressInput,
		State: stateInput,
		City: cityInput,
		Pincode: pincodeInput,
		Phone_no: phone_noInput
	})
	.then(function(newUser){
		$('#firstName').val("");
		$('#lastName').val("");
		$('#email_id').val("");
		$("#password").val("");
		$("#address").val("");
		$("#state").val("");
		$("#city").val("");
		$('#pincode').val("");
		$('#phone_no').val("");
		addUser(newUser);
	})
	.catch(function(err){
		console.log(err);
	})
}

function addUser(newUser){
	var newTodo = $('<li>'+ newUser.Email_id+ ' </li>');
	newTodo.data("id", newUser._id);
	$('.list').append(newTodo);
}

function createEnterprice(){
	var firstNameInput = $('#firstName').val();
	var email_idInput = $('#email_id').val();
	var passwordInput = $("#password").val();
	var addressInput = $("#address").val();
	var stateInput = $("#state").val();
	var cityInput = $("#city").val();
	var pincodeInput = $('#pincode').val();
	var phone_noInput= $('#phone_no').val();
	//alert(userInput);
	$.post("/api/enterpriceuser/create", {
		CompanyName: firstNameInput,
		Email_id: email_idInput,
		Password: passwordInput,
		Address: addressInput,
		State: stateInput,
		City: cityInput,
		Pincode: pincodeInput,
		Phone_no: phone_noInput
	})
	.then(function(newUser){
		addUser(newUser);
		$('#firstName').val("");
		$('#email_id').val("");
		$("#password").val("");
		$("#address").val("");
		$("#state").val("");
		$("#city").val("");
		$('#pincode').val("");
		$('#phone_no').val("");
	})
	.catch(function(err){
		console.log(err);
	})
}
