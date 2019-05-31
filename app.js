let app = angular.module('app', []); // without brakets calls prev module

app.controller('arts', ['$scope', function (s) {
  s.mainArt = {
    "category": "Category",
    "title": "Article Title",
    "overview": "Overview",
  };

  s.newArticle = function () {
    s.value += 1;
    return console.log('New works');
  };
  s.saveArticle = function (e) {
    e.preventDefault();
    let indx = s.mainArt['index'];
    if (indx >= 0) {
    s.articles[indx] = s.mainArt;
    } else {
      // s.articles.push(s.mainArt)
      s.articles.unshift(s.mainArt)
    }
    s.resetArticle();
  };

s.deleteArticle = function (indx) {
  s.articles.splice(indx,1);
}
  s.resetArticle = function (e = null) {
    if (e) e.preventDefault();
    s.mainArt = {
      "index":-1,
      "category": "Category",
      "title": "Article Title",
      "overview": "Overview",
    };
  };

  s.editArticle = function (indx) {
    //clone
    var clone = JSON.parse(JSON.stringify(s.articles[indx]));
    s.mainArt = clone;
    s.mainArt.index = indx;
  }

  s.articles = [
    {
      "type": 1,
      "subtype": 2,
      "category": "Pub Talk",
      "title": "6 Beer Affiliate Programs to Earn You Money Off Your Blog, Instagram, or YouTube Channel",
      "overview": "You don’t need millions of followers to make money off of your beer blog, YouTube Channel or Beer Instagram. Affiliate marketing programs have made it super easy for bloggers and influencers who are just starting out to generate revenue from their social media channels.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 1,
      "subtype": 2,
      "category": "Beer Banter",
      "title": "12 Types of People You Can Find at Every Beer Festival",
      "overview": "Beer festival season is upon us. Here are the 12 people you should avoid or be-friend at any beer festival. You choose.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 1,
      "subtype": 2,
      "category": "JBU > Introductory",
      "title": "What Style of Beer Should You Drink? How to Choose a Beer You’ll Actually Like",
      "overview": "Are you struggling to find a beer to be your “go to” drink? Are you usually asking yourself, “what should I drink tonight?” JustBeer has grouped popular beer styles into seven main beer profile categories to help you find beers you will like based on flavours you already know and love. Continue reading to find the right beer for you.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 1,
      "subtype": 2,
      "category": "Beer Banter",
      "title": "What Bartenders Really Think of Your Beer Order",
      "overview": "Have you ever wondered what assumptions your bartender makes about you after hearing your drink order? Well, now you know.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 1,
      "subtype": 2,
      "category": "JBU",
      "title": "Macro Brewery vs. Micro Brewery vs. Craft Brewery: What is the Difference?",
      "overview": "You’ve probably heard of the terms microbrewery, macrobrewery, and craft brewery, but do you fully understand the differences between them? Continue reading to learn how craft beers differ from macro beers and all the characteristics that are considered when classifying a brewery.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 1,
      "subtype": 2,
      "category": "Beer Banter",
      "title": "Here’s A List Of All The Beer Drinking “Holidays” in 2019",
      "overview": "Plan 2019 all around your favourite beverage… beer! Here’s a list of all beer related “holidays” or days where it’s just a good excuse to crack a cold one.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 1,
      "subtype": 2,
      "category": "Pub Talk",
      "title": "Canadian Craft Breweries List: A Guide and Directory",
      "overview": "From East to West, North to South, we’ve compiled this province-based craft brewery list just for you! Now you enjoy a craft beer anywhere in Canada. Here’s to Canadian Craft Beer! #DrinkLocal\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Industry News",
      "title": "8 Awesome Craft Breweries to Check Out During Vancouver Craft Beer Week",
      "overview": "Vancouver Craft Beer Week runs from Friday, May 31 – Sunday, June 9. Here’s a list of events and Vancouver-based breweries you need to check out during Vancouver’s craft beer week.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Pub Talk",
      "title": "Dog-Friendly Patios, Pubs & Breweries for the Beer & Dog-Lover in Alberta",
      "overview": "With the craft beer trend rising in Alberta, breweries and bars are wanting to stand out from the others. Making your patio dog-friendly is a great way to do this. If you’re a beer-lover AND a dog-lover, make sure to hit up these great places that you can grab a cold brew and chill with your pup.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Pub Talk",
      "title": "10 Best Places to Get a Burger & a Beer in Calgary, Alberta",
      "overview": "Looking for the best places for a burger and beer in Calgary? Look no further! Here’s a list of YYC best places to grab a pint and a patty, and the best restaurants, pubs, breweries, etc. for burger and beer specials.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Recipes",
      "title": "6 Fruity Beer Cocktails You Need to Try if You Have a Sweet Tooth",
      "overview": "If you love fruity and sweet beers, these beer cocktail recipes are the perfect summer drinks for you to sip in the sun or on a patio! \n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Pub Talk",
      "title": "6 Beer Affiliate Programs to Earn You Money Off Your Blog, Instagram, or YouTube Channel",
      "overview": "You don’t need millions of followers to make money off of your beer blog, YouTube Channel or Beer Instagram. Affiliate marketing programs have made it super easy for bloggers and influencers who are just starting out to generate revenue from their social media channels.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Beer Banter",
      "title": "12 Types of People You Can Find at Every Beer Festival",
      "overview": "Beer festival season is upon us. Here are the 12 people you should avoid or be-friend at any beer festival. You choose.\n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Beer &amp; Food Pairings",
      "title": "The Best Beer and French Fry Pairings — How to Pair Fries with Beer",
      "overview": "It is a known fact that beer goes well with fries. Here are some great beer and french fry pairings as well as some ideas if you need a little twist on the classic. \n",
      "permalink": {},
      "images": {}
    },
    {
      "type": 2,
      "category": "Pub Talk",
      "title": "Drinking & Driving in Canada — Stats & Other Things You Need to Know",
      "overview": "Driving under the influence of drugs or alcohol is a serious offence in Canada. Here’s what you need to know about drinking and driving in Alberta, plus 10+ resources and contact information for the top-rated taxi companies in Calgary and Edmonton.\n",
      "permalink": {},
      "images": {}
    }
  ];
}]);