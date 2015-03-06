app.controller('two_way_control',function($scope,$http,$interval){
	load_pictures();
	$interval(function(){
		load_comments();
	},300);

	function load_comments(){
		$http.get('http://localhost:3000/load').success(function(data){
			$scope.user_comments=data;
		});
	};
});