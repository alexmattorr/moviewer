(function() {
	var app = angular.module('movieReview', [])

	app.controller('MovieController', function() {
    		this.movies = movie;
    	});

    	app.controller('TabController', function() {
    		this.tab = 1;
    		this.setTab = function(selectedTab) {
    			this.tab = selectedTab;
    		};

    		this.isSet = function(tab) {
    			return this.tab === tab;
    		};
	});

    	app.controller('ReviewController', function() {
      		this.review = {};
      		this.addReview = function(movie) {
        			movie.reviews.push(this.review);
        			this.review = {};
      		};
   	});

    	app.controller('moviewer',function($scope,$http,$interval){
		load_comments();
		$interval(function(){
			load_comments();
		}, 300);
		
		function load_comments(){
			$http.get('http://localhost:8888/load').success(function(data){
				$scope.profile_comments=data;
			});
		};
	});

  	var movie = [{ 
	    	name: 'Hot Tub Time Machine 2',
	    	director: 'Steve Pink',
	    	description: 'Hot Tub Time Machine director Steve Pink returns to the helm for this sequel set ten years in the future, when Nick (Craig Robinson), Jacob (Clark Duke), and Adam Jr. (Adam Scott) must help Lou (Rob Corddry) out of a jam in the past.',
	    	info: 'Comedy, Sci-Fi/ Fantasy', 
	    	rating: "PG-13",
	    	images: [
	    		"img/hot-tub-time-machine-2.png"
	    	]
	}, { 
	    	name: 'The Duff',
	    	director: 'Ari Sandel',
	    	description: "Emotionally devastated after learning that she's secretly referred to as The DUFF (Designated Ugly Fat Friend) by the entire student body, high-school senior Bianca (Mae Whitman) dismisses the cautionary advice of her favorite teacher (Ken Jeong), turns her back on her longtime crush Toby (Nick Eversman), and enlists the help of charismatic jock Wesley (Robbie Amell) to help salvage what's left of her senior year. As the once-contented senior wages a monumental struggle to regain her confidence, she gradually turns her efforts toward knocking cruel class queen bee Madison (Bella Thorne) from her throne up on high. Based on the popular novel by Kody Keplinger.",
	    	info: 'Comedy',
	     	rating: "PG-13",
	     	images: [
	     		"img/the-duff.png"
	     	]
	}, { 
		name: 'Seventh Son',
		director: 'Sergei Bodrov',
		description: "A powerful knight trains his young apprentice to do battle against a diabolical witch who is gathering an army to wage supernatural war on all of mankind in this adaptation of author Joseph Delaney's young-adult novel The Spook's Apprentice. Years ago, brave Master Gregory (Jeff Bridges) succeeded in capturing evil enchantress Mother Malkin (Julianne Moore), and locking her away to rot in prison. Now Mother Malkin has escaped, and she's hungry for revenge. As her followers gather power, the dreaded witch reveals her infernal intentions to the noble knight who once imprisoned her, and who now has until the next full moon to train Tom Ward (Ben Barnes), the seventh son of a seventh son, to defend humanity against a threat whose evil knows no bounds.",
		info: 'Action/Adventure',
		rating: "PG-13",
		images: [
			"img/seventh-son.png"
		]
	}, { 
		name: 'The Spongebog Movie: Sponge Out Of Water',
		director: 'Paul Tibbitt',
		description: "SpongeBob SquarePants and pals come to the real world in this sequel from director Paul Tibbitt (who previously worked as a screenwriter on The SpongeBob SquarePants Movie).",
		info: 'Comedy',
		rating: "PG",
		images: [
			"img/spongebob.png"
		]
	}, { 
		name: 'Fifty Shades of Grey',
		director: 'Sam Taylor-Johnson',
		description: "Director Sam Taylor-Johnson's big screen version of the initial book in the series, Fifty Shades of Grey, stars Dakota Johnson as Anastasia Steele, an English Lit major on the verge of graduation when her best friend, a journalism major, gets sick and asks Anastasia to do an assignment for her -- interview Christian Grey (Jamie Dornan), the wealthy businessman who is speaking at their impending graduation ceremony. The two hit it off right away; the awkward young woman is immediately turned on by his power and control, and he's drawn to her naivete.",
		info: 'Drama, Romance',
		rating: "R",
		images: [
			"img/50-shades.png"
		]
	}, { 
		name: 'Paddington',
		director: 'Paul King',
		description: "Beloved bear Paddington gets the big-screen treatment in this family film adapted from Michael Bond's enduring children's book series. As the story opens, Peruvian bear Paddington (voice of Ben Whishaw) makes his way to the big city, where he quickly gets lost until being taken in by the benevolent Brown family. Meanwhile, as the curious cub settles into his new life of domestic bliss, a scheming museum taxidermist embarks on a personal mission to get him stuffed and mounted. Hugh Bonneville, Sally Hawkins, Julie Walters, and Jim Broadbent star in a film featuring Peter Capaldi and Nicole Kidman.",
		info: 'Animated Comedy',
		rating: "PG",
		images: [
			"img/paddington.png"
		]
	}, { 
		name: 'The Wedding Ringer',
		director: 'Jeremy Garelick',
		description: "Kevin Hart (Ride Along, About Last Night) headlines this Screen Gems comedy centering on a surrogate best man who offers his services to socially awkward grooms.",
		info: 'Comedy',
		rating: "R",
		images: [
			"img/the-wedding-ringer.png"
		]
	}, { 
		name: 'American Sniper',
		director: 'Clint Eastwood',
		description: "Sniper and U.S. Navy SEAL Chris Kyle (Bradley Cooper) saves many lives on battlefields in Iraq while striving to be a good husband and father to his loved ones back in America.",
		info: 'Action/Adventure, Drama',
		rating: "R",
		images: [
			"img/American-Sniper.png"
		]
	},{ 
		name:'Kingsman: The Secret Service',
		director: 'Matthew Vaughn',
		description: "Mark Millar and Dave Gibbons' comic series is adapted for the big screen in this Matthew Vaughn-directed action thriller. The story centers on a secret agent who recruits a juvenile delinquent into a top-secret spy organization. Together, they battle a tech genius with diabolical ambitions.",
		info: 'Action/Adventure, Comedy', 
		rating: "R",
		images: [
			"img/kingsman.png"
		]
	}];
})();