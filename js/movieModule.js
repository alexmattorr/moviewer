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
    	name: 'The Universe in a Nutshell',
    	director: 'Stephen Hawking',
    	description: 'Stephen Hawking’s phenomenal, multimillion-copy bestseller, A Brief History of Time, introduced the ideas of this brilliant theoretical physicist to readers all over the world. ',
    	info: '11 x 8, hardcover, 1995', 
    	price: 23.03,
    	images: [
    		"img/book1.jpg"
    	],
    	reviews: [{
        body: "The book was awesome!",
        director: "alexmattorr@gmail.com",
        stars: "4"  
      }, {
        body: "Opened up a whole new perspective.",
        director: "jane1995@yahoo.com",
        stars: "5"
      }]
    },

    { 
    	name: 'The Dispossessed',
    	director: 'Ursula K. Le Guin',
    	description: 'Shevek, a brilliant physicist, decides to take action. he will seek answers, question the unquestionable, and attempt to tear down the walls of hatred that have isolated his planet of anarchists from the rest of the civilized universe. To do this dangerous task will mean giving up his family and possibly his life. Shevek must make the unprecedented journey to the utopian mother planet, Anarres, to challenge the complex structures of life and living, and ignite the fires of change.',
    	info: '11 x 8, hardcover, 1995',
     	price: 7.11,
     	images: [
     		"img/book2.jpg"
     	],
     	reviews: [{
        body: "The book was awesome!",
        director: "alexmattorr@gmail.com",
        stars: "4"  
      }, {
        body: "Opened up a whole new perspective.",
        director: "jane1995@yahoo.com",
        stars: "3"
      }]
     },

    { 
    	name:'The Elements of Typographic Style',
    	director: 'Robert Bringhurst',
    	description: 'A readable manual and reference on modern typography, exploring the art and history of the field as well as technical details. Includes b&w illustrations, a glossary, and reference appendices. This second edition includes a new chapter on digital typography, expanded information on typefaces and des',
    	info: '11 x 8, hardcover, 1995', 
     	price: 8.95,
     	images: [
     		"img/book3.jpg"
     	],
     	reviews: [{
        body: "The book was awesome!",
        director: "alexmattorr@gmail.com",
        stars: "5"  
      }, {
        body: "Opened up a whole new perspective.",
        director: "jane1995@yahoo.com",
        stars: "2"
      }]
 	}];
})();