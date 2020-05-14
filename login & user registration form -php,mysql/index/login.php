<?php

session_start();

$server="localhost";
$username="root";
$password="";
$dbname="b";

$user=$_POST['uname'];
$psw=$_POST['psw'];

$conn=mysqli_connect($server,$username,$password,$dbname);

$sql="SELECT USERNAME,PASSWORD FROM USERS WHERE username='$user' and password='$psw';";
$query=mysqli_query($conn,$sql);

$result=mysqli_num_rows($query);

if($result==1){
    $_SESSION['name']=$user;
    header('Location:../profile/profile.php');
    
}
else{
   //echo "<h1><font color='red'>Oops !! Incorrect username or password</font></h1>";
//    header("Refresh:0.7; url=main.php");
   echo("<script>alert('incorrect username or password!')</script>");
     echo("<script>window.location = 'index.php';</script>");

}

?>
