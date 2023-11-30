<?php

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
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
  $gender = mysqli_real_escape_string($conn, $_POST["gender"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $address = mysqli_real_escape_string($conn, $_POST["address"]);
  

  // Hash the password using bcrypt
  $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  
  
  // Prepare the SQL query to insert the data into the database
  $sql = "INSERT INTO users (firstname, lastname, username, password, phone, gender, email, address)
          VALUES ('$firstname', '$lastname', '$username', '$hashed_password' , $phone, '$gender', '$email', '$address')";
  // Execute the query and check for errors
  if (mysqli_query($conn, $sql)) {
  header("location: /mainfolder/Project/code/html/login.html");
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}
// Close the database connection
mysqli_close($conn);

?>