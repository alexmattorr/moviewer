<?php
	$host="localhost"; 
	$username="root";
	$password="root"; 
	$db_name="moviewer"; 

	$con=mysql_connect("$host", "$username", "$password");

	if(!$con) {
		die("Database connection failed: " . mysql_error());
	}

	mysql_select_db(moviewer);
	$sql = "INSERT INTO movie_reviews (stars, comment, username) VALUES ('$_POST[stars]', '$_POST[comment]', '$_POST[username]')";

	if(!mysql_query($sql, $con)) {
		die('Error:' . mysql_error());
	}
	header('location: index.php');
	mysql_close($con);
?>
