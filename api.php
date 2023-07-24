

<?php
include './config.php';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM `user` WHERE `email` = '" . $_POST['email'] . "' AND `password` = '" . $_POST['password'] . "'";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);
if ($user) {
    echo "Success";
} else {
    echo 'wrong password';
}

?>