<?php
session_start();
if(!isset($_SESSION['name'])){
    session_destroy();
    header('Location:../index/index.php');
}
?>


<head>
<link href="1.css" rel="stylesheet">
</head>

<body>
     <div class="logout">
    
   <font size="5" >
       <a href="logout.php">Logout</a></font>
         </div>
    <div class="container">
<h1>
   Welcome <?php 
  

      echo $_SESSION['name']; 
    
  
    ?>
    </h1>
    
    </div>
</body>