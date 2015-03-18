<?php
	$host="localhost"; 
	$username="root";
	$password="root"; 
	$db_name="moviewer"; 
	$con=mysql_connect("$host", "$username", "$password");

	if(!$con) { die("Database connection failed: " . mysql_error()); }

	mysql_select_db("moviewer");
	$result = mysql_query($con,"SELECT * FROM movie_reviews");
/*
	$strSQL = "SELECT * FROM movie_reviews";
	$rs = mysql_query($strSQL);
	while($row = mysql_fetch_array($rs)) {
		echo $row['stars'] . "<br />";
		echo $row['comment'] . "<br />";
		echo $row['username'];
	}
*/
	while($row = mysql_fetch_array($result)) {
		$row['stars'];
		$row['comment'];
		$row['username'];
	}
	mysql_close();
?>