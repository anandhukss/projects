<?php

$server="localhost";
$username="root";
$password="";
$dbname="b";


$uid=$_POST['username'];
$inputPassword=$_POST['password'];
$email=$_POST['email'];
$confirmPassword=$_POST['confirm'];


$conn=mysqli_connect($server,$username,$password,$dbname);
$query="INSERT INTO USERS VALUES(null,'$uid','$email','$confirmPassword');";
$sql="SELECT USERNAME  FROM USERS WHERE username='$uid';";
$emailcheck="SELECT EMAIL FROM USERS WHERE email='$email';";
$result1=mysqli_query($conn,$emailcheck);
$result=mysqli_query($conn,$sql);
$rows1=mysqli_num_rows($result1);
$rows=mysqli_num_rows($result);


if($rows >=1 ){
    echo "<h2><font color='red'>Oops !!! username or email alreadey in use</font></h2>";
     header("Refresh:2,url=index.php");
}
elseif($rows1 >=1){
    echo "<h2><font color='red'>Oops !!! username or email alreadey in use</font></h2>";
     header("Refresh:2,url=index.php");
}
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
 echo "<h2><font color='red'>Please enter a valid email</font></h2>";
    header("Refresh:2,url=index.php");
}

elseif($inputPassword != $confirmPassword){
   echo "<h2><font color='red'>Passwords does not match!!</font></h2>";
    header("Refresh:2,url=index.php");
}

else {
   mysqli_query($conn,$query);
    echo "<h2><font color='green'>Congratulations !! you have been successfully registered!!</font></h2>";
     header("Refresh:2,url=../index/index.php");
}


