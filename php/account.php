

<?php
session_start();
if (isset($_GET['logout']) && $_GET['logout'] === 'true') {
// Start the session
session_start();
// Check if the user clicked the logout button
$_SESSION = array();
session_destroy();
header('Location: ../html/login.html');
exit; // Ensure the script stops executing after the redirect
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<?php
 if (!isset($_SESSION['username'])) {
  header('Location: ../html/login.html');
  exit;
 }
$data_get = $_SESSION['user'];
?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>User Profile Form</title>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
  <style>
body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .ui-widget {
      background-image: url("../img/Account.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    #edit-form {
      width: 579px;
      margin: 50px auto;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.8); /* Add a transparent background to the form */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    }

    label {
      display: block;
      margin-bottom: 8px;
    }

    input[type="text"],
    input[type="email"],
    input[type="number"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .error-message {
      color: #f44336;
      margin-top: 5px;
    }

    .dflex{
      display: flex;
    align-items: center;
    gap: 42rem;
    }

    .logout-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 4px;
    text-align: center;
  }
button{
  background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 4px;
    color:white;
}
  .logout-button a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
  </style>
</head>

<body class="ui-widget">
  <!-- Hidden form initially -->
  <div class="dflex">
  <form id="edit-form" action="../php/edit.php" method="post" style="display: none;">
    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" name="firstname" /><br />

    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" name="lastname" /><br />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" /><br />

    <label for="phone">Phone number(10 digits):</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
<span class="error-message"></span><br />


    <label for="address">Address:</label>
    <input type="text" id="address" name="address" /><br />

    <label for="username">Username:</label>
    <input type="text" id="username" name="username" /><br />
    <input type="hidden" id="id" name="id" /><br />
    <button type="submit" value="edit">Edit</button>

  </form>


  </div>
  <div id="loading" style="text-align: center; padding: 20px; color:white; font-weight:700;">
    Loading...
  </div>
     

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    console.log("abc")
    $(document).ready(function() {
      var mydata = JSON.parse(<?php echo json_encode($data_get); ?>);
      console.log(mydata);

      var form = $('#edit-form');
      var loading = $('#loading');

      // Fill the form fields with user data
      $('#firstname').val(mydata.firstname);
      $('#lastname').val(mydata.lastname);
      $('#email').val(mydata.email);
      $('#phone').val(mydata.phone);
      $('#address').val(mydata.address);
      $('#username').val(mydata.username);
      $('#id').val(mydata.id);

      // Hide the loading message and show the form with a fade-in effect
      loading.fadeOut(1000, function() {
        form.fadeIn(1000);
      });

      // Validate the form before submission
      form.on('submit', function(event) {
  var valid = true;

  // Simple validation example, you can add more validation as needed
  if ($('#firstname').val() === '') {
    valid = false;
    $('#firstname').next('.error-message').text('Please enter your first name.');
  } else {
    $('#firstname').next('.error-message').text('');
  }

        if ($('#lastname').val() === '') {
          valid = false;
          $('#lastname').next('.error-message').text('Please enter your last name.');
        } else {
          $('#lastname').next('.error-message').text('');
        }

        if ($('#email').val() === '') {
          valid = false;
          $('#email').next('.error-message').text('Please enter your email.');
        } else {
          $('#email').next('.error-message').text('');
        } 


        if ($('#phone').val() === '') {
          valid = false;
          $('#phone').next('.error-message').text('Please enter your phone number.');
        } else {
          $('#phone').next('.error-message').text('');
        }

        if ($('#address').val() === '') {
          valid = false;
          $('#address').next('.error-message').text('Please enter your address.');
        } else {
          $('#address').next('.error-message').text('');
        }

        if ($('#username').val() === '') {
          valid = false;
          $('#username').next('.error-message').text('Please enter your username.');
        } else {
          $('#username').next('.error-message').text('');
        }

        if (!valid) {
          event.preventDefault(); // Prevent form submission if there are errors
        }
      });
    });

    function logout(){
      console.log("test")
      window.location.href="http://localhost/mainfolder/Project/code/php/account.php?logout=true";
     
    }
  </script>
  <button onclick="logout()" class="logout-button">  LOG OUT! </button>
</body>
</html>