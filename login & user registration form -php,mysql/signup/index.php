<html>
    <head>
    <link href="style.css" rel="stylesheet">
    </head>
    <body>
         <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
<form action="db.php" method="post">
    <input type="text" name="username" placeholder="username" required ><br>
    <input type="text" name="email" placeholder="email" required><br>
    <input type="password" name="password" placeholder="password" required><br>
        <input type="password" name="confirm" placeholder="Re-enter password" required><br>

    <button type="submit" class="signupbtn">submit</button>    
    </form>
        </div>
    </body>
</html>
