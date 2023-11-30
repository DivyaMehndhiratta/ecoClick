<?php
// Start the session
session_start();


// Define database connection variables
$servername = "localhost";
$username = "web";
$password = "web";
$dbname = "registration";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Get form data and sanitize it
  $firstname = mysqli_real_escape_string($conn, $_POST["firstname"]);
  $lastname = mysqli_real_escape_string($conn, $_POST["lastname"]);
  $username = mysqli_real_escape_string($conn, $_POST["username"]);
  $address = mysqli_real_escape_string($conn, $_POST["address"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
  $id = mysqli_real_escape_string($conn, $_POST["id"]);

  // Prepare the SQL query to retrieve the user's data
  $sql = "UPDATE users SET firstname = '$firstname', lastname = '$lastname', username='$username', address='$address' , email='$email', phone='$phone' WHERE id = '$id'";

  // Execute the query and get the result
  $result = mysqli_query($conn, $sql);


$sql2= "SELECT * from users WHERE id='$id'";
$result2 = mysqli_query($conn, $sql2);
    // Get the user's data from the result
$row = mysqli_fetch_assoc($result2);
$_SESSION["user"] = json_encode($row);
$_SESSION["username"]=$username;

      // // Redirect the user to a secure page
 header("location: /mainfolder/Project/code/php/home.php");
}


// Close the database connection
mysqli_close($conn);
?>