<!DOCTYPE html>
<html ng-app="movieReview">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>moviewer</title>
	<!-- Stylesheet -->
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<!-- JS Library -->
	<script type="text/javascript" src="js/lib/angular.min.js"></script>
	<script type="text/javascript" src="js/lib/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/lib/require.min.js"></script>
	<!-- User JS -->
	<script type="text/javascript" src="js/movieModule.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
</head>
<body ng-controller="MovieController as movie">
	<header>
		<nav class="nav-wrapper">
			<h1>Moviewer</h1>
			<div class="search-filter">
				<input type="text" placeholder="search" id="query" ng-model="query" />
			</div>
		</nav>
	</header>
	<div class="container">
		<div class="list-group cf" id="wrap">
			<div class="list-group-item-wrapper" ng-repeat="movie in movie.movies | filter:query | orderBy:'name' ">
				<div class="list-group-item">
					<div class="gallery">
						<img ng-src="{{movie.images[0]}}"/>
					</div>
					<section class="tab" ng-controller="TabController as tab">
						<ul class="tabs cf">
							<li ng-class="{ active: tab.isSet(1) }"><a href ng-click="tab.setTab(1)">Info</a></li>
							<li class="slide-tab" ng-class="{ active: tab.isSet(2) }"><a href ng-click="tab.setTab(2)">Synopsis</a></li>
							<li class="slide-tab" ng-class="{ active: tab.isSet(3) }"><a href ng-click="tab.setTab(3)">Reviews</a></li>
						</ul>
						<article class="movie-info">
							<div class="tab-info" ng-show="tab.isSet(1)">
								<h2>{{movie.name}} </h2>
								<blockquote>{{movie.director}}</blockquote>
								<h3>{{movie.info}}</h3>
							</div>
							<div class="tab-info" ng-show="tab.isSet(2)">
								<h2>{{movie.name}}</h2>
								<blockquote class="tab-info-block">{{movie.description}}</blockquote>
							</div>

						</article>
						<div class="tab-info" ng-show="tab.isSet(3)" class="tab">
							<ul>
								<li class="review">
									<blockquote>
										<?php
											$con=mysql_connect("localhost", "root", "root");
											mysql_select_db("moviewer");
											$result = mysql_query("SELECT * FROM movie_reviews");
											while($row = mysql_fetch_array($result)) {
												print $row['stars'];
												print $row['comment'];
												print $row['username'];
											}
											mysql_close();
										?>
									</blockquote>
								</li>
							</ul>
							<form action="database.php" method="post" class="review-form" name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewForm.$valid && reviewCtrl.addReview(movie)"novalidate class="tab">
								<h4>Submit a Review</h4>
								<select name="stars" id="">
									<option>Rate the Movie</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<textarea name="comment" id="" cols="30" rows="10" placeholder="Write a comment"></textarea>
								<input name="username" type="text" placeholder="Username">
								<input type="submit" class="review-submit" value="Submit Review">
							</form>
						</div>
					</section>
					<h4 ng-class="{'bad': movie.rating == 'R', 'normal': movie.rating == 'PG-13', 'good': movie.rating == 'PG'}" class="rating">{{movie.rating}}</h4>
				</div>
			</div>
		</div>
	</div>
</body>
</html>