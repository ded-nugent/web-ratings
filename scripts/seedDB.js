const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/websiteDB"
  );

// we can start to import websites

const websiteSeed = [

	{
        username : "user12345",
		password : "PASSWORD",
		websites: [
			{
			title: "Google",
			URL: "https://www.google.com/",
			thumbnail: "https://media1.fdncms.com/memphisflyer/imager/u/original/21375123/21751306_10155724905022838_7192191338970086519_n.png",
			summary:
			"Search for information about (someone or something) on the Internet using the search engine Google",
			category: "Search",
			date: new Date(Date.now()),
			rating: 4.7,
			visits: 518,
			comments: [
				{
					user: "Kevin",
					comment: "best search engine out there",
					dateCreated: "1/11/2020"
				},
				{
					user: "Jeff",
					comment: "works alright, but I prefer bing",
					dateCreated: "1/11/2020"
				}
				]
			},
			{
				title: "Walmart",
				URL: "http://www.walmart.com/",
				thumbnail: "https://cdn.corporate.walmart.com/dims4/WMT/c2bbbe9/2147483647/strip/true/crop/2389x930+0+0/resize/1446x563!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fd6%2Fe7%2F48e91bac4a8ca8f22985b3682370%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png",
				summary:
				"Walmart is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores,",
				category: "Shopping",
				date: new Date(Date.now()),
				rating: 3,
				visits: 394,
				comments: [
					{
						user: "Betty",
						comment: "I hate this store, they are everywhere!?!",
						dateCreated: "2/2/2019"
					}
				]
			},			
			{
				title: "Amazon",
				URL: "http://www.amazon.com/",
				thumbnail: "https://mms.businesswire.com/media/20190228005194/en/3799/23/logo_white_.jpg",
				summary:
				"Amazon is the world’s largest online retailer and a prominent cloud services provider",
				category: "Shopping",
				date: new Date(Date.now()),
				rating: 4.9,
				visits: 484,
				comments: [
					{
						user: "Billy",
						comment: "I bought all of my cars neccesites at this website!",
						dateCreated: "1/5/2020"
					}
				]
			},
			{
				title: "Bing",
				URL: "http://www.bing.com/",
				thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bing_logo.svg/1200px-Bing_logo.svg.png",
				summary:
				"Bing helps you turn information into action, making it faster and easier to go from searching to doing",
				category: "Search",
				date: new Date(Date.now()),
				rating: 2,
				visits: 45,
				comments: []
			},
			{
				title: "Reddit",
				URL: "http://www.reddit.com/",
				thumbnail: "https://www.slashgear.com/wp-content/uploads/2019/08/reddit_main-1280x720.jpg",
				summary:
				"Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!",
				category: "Social",
				date: new Date(Date.now()),
				rating: 3.6,
				visits: 605,
				comments: [
					{
						user: "Troll",
						comment: "Stop moving to reddit!",
						dateCreated: "05/08/2018"
					}
				]
			},
			{
				title: "ESPN",
				URL: "http://www.espn.com/",
				thumbnail: "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png",
				summary:
				"Visit ESPN to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more",
				category: "Sports",
				date: new Date(Date.now()),
				rating: 2.9,
				visits: 746,
				comments: []
			},
			{
				title: "Craigslist",
				URL: "http://www.craigslist.org/",
				thumbnail: "https://miro.medium.com/max/1043/1*jtpqchiVEjZzauBEk1Yp6w.jpeg",
				summary:
				"craigslist provides local classifieds and forums for jobs, housing, for sale, services, local community, and events",
				category: "Shopping",
				date: new Date(Date.now()),
				rating: 2.8,
				visits: 775,
				comments: []
			},
		]
	},
	{
		username : "user123456",
		password : "PASSWORD",
		websites:[
		{
			title: "NFL",
			URL: "https://www.nfl.com/",
			thumbnail: "https://ca-times.brightspotcdn.com/dims4/default/84f8546/2147483647/strip/true/crop/1365x1024+0+0/resize/840x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff2%2F81%2Ff460e5ce620ae3ec5c1be2d544ed%2Fla-sp-sn-grubman-la-20140826-001",
			summary:
			"The National Football League (NFL) is a professional American football league consisting of 32 teams, divided equally between the National Football Conference (NFC) and the American Football Conference (AFC)",
			category: "Sports",
			date: new Date(Date.now()),
			rating: 4.2,
			visits: 432,
			comments: [
				{
					user: "Bob",
					comment: "my favorite Sports website!",
					dateCreated: "1/11/2020"
				},
				{
					user: "Joe",
					comment: "Wish they would update more but other then that its alright",
					dateCreated: "1/11/2020"
				}
			]
		},
		{
			title: "Weather",
			URL: "http://www.weather.com/",
			thumbnail: "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/bd/79/0a/bd790a93-aa99-3ee1-0527-a3c9df02fbe2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
			summary:
			"The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage",
			category: "News",
			date: new Date(Date.now()),
			rating: 4.2,
			visits: 662,
			comments: []
		},
		{
			title: "Instagram",
			URL: "http://www.instagram.com/",
			thumbnail: "https://pmcvariety.files.wordpress.com/2019/11/instagram-tests-hiding-likes.png?w=1000&h=563&crop=1",
			summary:
			"A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family",
			category: "Social",
			date: new Date(Date.now()),
			rating: 4.3,
			visits: 856,
			comments: [
				{
					user: "Jessica",
					comment: "My account was hacked, dont trust this website!!!!!",
					dateCreated: "1/2/2020"
				}
			]
		},
		{
			title: "Diply",
			URL: "http://www.diply.com/",
			thumbnail: "https://www.newswhip.com/wp-content/uploads/2017/09/Diply-1080x625.jpg",
			summary:
			"It is a place where you can share your own work and stay up to date with the best trending stories on the web across a quickly growing array of topics",
			category: "News",
			date: new Date(Date.now()),
			rating: 4.0,
			visits: 44,
			comments: [
				{
					user: "Hater",
					comment: "Buzzfeed knockoff",
					dateCreated: "1/1/2020"
				}
			]
		},
	]
	},
	{
		username : "user1234567",
		password : "PASSWORD",
		websites:[
			{
			title: "Youtube",
			URL: "https://www.youtube.com/",
			thumbnail: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
			summary:
			"YouTube is a video sharing service that allows users to watch videos posted by other users and upload videos of their own",
			category: "Video",
			date: new Date(Date.now()),
			rating: 4.3,
			visits: 728,
			comments: [
				{
					user: "Max",
					comment: "This service sucks!",
					dateCreated: "1/14/2020"
				}
			]
			},
			{
				title: "Imdb",
				URL: "http://www.imdb.com/",
				thumbnail: "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg",
				summary:
				"IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows",
				category: "Search",
				date: new Date(Date.now()),
				rating: 3.7,
				visits: 221,
				comments: []
			},
			{
				title: "Wikipedia",
				URL: "http://www.wikipedia.org/",
				thumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png",
				summary:
				"Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation",
				category: "Search",
				date: new Date(Date.now()),
				rating: 4.1,
				visits: 355,
				comments: []
			},
			{
				title: "Netflix",
				URL: "http://www.netflix.com/",
				thumbnail: "http://media.foxbusiness.com/BrightCove/854081161001/201912/3545/854081161001_6118047080001_6118037817001-vs.jpg",
				summary:
				"Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and mor",
				category: "Video",
				date: new Date(Date.now()),
				rating: 4.7,
				visits: 651,
				comments: [
					{
						user: "Edward",
						comment: "Love this streaming service! Netflix is king!",
						dateCreated: "1/11/2019"
					}
				]
			},
			{
				title: "Imgur",
				URL: "http://www.imgur.com/",
				thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/1200px-Imgur_logo.svg.png",
				summary:
				"Discover the magic of the internet at Imgur, a community powered entertainment destination. Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories, viral videos, and so much more",
				category: "Social",
				date: new Date(Date.now()),
				rating: 4.7,
				visits: 273,
				comments: []
			},
			{
				title: "LinkedIn",
				URL: "http://www.linkedin.com/",
				thumbnail: "https://cdn.windowsreport.com/wp-content/uploads/2019/03/something-went-wrong-linkedin.png",
				summary:
				"Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities",
				category: "Social",
				date: new Date(Date.now()),
				rating: 3.8,
				visits: 340,
				comments: [
					{
						user: "Andrew",
						comment: "Found my new job using this website!",
						dateCreated: "1/2/2020"
					}
				]
			},
			{
				title: "Twitch",
				URL: "http://www.twitch.tv/",
				thumbnail: "https://cdn.vox-cdn.com/thumbor/ztT1li2nWjmWmHj2d87wKyWRIiA=/0x0:2400x1600/1200x800/filters:focal(1008x608:1392x992)/cdn.vox-cdn.com/uploads/chorus_image/image/65517540/01_Twitch_Logo.0.jpg",
				summary:
				"Twitch is the world's leading live streaming platform for gamers and the things we love. Watch and chat now with millions of other fans from around the world",
				category: "Video",
				date: new Date(Date.now()),
				rating: 4.2,
				visits: 401,
				comments: []
			},
			{
				title: "Tumblr",
				URL: "http://www.tumblr.com/",
				thumbnail: "https://cdn.vox-cdn.com/thumbor/sIwQxk0vOedZs2jrKt-AV8z41M0=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65003384/acastro_191203_177_tumblr_0003.5.jpg",
				summary:
				"Tumblr is a place to express yourself, discover yourself, and bond over the stuff you love. It's where your interests connect you with your people",
				category: "Social",
				date: new Date(Date.now()),
				rating: 4.1,
				visits: 152,
				comments: []
			},
		]
	},
	{
		username : "user12345678",
		password : "PASSWORD",
		websites:[
			{
			title: "Facebook",
			URL: "http://www.facebook.com/",
			thumbnail: "https://about.fb.com/wp-content/uploads/2018/11/fb-hero-image-001.jpeg?fit=1920%2C1080",
			summary:
			"Facebook is a popular free social networking website that allows registered users to create profiles, upload photos and video, send messages and keep in touch with friends, family and colleagues",
			category: "Social",
			date: new Date(Date.now()),
			rating: 4.8,
			visits: 215,
			comments: [
				{
					user: "Karen",
					comment: "I cant seem to find my friends from my highschool maybe they dont know how to work this website",
					dateCreated: "1/1/2020"
				}
			]
		},
		{
			title: "Pinterest",
			URL: "http://www.pinterest.com/",
			thumbnail: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/59/7b/91/597b9119-dab0-2558-f22f-b2d3afe19417/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220.png/1200x630wa.png",
			summary:
			"Discover recipes, home ideas, style inspiration and other ideas to try",
			category: "Social",
			date: new Date(Date.now()),
			rating: 3.9,
			visits: 170,
			comments: [
				{
					user: "Edward",
					comment: "Found a great recipe for a home cooked meal!",
					dateCreated: "1/11/2020"
				}
			]
		},
		{
			title: "Washington Post",
			URL: "http://www.washingtonpost.com/",
			thumbnail: "https://static1.squarespace.com/static/597752cbebbd1a70471595fa/597faf3159cc687ac449eabe/5b9030bb032be44a00ce8c48/1537462398819/wt_icon_blackonwhite.png?format=2500w",
			summary:
			"Telling the stories that echo Washington and beyond",
			category: "News",
			date: new Date(Date.now()),
			rating: 3.1,
			visits: 238,
			comments: []
		},
		{
			title: "Yahoo",
			URL: "http://www.yahoo.com/",
			thumbnail: "https://pmcvariety.files.wordpress.com/2014/03/yahoo_logo.jpg?w=1000",
			summary:
			"News, email and search are just the beginning. Discover more every day. Find your yodel",
			category: "News",
			date: new Date(Date.now()),
			rating: 3.4,
			visits: 140,
			comments: []
		},
		{
			title: "Twitter",
			URL: "http://www.twitter.com/",
			thumbnail: "https://i1.wp.com/cdn.makezine.com/uploads/2013/11/twitter_logo_blue.png",
			summary:
			"From breaking news and entertainment to sports and politics, get the full story with all the live commentary",
			category: "Social",
			date: new Date(Date.now()),
			rating: 4.8,
			visits: 645,
			comments: []
		},
		{
			title: "Ebay",
			URL: "http://www.ebay.com/",
			thumbnail: "https://tehnoblog.org/wp-content/uploads/2017/11/eBay-Logo.png",
			summary:
			"Buy & sell electronics, cars, clothes, collectibles & more on eBay, the world's online marketplace. Top brands, low prices & free shipping on many items",
			category: "Shopping",
			date: new Date(Date.now()),
			rating: 3.9,
			visits: 362,
			comments: []
		},
	]
	}

];

db.Website
.remove({})
.then(() => db.Website.collection.insertMany(websiteSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});