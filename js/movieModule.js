(function() {
  var app = angular.module('movieReview', []); //Module

	app.controller('MovieController', function(){ //Controller
    	this.products = movie;
    });

    app.controller('TabController', function(){ //Controller
    	this.tab = 1;
    	this.setTab = function(selectedTab){
    		this.tab = selectedTab;
    	};

    	this.isSet = function(tab){
    		return this.tab === tab;
    	};
});

    app.controller('ReviewController', function(){
      this.review = {};
    
      this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
      };
    });

//Array for books and their information.
  var movie = [{ 
    	name: 'Hot Tub Time Machine 2',
    	director: 'Steve Pink',
    	description: 'Hot Tub Time Machine director Steve Pink returns to the helm for this sequel set ten years in the future, when Nick (Craig Robinson), Jacob (Clark Duke), and Adam Jr. (Adam Scott) must help Lou (Rob Corddry) out of a jam in the past.',
    	info: 'Comedy, Sci-Fi/ Fantasy', 
    	rating: "PG-13",
    	images: [
    		"img/hot-tub-time-machine-2.jpeg"
    	],
    	reviews: [{
        body: "The movie was awesome!",
        director: "alexmattorr@gmail.com",
        stars: "4"  
      }, {
        body: "Opened up a whole new perspective.",
        director: "jane1995@yahoo.com",
        stars: "5"
      }]
    },

    { 
    	name: 'The Duff',
    	director: 'Ari Sandel',
    	description: "Emotionally devastated after learning that she's secretly referred to as The DUFF (Designated Ugly Fat Friend) by the entire student body, high-school senior Bianca (Mae Whitman) dismisses the cautionary advice of her favorite teacher (Ken Jeong), turns her back on her longtime crush Toby (Nick Eversman), and enlists the help of charismatic jock Wesley (Robbie Amell) to help salvage what's left of her senior year. As the once-contented senior wages a monumental struggle to regain her confidence, she gradually turns her efforts toward knocking cruel class queen bee Madison (Bella Thorne) from her throne up on high. Based on the popular novel by Kody Keplinger.",
    	info: 'Comedy',
     	rating: "PG-13",
     	images: [
     		"img/the-duff-final.jpg"
     	],
     	reviews: [{
        body: "The movie was awesome!",
        director: "alexmattorr@gmail.com",
        stars: "4"  
      }, {
        body: "Opened up a whole new perspective.",
        director: "jane1995@yahoo.com",
        stars: "3"
      }]
     },

    { 
    	name:'Kingsman: The Secret Service',
    	director: 'Matthew Vaughn',
    	description: "Mark Millar and Dave Gibbons' comic series is adapted for the big screen in this Matthew Vaughn-directed action thriller. The story centers on a secret agent who recruits a juvenile delinquent into a top-secret spy organization. Together, they battle a tech genius with diabolical ambitions.",
    	info: 'Action/Adventure, Comedy', 
     	rating: "R",
     	images: [
     		"img/kingsman.jpg"
     	],
     	reviews: [{
        body: "The movie was awesome!",
        director: "alexmattorr@gmail.com",
        stars: "5"  
      }, {
        body: "Opened up a whole new perspective.",
        director: "jane1995@yahoo.com",
        stars: "2"
      }]
 	}];
})();