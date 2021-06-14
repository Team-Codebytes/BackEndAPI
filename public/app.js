$(document).ready(function(){
	$.getJSON("/api/workers")
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

function images(){
	// var user_typeInput = "commonuser";
	// var image_catInput = "Profile"
	// var Phone_noInput = 6969696969
	// $.post("/api/uploads/get", {
	// 	user_type: user_typeInput,
	// 	image_cat: image_catInput,
	// 	Phone_no: Phone_noInput
	// })
	// .then(function(img){
	// 	console.log(img)
	// })

	var headers = new Headers();
	headers.append("X-CSCAPI-KEY", "TG1YTzYzeWpnVXdiZnJFNXI0QURaeFBMYzYxeVd3dnhqR3puem5ucg==");

	var requestOptions = {
		method: 'GET',
		headers: headers,
		redirect: 'follow'
	};

	fetch("https://api.countrystatecity.in/v1/countries/IN/states/MH/cities", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
}


$("#show").click(function(){
	$.post("/API/uploads/60b5e94131918b3720c26cda/get", {
		user_type:"commonuser",
    	image_cat:"Profile"
	})
	.then(function(newUser){
		console.log(newUser)
		$('#img').attr({
			'src':"images/"+newUser.filename,
			'alt': newUser.filename
		})
	})
	.catch(function(err){
		console.log(err);
	})
})
