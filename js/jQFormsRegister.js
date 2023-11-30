
$(document).ready(function () {
  console.log($("#registration-form"));
  $("#registration-form").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 2,
      },
      lastname: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        minlength: 7,
        maxlength:100,
      },
      gender: {
        required: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      address: {
        required: true,
        maxlength:100,
        minlength:10,
      },
      username: {
        required: true,
        minlength: 4,
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      firstname: {
        required: "Please enter your first name",
        minlength: "Your first name must be at least 2 characters long",
      },
      lastname: {
        required: "Please enter your last name",
        minlength: "Your last name must be at least 2 characters long",
      },
      email: {
        required: "Please enter your email",
        minlength: "Your email must be at least 7 characters long",
        maxlength: "Your email must not be longer than 100 characters",
        emailRegex: "Please enter a valid email address",
      },
      gender: {
        required: "Please enter your gender",
      },
      phone:{
        required: "Please enter your number",
        minlength: "Your phone number must be at least 10 characters long",
        maxlength:"Your phone number must not be longer than 10 characters"
      },
      address:{
        required: "Please enter your address",
        minlength: "Your address must be at least 10 characters long",
        maxlength:"Your address must not be longer than 100 characters"
      },
      username: {
        required: "Please enter a username",
        minlength: "Your username must be at least 4 characters long",
      },
      password: {
        required: "Please enter a password",
        minlength: "Your password must be at least 8 characters long",
      },
      confirmPassword: {
        required: "Please confirm your password",
        equalTo: "Your passwords do not match",
      },
    },
  });
});

