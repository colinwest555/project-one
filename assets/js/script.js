// var searchTerm;
// var url = "http://api.brewerydb.com/v2/" + searchTerm + "/?key=7944356e321284ae7dfbe4dd72c07b0f";


//     $.ajax(url)
//         .then(function (results) {

//             var result = results.data;
//         });

var selections =[ // descriptions from beeradvocate.com
    {name: "Imperial IPA",
    description: "We have west coast American brewers to thank for this somewhat reactionary style. Take an India Pale Ale and feed it steroids, and you'll end up with a Double or Imperial IPA. Although generally recognizable alongside its sister styles in the IPA family, you should expect something more robust, malty, and alcoholic with a characteristically intense hop profile in both taste and aroma. In short, these are boldly flavored, medium-bodied beers that range in color from deep gold to medium amber. The 'imperial' usage comes from Russian Imperial Stout, a style of strong Stout originally brewed in England during the late 1700s for the Russian imperial court. Today Double IPA is often the preferred name in the United States.",
    image: "assets/images/ipa.jpg"},
    {name: "English Stout",
    description: "Stouts are typically dark brown to pitch black in color. A common profile among Stouts, but not in all cases, is the use of roasted barley (unmalted barley that is kilned to the point of being charred) which lends a dry character to the beer as well as a huge roasted flavor that can range from burnt to coffee to chocolate. Traditional English Stout recipes rely on bitterness from the roasted grain to provide a dry finish and consequently tend to show very little hop character.",
    image: "assets/images/stout.jpg"},
    {name: "Bohemian Pilsner",
    description: "The Bohemian Pilsener has a slightly sweet and evident malt character and a toasted, biscuit-like, bready malt character. Hop bitterness is perceived as medium with a low to medium-low level of noble-type hop aroma and flavor. This style originated in 1842, with “pilsener” originally indicating an appellation in the Czech Republic. Classic examples of this style used to be conditioned in wooden tanks and had a less sharp hop bitterness despite the similar IBU ranges to German-style Pilsener. Low-level diacetyl is acceptable. Bohemian-Style Pilseners are darker in color and higher in final gravity than their German counterparts.",
    image: "assets/images/pilsner.jpg"},
    {name: "American Light Lager",
    description: "The Light Lager is generally a lighter version of a brewery's premium lager, some are lower in alcohol but all are lower in calories and carbohydrates compared to other beers. Typically a high amount of cereal adjuncts like rice or corn are used to help lighten the beer as much as possible. Very low in malt flavor with a light and dry body. The hop character is low and should only balance with no signs of flavor or aroma. European versions are about half the alcohol (2.5-3.5% ABV) as their regular beer, yet show more flavor (some use 100 percent malt) then the American counterparts. For the most part, this style has the least amount of flavor than any other style of beer.",
    image: "assets/images/lager.jpg"},
];

// Untapped JSON example
var result = {
    "meta": {
      "code": 200,
      "response_time": {
        "time": 0.132,
        "measure": "seconds"
      },
      "init_time": {
        "time": 0,
        "measure": "seconds"
      }
    },
    "notifications": [],
    "response": {
      "message": "",
      "time_taken": 0.016,
      "brewery_id": 0,
      "search_type": "",
      "type_id": 0,
      "search_version": 4,
      "found": 1222,
      "offset": 0,
      "limit": 25,
      "term": "Pliny",
      "parsed_term": "Pliny",
      "beers": {
        "count": 5,
        "items": [
          {
            "checkin_count": 598115,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 4499,
              "beer_name": "Pliny the Elder",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-4499_dc04a_sm.jpeg",
              "beer_abv": 8,
              "beer_slug": "russian-river-brewing-company-pliny-the-elder",
              "beer_ibu": 100,
              "beer_description": "A true leader in the hop-wars of the west coast, Pliny the Elder hits you over the head with hoppy bitterness and manages to smooth the rough edges out enough to become an enjoyable brew.",
              "created_at": "Sat, 21 Aug 2010 14:26:35 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 5143,
              "brewery_name": "Russian River Brewing Company",
              "brewery_slug": "russian-river-brewing-company",
              "brewery_page_url": "/w/russian-river-brewing-company/5143",
              "brewery_type": "Regional Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-russianRiver.jpg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "https://www.facebook.com/russianriverbrewing",
                "instagram": "russianriverbrewing",
                "url": "http://www.russianriverbrewing.com/"
              },
              "location": {
                "brewery_city": "Santa Rosa",
                "brewery_state": "CA",
                "lat": 38.4418,
                "lng": -122.712
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 33318,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 28331,
              "beer_name": "Pliny the Younger",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-_28331_sm.jpeg",
              "beer_abv": 10.25,
              "beer_slug": "russian-river-brewing-company-pliny-the-younger",
              "beer_ibu": 90,
              "beer_description": "Pliny the Younger was Pliny the Elder’s nephew, in the case of this beer, the \"Younger\" is a triple IPA. Pliny the Younger is hopped three times more than our standard IPA, and is dry hopped four different times.",
              "created_at": "Fri, 04 Feb 2011 02:00:48 +0000",
              "beer_style": "IPA - Triple",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 5143,
              "brewery_name": "Russian River Brewing Company",
              "brewery_slug": "russian-river-brewing-company",
              "brewery_page_url": "/w/russian-river-brewing-company/5143",
              "brewery_type": "Regional Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-russianRiver.jpg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "https://www.facebook.com/russianriverbrewing",
                "instagram": "russianriverbrewing",
                "url": "http://www.russianriverbrewing.com/"
              },
              "location": {
                "brewery_city": "Santa Rosa",
                "brewery_state": "CA",
                "lat": 38.4418,
                "lng": -122.712
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 115,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 666337,
              "beer_name": "Pliny The Elderflower",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-666337_7af0f_sm.jpeg",
              "beer_abv": 3.8,
              "beer_slug": "corinium-ales-pliny-the-elderflower",
              "beer_ibu": 0,
              "beer_description": "",
              "created_at": "Fri, 02 May 2014 04:56:19 +0000",
              "beer_style": "Golden Ale",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 66098,
              "brewery_name": "Corinium Ales",
              "brewery_slug": "corinium-ales",
              "brewery_page_url": "/CoriniumAles",
              "brewery_type": "Nano Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-66098_99175.jpeg",
              "country_name": "England",
              "contact": {
                "twitter": "",
                "facebook": "https://www.facebook.com/coriniumales",
                "instagram": "",
                "url": "http://www.coriniumales.co.uk"
              },
              "location": {
                "brewery_city": "Cirencester",
                "brewery_state": "GL7 1UR",
                "lat": 51.7129,
                "lng": -1.97986
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 99,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 2136975,
              "beer_name": "Pliny the Elderberry",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 0,
              "beer_slug": "hopworks-urban-brewery-pliny-the-elderberry",
              "beer_ibu": 0,
              "beer_description": "Barrwl aged mixed-culture golden ale with foraged elderberry and fresh elderflower",
              "created_at": "Sat, 10 Jun 2017 04:52:46 +0000",
              "beer_style": "Spiced / Herbed Beer",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 678,
              "brewery_name": "Hopworks Urban Brewery",
              "brewery_slug": "hopworks-urban-brewery",
              "brewery_page_url": "/HopworksBeer",
              "brewery_type": "Micro Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-678_24dc3.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "HopworksBeer",
                "facebook": "http://www.facebook.com/HopworksBeer",
                "instagram": "hopworksbeer",
                "url": "http://hopworksbeer.com/"
              },
              "location": {
                "brewery_city": "Portland",
                "brewery_state": "OR",
                "lat": 45.497,
                "lng": -122.635
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 91,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 2442802,
              "beer_name": "Pliny the Punisher",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 9.08,
              "beer_slug": "bugnutty-brewing-company-pliny-the-punisher",
              "beer_ibu": 155,
              "beer_description": "A wickedly hoppy double IPA artfully balanced with a variety of malt flavors.   Are you ready to be punished?",
              "created_at": "Sat, 23 Dec 2017 03:08:45 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 80516,
              "brewery_name": "Bugnutty Brewing Company",
              "brewery_slug": "bugnutty-brewing-company",
              "brewery_page_url": "/BugnuttyBrew",
              "brewery_type": "Micro Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-80516_0bad5.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "bugnuttybrew",
                "facebook": "https://www.facebook.com/pages/Bugnutty-Brewing-Company/556995030988381",
                "instagram": "bugnuttybrew",
                "url": "http://www.bugnutty.com"
              },
              "location": {
                "brewery_city": "Merritt Island",
                "brewery_state": "FL",
                "lat": 28.369,
                "lng": -80.7013
              },
              "brewery_active": 1
            }
          }
        ]
      },
      "homebrew": {
        "count": 20,
        "items": [
          {
            "checkin_count": 258,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1047125,
              "beer_name": "Pliny the Clone",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 6.5,
              "beer_slug": "homebrew-pliny-the-clone",
              "beer_ibu": 95,
              "beer_description": "Home brewed in SLC.  Tastes like magic and sex",
              "created_at": "Mon, 13 Apr 2015 06:45:34 +0000",
              "beer_style": "Imperial Pale Ale",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 1775,
              "brewery_name": "Homebrew",
              "brewery_slug": "homebrew",
              "brewery_page_url": "/w/homebrew/1775",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "Other",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 113,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 99191,
              "beer_name": "Pliny the Coloradoan",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 7,
              "beer_slug": "cinq-chats-home-brewing-pliny-the-coloradoan",
              "beer_ibu": 0,
              "beer_description": "My take on Vinnie's masterpiece.",
              "created_at": "Wed, 16 Nov 2011 00:49:24 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 18318,
              "brewery_name": "Cinq Chats Home Brewing",
              "brewery_slug": "cinq-chats-home-brewing",
              "brewery_page_url": "/cinqchats",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-CinqChatsHomeBrewing_18318.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": "http://www.3d0g.net/brewing"
              },
              "location": {
                "brewery_city": "Elizabeth",
                "brewery_state": "CO",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 55,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 273574,
              "beer_name": "Pliny The Dumbass",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-_273574_44377f8a34b111a68bc093b72350.jpeg",
              "beer_abv": 8.14,
              "beer_slug": "red-dirt-brewery-pliny-the-dumbass",
              "beer_ibu": 100,
              "beer_description": "A Pliny the Elder clone in which I boiled the skin off of my leg/ankle/foot.",
              "created_at": "Tue, 04 Dec 2012 22:11:13 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 16786,
              "brewery_name": "Red Dirt Brewery",
              "brewery_slug": "red-dirt-brewery",
              "brewery_page_url": "/reddirtbrewery",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "Fort Worth",
                "brewery_state": "TX",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 53,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1409023,
              "beer_name": "Pliny the Klone",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-1409023_71d88_sm.jpeg",
              "beer_abv": 8,
              "beer_slug": "khaos-brew-pliny-the-klone",
              "beer_ibu": 191,
              "beer_description": "Pliny the Elder Clone",
              "created_at": "Sat, 30 Jan 2016 21:28:41 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 179795,
              "brewery_name": "Khaos Brew",
              "brewery_slug": "khaos-brew",
              "brewery_page_url": "/KhaosBrew",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-179795_6092c.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 50,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 816918,
              "beer_name": "Father Pliny",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-816918_020bf_sm.jpeg",
              "beer_abv": 8.3,
              "beer_slug": "heatonk-brewing-co-father-pliny",
              "beer_ibu": 99,
              "beer_description": "Perfect Copy... Thanks Russian River",
              "created_at": "Sat, 20 Sep 2014 06:10:43 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 6515,
              "brewery_name": "Heatonk Brewing Co. ",
              "brewery_slug": "heatonk-brewing-co",
              "brewery_page_url": "/heatonkbrewingco",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-HeatonkBrewingCo_6515.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "HeatonkBrewing",
                "facebook": "https://www.facebook.com/pages/Heatonk-Brewing-Co/79153229330",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "Arlington Heights",
                "brewery_state": "IL",
                "lat": 42.0853,
                "lng": -87.9777
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 43,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 448317,
              "beer_name": "Pliny The Ignorant",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 9.7,
              "beer_slug": "meek-brewing-co-pliny-the-ignorant",
              "beer_ibu": 0,
              "beer_description": "Pliny the Younger clone attempt.",
              "created_at": "Sat, 07 Sep 2013 12:16:48 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 17865,
              "brewery_name": "Meek Brewing Co.",
              "brewery_slug": "meek-brewing-co",
              "brewery_page_url": "/meekbrewing",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "Canada",
              "contact": {
                "twitter": "meekbrewingco",
                "facebook": "https://www.facebook.com/pages/Meek-Brewing-Co/225808144224376?ref=hl",
                "instagram": "meekbrewingco",
                "url": "http://meekbrewingco.blogspot.com"
              },
              "location": {
                "brewery_city": "Fredericton",
                "brewery_state": "NB",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 41,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 559197,
              "beer_name": "Pliny The Doodler (elder Clone)",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 8,
              "beer_slug": "austin-homebrew-supply-pliny-the-doodler-elder-clone",
              "beer_ibu": 0,
              "beer_description": "",
              "created_at": "Sun, 12 Jan 2014 02:02:51 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 3323,
              "brewery_name": "Austin Homebrew Supply",
              "brewery_slug": "austin-homebrew-supply",
              "brewery_page_url": "/AustinHomebrewSupply",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "https://www.facebook.com/austinhomebrew?ref=br_tf",
                "instagram": "",
                "url": "www.austinhomebrew.com"
              },
              "location": {
                "brewery_city": "Austin",
                "brewery_state": "TX",
                "lat": 30.2672,
                "lng": -97.7431
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 41,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1005167,
              "beer_name": "Pliny the Scout",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-1005167_b9782_sm.jpeg",
              "beer_abv": 7.1,
              "beer_slug": "old-scout-brewery-pliny-the-scout",
              "beer_ibu": 0,
              "beer_description": "",
              "created_at": "Tue, 10 Mar 2015 05:52:48 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 29041,
              "brewery_name": "Old Scout Brewery",
              "brewery_slug": "old-scout-brewery",
              "brewery_page_url": "/OldScoutBrewery",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-oldscoutbrewery_29041.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "OldScoutBrewery",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "Kingsport",
                "brewery_state": "TN",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 40,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 448061,
              "beer_name": "Pliny The Toddler",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 5,
              "beer_slug": "two-if-by-sea-brewing-co-pliny-the-toddler",
              "beer_ibu": 0,
              "beer_description": "",
              "created_at": "Sat, 07 Sep 2013 01:24:42 +0000",
              "beer_style": "IPA - American",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 74984,
              "brewery_name": "Two If By Sea Brewing Co.",
              "brewery_slug": "two-if-by-sea-brewing-co",
              "brewery_page_url": "/TwoIfBySeaBrewingCo",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-twoifbyseabrewingco_74984.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "https://www.facebook.com/pages/Two-if-By-Sea-Brewing/325827650940",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "Wareham",
                "brewery_state": "MA",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 40,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 228374,
              "beer_name": "Pliny The HopHead",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-_228374_sm_c4892cfca0c95115df33fe8661a787.jpeg",
              "beer_abv": 8.1,
              "beer_slug": "beerbills-brewing-lounge-pliny-the-hophead",
              "beer_ibu": 0,
              "beer_description": "This started out as a Pliny The Elder clone, but then I thought maybe it needed even a little more Simcoe & Centennial in dry hop than normal, so I turned it up to 11.",
              "created_at": "Tue, 11 Sep 2012 06:02:03 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 37010,
              "brewery_name": "BeerBill's Brewing Lounge",
              "brewery_slug": "beerbill-s-brewing-lounge",
              "brewery_page_url": "/BeerBillBrewing",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-beerbillsbrewinglounge_37010.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "CA",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 36,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 227848,
              "beer_name": "Pliny The Baby",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 7.8,
              "beer_slug": "beaches-beer-works-pliny-the-baby",
              "beer_ibu": 0,
              "beer_description": "Pliny clone",
              "created_at": "Sun, 09 Sep 2012 18:51:37 +0000",
              "beer_style": "IPA - American",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 34215,
              "brewery_name": "Beaches Beer Works",
              "brewery_slug": "beaches-beer-works",
              "brewery_page_url": "/BeachesBeerWorks",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-beachesbeerworks_34215.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 35,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 514840,
              "beer_name": "Pliny The Welder",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-_514840_sm_41097560081a3b3f6ee4c754279eb7.jpeg",
              "beer_abv": 8.9,
              "beer_slug": "abbaye-du-chat-noir-pliny-the-welder",
              "beer_ibu": 200,
              "beer_description": "",
              "created_at": "Tue, 26 Nov 2013 15:35:58 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 93429,
              "brewery_name": "Abbaye du Chat Noir",
              "brewery_slug": "abbaye-du-chat-noir",
              "brewery_page_url": "/AbbayeDuChatNoir",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-abbayeduchatnoir_93429.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 35,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 419703,
              "beer_name": "Pliny El Mayor",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 8.4,
              "beer_slug": "joshua-tree-brewing-pliny-el-mayor",
              "beer_ibu": 0,
              "beer_description": "Pliny The Elder clone",
              "created_at": "Thu, 01 Aug 2013 22:35:11 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 74782,
              "brewery_name": "Joshua Tree Brewing",
              "brewery_slug": "joshua-tree-brewing",
              "brewery_page_url": "/JoshuaTreeBrewing",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 34,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1211368,
              "beer_name": "Old Papa Hops (Old Pliny)",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 8,
              "beer_slug": "the-brewers-apprentice-old-papa-hops-old-pliny",
              "beer_ibu": 80,
              "beer_description": "",
              "created_at": "Mon, 24 Aug 2015 00:11:13 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 10295,
              "brewery_name": "The Brewer's Apprentice",
              "brewery_slug": "the-brewer-s-apprentice",
              "brewery_page_url": "/w/the-brewer-s-apprentice/10295",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 33,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1987836,
              "beer_name": "Pliny the Homebrewski",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 9.8,
              "beer_slug": "homebrew-genellos-pub-pliny-the-homebrewski",
              "beer_ibu": 0,
              "beer_description": "",
              "created_at": "Fri, 10 Mar 2017 07:05:26 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 329658,
              "brewery_name": "Homebrew Genellos Pub",
              "brewery_slug": "homebrew-genellos-pub",
              "brewery_page_url": "/w/homebrew-genellos-pub/329658",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 32,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1635823,
              "beer_name": "Ode To Pliny",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 7.7,
              "beer_slug": "gillcox-brewing-ode-to-pliny",
              "beer_ibu": 130,
              "beer_description": "Imperial IPA of slight colour, pine & citrus on the nose with apricot, mango and passionfruit on the tongue.  Inspired by the iconic Pliny the Elder to create a deceptively fulfilling super-hoppy (8g/L) tropical nectar.\n\nHops: Simcoe | Centennial | Columbus | Cascade\nMalt: Pale | Crystal\n\n===============================\n\nAfter a journey to find Plinys - Elder and Younger - through many venues and skipping many lines - when we finally got to indulge the famous flavours made a great impression.  So much so that we packed as many as duty-free allowance allowed for a journey back over the Pacific to share with our friends.  It quickly became obvious that everyone wanted more so what better reason to create an homage to the superstar Elder brew",
              "created_at": "Fri, 08 Jul 2016 14:53:54 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 205105,
              "brewery_name": "Gillcox Brewing",
              "brewery_slug": "gillcox-brewing",
              "brewery_page_url": "/Gillcox",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "Australia",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 31,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 200217,
              "beer_name": "Pliny The Toddler",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 4.7,
              "beer_slug": "big-brents-homebrew-pliny-the-toddler",
              "beer_ibu": 0,
              "beer_description": "Session IPA",
              "created_at": "Sat, 14 Jul 2012 20:15:23 +0000",
              "beer_style": "IPA - American",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 21951,
              "brewery_name": "Big Brent's Homebrew",
              "brewery_slug": "big-brent-s-homebrew",
              "brewery_page_url": "/bigbrent",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "Santa Ana",
                "brewery_state": "CA",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 31,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 1033678,
              "beer_name": "Pliny the Step Child",
              "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-1033678_5e65d_sm.jpeg",
              "beer_abv": 7.9,
              "beer_slug": "big-yank-brewery-pliny-the-step-child",
              "beer_ibu": 0,
              "beer_description": "Collab with Brew & White Brewing",
              "created_at": "Fri, 03 Apr 2015 07:57:12 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 73713,
              "brewery_name": "Big Yank Brewery ",
              "brewery_slug": "big-yank-brewery",
              "brewery_page_url": "/BigYankBrewery",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-73713_46785.jpeg",
              "country_name": "United States",
              "contact": {
                "twitter": "BigYankBrewery",
                "facebook": "https://www.facebook.com/BigYankBrewing",
                "instagram": "BigYankBrewery",
                "url": ""
              },
              "location": {
                "brewery_city": "Tyrone",
                "brewery_state": "PA",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 31,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 471840,
              "beer_name": "Attack Of The Pliny",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 8.5,
              "beer_slug": "mebasement-brewery-attack-of-the-pliny",
              "beer_ibu": 0,
              "beer_description": "Pliny the Elder Clone. Collaboration with Nuuga Brew House. ",
              "created_at": "Tue, 08 Oct 2013 13:31:05 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 72866,
              "brewery_name": "MeBasement Brewery",
              "brewery_slug": "mebasement-brewery",
              "brewery_page_url": "/w/mebasement-brewery/72866",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "Canada",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          },
          {
            "checkin_count": 29,
            "have_had": false,
            "your_count": 0,
            "beer": {
              "bid": 780794,
              "beer_name": "Pliny The Boilermaker",
              "beer_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
              "beer_abv": 7.5,
              "beer_slug": "teufels-eck-brewery-pliny-the-boilermaker",
              "beer_ibu": 95,
              "beer_description": "",
              "created_at": "Sat, 16 Aug 2014 00:42:06 +0000",
              "beer_style": "IPA - Imperial / Double",
              "in_production": 1,
              "auth_rating": 0,
              "wish_list": false
            },
            "brewery": {
              "brewery_id": 118819,
              "brewery_name": "Teufels Eck Brewery",
              "brewery_slug": "teufels-eck-brewery",
              "brewery_page_url": "/w/teufels-eck-brewery/118819",
              "brewery_type": "Home Brewery",
              "brewery_label": "https://untappd.akamaized.net/site/assets/images/temp/badge-brewery-default.png",
              "country_name": "United States",
              "contact": {
                "twitter": "",
                "facebook": "",
                "instagram": "",
                "url": ""
              },
              "location": {
                "brewery_city": "",
                "brewery_state": "",
                "lat": 0,
                "lng": 0
              },
              "brewery_active": 1
            }
          }
        ]
      },
      "breweries": {
        "items": [],
        "count": 0
      }
    }
  }