const users = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
    logo: "facebook.svg",
    logoIcon: true,
    attributes: {
      sponsor: true,
      contributor: true,
    },
  },
  {
    name: "CloudFlare",
    url: "https://cloudflare.com/",
    logo: "cloudflare.png",
  },
  {
    name: "Netflix",
    url: "https://www.netflix.com/",
    logo: "netflix.svg",
  },
  {
    name: "Mozilla",
    url: "https://www.mozilla.org/",
    logo: "mozilla.svg",
  },
  {
    name: "PayPal",
    url: "https://paypal.com",
    logo: "paypal.svg",
    logoIcon: true,
  },
  {
    name: "Airbnb",
    url: "https://www.airbnb.com/",
    logo: "airbnb.svg",
    attributes: {
      sponsor: true,
    },
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com",
    logo: "reddit.png",
  },
  {
    name: "Spotify",
    url: "https://www.spotify.com",
    logo: "spotify.png",
  },
  {
    name: "Atlassian",
    url: "https://www.atlassian.com/",
    logo: "atlassian.svg",
  },
  {
    name: "NFL",
    url: "http://www.nfl.com",
    logo: "nfl.svg",
  },
  {
    name: "Bocoup",
    url: "http://bocoup.com/",
    logo: "bocoup.png",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com",
    logo: "soundcloud.png",
  },
  {
    name: "Zendesk",
    url: "http://www.zendesk.com",
    logo: "zendesk.svg",
  },
  {
    name: "Vimeo",
    url: "https://vimeo.com",
    logo: "vimeo.svg",
  },
  {
    name: "npm",
    url: "https://www.npmjs.com",
    logo: "npm.svg",
    attributes: {
      openSource: true,
    },
  },
  {
    name: "Ember",
    url: "http://emberjs.com/",
    logo: "ember.png",
    attributes: {
      openSource: true,
    },
  },
  {
    name: "React",
    url: "https://facebook.github.io/react/",
    logo: "react.svg",
    logoIcon: true,
    attributes: {
      openSource: true,
    },
  },
  {
    name: "Marionette",
    url: "http://marionettejs.com/",
    logo: "marionette.svg",
    attributes: {
      openSource: true,
    },
  },
  {
    name: "WalmartLabs",
    url: "http://www.walmartlabs.com/",
    logo: "walmartlabs.png",
  },
  {
    name: "Slack",
    url: "https://slack.com/",
    logo: "slack.svg",
    logoIcon: true,
  },
  {
    name: "Ghost",
    url: "https://ghost.org/",
    logo: "ghost.svg",
    attributes: {
      openSource: true,
    },
  },
  {
    name: "Flipboard",
    url: "https://flipboard.com/",
    logo: "flipboard.svg",
  },
  {
    name: "Atom",
    url: "https://atom.io/",
    logo: "atom.png",
    attributes: {
      openSource: true,
    },
  },
  {
    name: "WebStorm",
    url: "https://www.jetbrains.com/webstorm/",
    logo: "webstorm.svg",
  },
  {
    name: "Evernote",
    url: "https://evernote.com/",
    logo: "evernote.svg",
  },
  {
    name: "NodeSource",
    url: "https://nodesource.com/",
    logo: "nodesource.svg",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    logo: "mongodb.svg",
  },
  {
    name: "Envato",
    url: "http://www.envato.com/",
    logo: "envato.png",
  },
  {
    name: "Impraise",
    url: "http://impraise.com/",
    logo: "impraise.svg",
  },
  {
    name: "Thinkmill",
    url: "http://thinkmill.com.au",
    logo: "thinkmill.png",
  },
  {
    name: "&yet",
    url: "http://andyet.com",
    logo: "andyet.svg",
  },
  {
    name: "Skylight",
    url: "https://www.skylight.io/",
    logo: "skylight.png",
  },
  {
    name: "Discourse",
    url: "http://www.discourse.org/",
    logo: "discourse.png",
  },
  {
    name: "thoughtbot",
    url: "https://thoughtbot.com/",
    logo: "thoughtbot.svg",
  },
  {
    name: "Segment",
    url: "https://www.segment.com",
    logo: "segment.svg",
  },
  {
    name: "Flipkart",
    url: "http://www.flipkart.com",
    logo: "flipkart.png",
  },
  {
    name: "Sprout Social",
    url: "http://sproutsocial.com",
    logo: "sprout-social.svg",
  },
  {
    name: "AddThis",
    url: "http://www.addthis.com",
    logo: "addthis.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    logo: "linkedin.png",
  },
  {
    name: "HubSpot",
    url: "http://www.hubspot.com/",
    logo: "hubspot.png",
  },
  {
    name: "SmugMug",
    url: "http://www.smugmug.com/",
    logo: "smugmug.png",
  },
  {
    name: "Kindling",
    url: "https://www.kindlingapp.com/",
    logo: "kindling.png",
  },
  {
    name: "Hailo",
    url: "https://www.hailoapp.com/",
    logo: "hailo.png",
  },
  {
    name: "Mapbox",
    url: "https://www.mapbox.com/",
    logo: "mapbox.svg",
  },
  {
    name: "Lodash",
    url: "https://lodash.com",
    logo: "lodash.svg",
  },
  {
    name: "Stampsy",
    url: "http://stampsy.com/",
    logo: "stampsy.svg",
  },
  {
    name: "201 Created",
    url: "http://www.201-created.com/",
    logo: "201-created.svg",
  },
  {
    name: "Ninja Squad",
    url: "http://ninja-squad.fr/",
    logo: "ninja-squad.png",
  },
  {
    name: "Aurelia",
    url: "http://aurelia.io/",
    logo: "aurelia.png",
  },
  {
    name: "Viget",
    url: "http://viget.com/",
    logo: "viget.png",
  },
  {
    name: "Mango",
    url: "https://getmango.com/",
    logo: "mango.png",
    logoIcon: true,
  },
  {
    name: "Auth0",
    url: "https://auth0.com/",
    logo: "auth0.png",
  },
  {
    name: "Broadly",
    url: "https://broadly.com/",
    logo: "broadly.svg",
  },
  {
    name: "Vivaldi",
    url: "https://vivaldi.com",
    logo: "vivaldi.png",
  },
  {
    name: "TipRanks",
    url: "http://www.tipranks.com/",
    logo: "tipranks.png",
  },
  {
    name: "HZDG",
    url: "http://www.hzdg.com/",
    logo: "hzdg.svg",
  },
  {
    name: "BoomTown",
    url: "http://www.boomtownroi.com",
    logo: "boomtown.svg",
  },
  {
    name: "Codecademy",
    url: "http://www.codecademy.com",
    logo: "codecademy.svg",
  },
  {
    name: "KeystoneJS",
    url: "http://www.keystonejs.com",
    logo: "keystonejs.svg",
  },
  {
    name: "Autoprefixer",
    url: "https://github.com/postcss/autoprefixer/",
    logo: "autoprefixer.svg",
    logoIcon: true,
    attributes: {
      openSource: true,
    },
  },
  {
    name: "PostCSS",
    url: "https://github.com/postcss/postcss/",
    logo: "postcss.svg",
    logoIcon: true,
    attributes: {
      openSource: true,
    },
  },
  {
    name: "SassDoc",
    url: "http://sassdoc.com/",
    logo: "sassdoc.svg",
    attributes: {
      openSource: true,
    },
  },
  {
    name: "Portfolium",
    url: "https://portfolium.com",
    logo: "portfolium.png",
  },
  {
    name: "Trapit",
    url: "http://trap.it/",
    logo: "trapit.png",
  },
  {
    name: "Trunk Club",
    url: "https://trunkclub.com",
    logo: "trunk-club.svg",
  },
  {
    name: "DotLabel",
    url: "http://dotlabel.co.uk/",
    logo: "dotlabel.png",
  },
  {
    name: "Uken Games",
    url: "http://www.uken.com",
    logo: "uken-games.png",
  },
  {
    name: "Spoqa",
    url: "https://spoqa.com/",
    logo: "spoqa.png",
  },
  {
    name: "ProAppSoft",
    url: "http://proappsoft.com/",
    logo: "proappsoft.png",
    logoIcon: true,
  },
  {
    name: "Front End TV",
    url: "http://www.frontend.tv",
    logo: "frontend-tv.svg",
  },
  {
    name: "Video.js",
    url: "http://www.videojs.com",
    logo: "video-js.png",
  },
  {
    name: "Windsor Circle",
    url: "http://www.windsorcircle.com/",
    logo: "windsor-circle.png",
  },
  {
    name: "WebbyLab",
    url: "http://webbylab.com",
    logo: "webby-lab.svg",
  },
  {
    name: "REA Group",
    url: "http://www.realestate.com.au",
    logo: "rea-group.svg",
  },
  {
    name: "Adfinis SyGroup AG",
    url: "https://adfinis-sygroup.ch/",
    logo: "adfinis-sygroup-ag.png",
  },
  {
    name: "Harmonic",
    url: "https://github.com/es6rocks/harmonic/",
    logo: "harmonic.svg",
  },
  {
    name: "Alianza Inc",
    url: "http://www.alianza.com/",
    logo: "alianza.png",
  },
  {
    name: "PowerReviews",
    url: "http://www.powerreviews.com",
    logo: "power-reviews.png",
  },
  {
    name: "angular-formly",
    url: "http://angular-formly.com",
    logo: "angular-formly.png",
    logoIcon: true,
  },
  {
    name: "QuizUp",
    url: "https://quizup.com",
    logo: "quizup.svg",
  },
  {
    name: "Getable",
    url: "https://getable.com",
    logo: "getable.svg",
  },
  {
    name: "Billogram",
    url: "https://billogram.com",
    logo: "billogram.png",
  },
  {
    name: "Cinema6",
    url: "http://cinema6.com/",
    logo: "cinema6.png",
  },
  {
    name: "HumongouS.io",
    url: "https://www.humongous.io",
    logo: "humongous.png",
  },
  {
    name: "Product Health",
    url: "http://producthealth.com/",
    logo: "product-health.svg",
  },
  {
    name: "SPHERE.IO",
    url: "http://sphere.io/",
    logo: "sphereio.svg",
  },
  {
    name: "Impero",
    url: "http://weareimpero.com",
    logo: "impero.svg",
  },
  {
    name: "Ticketmaster",
    url: "http://www.ticketmaster.com/",
    logo: "ticketmaster.svg",
  },
  {
    name: "EveryDollar",
    url: "https://www.everydollar.com",
    logo: "everydollar.svg",
  },
  {
    name: "Grove Labs",
    url: "https://grovelabs.io/",
    logo: "grove.svg",
  },
  {
    name: "SEEK",
    url: "http://www.seek.com.au",
    logo: "seek.svg",
  },
  {
    name: "ATTN",
    url: "http://www.attn.com",
    logo: "attn.svg",
  },
  {
    name: "Bench",
    url: "https://bench.co",
    logo: "bench.svg",
  },
  {
    name: "Brigade",
    url: "https://www.brigade.com",
    logo: "brigade.svg",
  },
  {
    name: "Canopy",
    url: "https://www.canopytax.com",
    logo: "canopy.svg",
  },
  {
    name: "Cyfrowy Polsat",
    url: "http://www.cyfrowypolsat.pl/",
    logo: "cyfrowy-polsat.png",
  },
  {
    name: "React Bootstrap",
    url: "https://react-bootstrap.github.io/",
    logo: "react-bootstrap.png",
    logoIcon: true,
    attributes: {
      openSource: true,
    },
  },
  {
    name: "YACHT",
    url: "http://www.yacht.nl",
    logo: "yacht.png",
  },
  {
    name: "YPlan",
    url: "https://yplanapp.com",
    logo: "yplan.svg",
  },
  {
    name: "freee",
    url: "http://www.freee.co.jp",
    logo: "freee.png",
  },
  {
    name: "Meadow",
    url: "https://getmeadow.com",
    logo: "meadow.png",
  },
  {
    name: "Money Forward",
    url: "http://corp.moneyforward.com/",
    logo: "moneyforward.png",
  },
  {
    name: "Housing",
    url: "https://housing.com/",
    logo: "housing.png",
  },
  {
    name: "MojoTech",
    url: "https://mojotech.com",
    logo: "mojotech.svg",
  },
  {
    name: "Paperless Post",
    url: "https://paperlesspost.com",
    logo: "paperlesspost.png",
  },
  {
    name: "Squarespace",
    url: "https://www.squarespace.com",
    logo: "squarespace.svg",
  },
  {
    name: "Behance",
    url: "https://www.myportfolio.com/",
    logo: "behance.svg",
    attributes: {
      sponsor: true,
    },
  },
  {
    name: "Targetprocess",
    url: "https://www.targetprocess.com/",
    logo: "targetprocess.svg",
  },
  {
    name: "GoDaddy",
    url: "https://www.godaddy.com/",
    logo: "godaddy.png",
  },
  {
    name: "hackerYou",
    url: "http://hackeryou.com/",
    logo: "hackeryou.svg",
  },
  {
    name: "KongGe",
    url: "http://kongge.com/",
    logo: "kongge.png",
  },
  {
    name: "UrbanAirship",
    url: "https://www.urbanairship.com/",
    logo: "urbanairship.svg",
  },
  {
    name: "Moneytree",
    url: "https://moneytree.jp/",
    logo: "moneytree.png",
  },
  {
    name: "Social Tables",
    url: "https://www.socialtables.com/",
    logo: "socialtables.png",
  },
  {
    name: "Nukomeet",
    url: "http://nukomeet.com/",
    logo: "nukomeet.png",
  },
  {
    name: "Olapic",
    url: "https://www.olapic.com/",
    logo: "olapic.svg",
  },
  {
    name: "Codinum",
    url: "https://codinum.com/",
    logo: "codinum.png",
  },
  {
    name: "Wallaby.js",
    url: "http://wallabyjs.com/",
    logo: "wallaby.svg",
    logoIcon: true,
  },
  {
    name: "Schibsted Spain",
    url: "http://www.schibsted.es/",
    logo: "schibsted-spain.svg",
  },
  {
    name: "pebble {code}",
    url: "http://pebblecode.com",
    logo: "pebblecode.png",
  },
  {
    name: "FINN.no",
    url: "https://finn.no/",
    logo: "finn.svg",
  },
  {
    name: "TES Global",
    url: "https://www.tes.com",
    logo: "tesglobal.svg",
  },
  {
    name: "Cuvva",
    url: "https://cuvva.co",
    logo: "cuvva.svg",
    logoIcon: true,
  },
  {
    name: "Textalk",
    url: "http://textalk.se",
    logo: "textalk.svg",
  },
  {
    name: "Avant",
    url: "https://www.avant.com",
    logo: "avant.svg",
  },
  {
    name: "FanDuel",
    url: "https://www.fanduel.com",
    logo: "fanduel.svg",
  },
  {
    name: "Kogan.com",
    url: "https://www.kogan.com",
    logo: "kogan-com.svg",
  },
  {
    name: "SparkPost.com",
    url: "https://www.sparkpost.com/",
    logo: "sparkpost.svg",
  },
  {
    name: "Under Armour",
    url: "https://www.underarmour.com/",
    logo: "ua.svg",
    logoIcon: true,
  },
  {
    name: "WIX",
    url: "https://www.wix.com/",
    logo: "wix.png",
  },
  {
    name: "BestPrice",
    url: "https://www.bestprice.gr/",
    logo: "bestprice.svg",
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/",
    logo: "deezer.svg",
  },
  {
    name: "VersionOne",
    url: "https://www.versionone.com/",
    logo: "versionone.png",
  },
  {
    name: "HolidayCheck",
    url: "https://www.holidaycheck.de/",
    logo: "holidaycheck.svg",
  },
  {
    name: "Transloadit",
    url: "https://transloadit.com",
    logo: "transloadit.svg",
  },
  {
    name: "BitMEX",
    url: "https://www.bitmex.com",
    logo: "bitmex.svg",
    attributes: {
      sponsor: true,
    },
  },
  {
    name: "Discord",
    url: "https://discordapp.com",
    logo: "discord.svg",
  },
  {
    name: "Zillow Group",
    url: "http://www.zillowgroup.com/",
    logo: "zillowgroup.svg",
  },
  {
    name: "Brightin",
    url: "https://www.brightin.nl",
    logo: "brightin.png",
  },
  {
    name: "Kascale",
    url: "http://www.kascale.com/",
    logo: "kascale.svg",
  },
  {
    name: "Lyst",
    url: "https://www.lyst.com/",
    logo: "lyst.svg",
  },
  {
    name: "Redfin",
    url: "https://www.redfin.com/",
    logo: "redfin.svg",
  },
  {
    name: "cssnano",
    url: "http://cssnano.co",
    logo: "cssnano.svg",
    logoIcon: true,
  },
  {
    name: "Funny Or Die",
    url: "http://www.funnyordie.com",
    logo: "funnyordie.svg",
  },
  {
    name: "GeekPark",
    url: "http://www.geekpark.net",
    logo: "geekpark.svg",
  },
  {
    name: "Phoenix Robotix",
    url: "http://phoenixrobotix.com",
    logo: "phoenixrobotix.png",
  },
  {
    name: "CaiFuPai",
    url: "https://www.caifupai.com",
    logo: "caifupai.svg",
  },
  {
    name: "FiveStars",
    url: "http://www.fivestars.com",
    logo: "fivestars.png",
  },
  {
    name: "QuickSearch",
    url: "http://www.quicksearch.in",
    logo: "quicksearch.svg",
  },
  {
    name: "AdPushup",
    url: "https://www.adpushup.com/",
    logo: "adpushup.png",
  },
  {
    name: "clearTax",
    url: "https://cleartax.in",
    logo: "cleartax.svg",
  },
  {
    name: "TradingView",
    url: "https://www.tradingview.com/",
    logo: "tradingview.svg",
  },
  {
    name: "NodeXperts",
    url: "http://www.nodexperts.com",
    logo: "nodexperts.svg",
  },
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net",
    logo: "researchgate.svg",
  },
  {
    name: "EVO.company",
    url: "https://evo.company",
    logo: "evocompany.svg",
  },
  {
    name: "pixiv",
    url: "http://www.pixiv.net",
    logo: "pixiv.svg",
  },
  {
    name: "Streamroot",
    url: "https://www.streamroot.io",
    logo: "streamroot.svg",
  },
  {
    name: "RentoMojo",
    url: "https://www.rentomojo.com",
    logo: "rentomojo.svg",
  },
  {
    name: "Zimp",
    url: "https://zimp.me",
    logo: "zimp.svg",
  },
  {
    name: "Disqus",
    url: "https://www.disqus.com",
    logo: "disqus.svg",
  },
  {
    name: "RTBF.be",
    url: "https://www.rtbf.be",
    logo: "rtbf.svg",
  },
  {
    name: "9Technology",
    url: "http://www.nineentertainmentco.com.au/brands/nine-digital",
    logo: "9tech-logo.svg",
  },
  {
    name: "Feedzai",
    url: "https://feedzai.com/",
    logo: "feedzai.svg",
  },
  {
    name: "Zesty.io",
    url: "https://www.zesty.io/",
    logo: "zestyio.svg",
  },
  {
    name: "Shoes of Prey",
    url: "https://www.shoesofprey.com",
    logo: "shoesofprey.svg",
  },
  {
    name: "Work & Co",
    url: "https://work.co",
    logo: "workandco.svg",
  },
  {
    name: "Paralect",
    url: "https://paralect.com",
    logo: "paralect.svg",
  },
  {
    name: "Just Eat",
    url: "https://www.just-eat.com",
    logo: "justeat.svg",
  },
  {
    name: "Snapdeal",
    url: "https://www.snapdeal.com",
    logo: "snapdeal.svg",
  },
  {
    name: "Microsoft",
    url: "https://www.microsoft.com",
    logo: "microsoft.svg",
  },
  {
    name: "Indigo",
    url: "https://www.chapters.indigo.ca/",
    logo: "indigo.svg",
  },
  {
    name: "Namely",
    url: "https://www.namely.com/",
    logo: "namely.svg",
  },
  {
    name: "Bevry",
    url: "https://bevry.me",
    logo: "bevry.svg",
  },
  {
    name: "Concur",
    url: "https://www.concur.com/",
    logo: "concur.svg",
  },
  {
    name: "Tanda",
    url: "https://www.tanda.co/",
    logo: "tanda.svg",
  },
  {
    name: "Directlyrics",
    url: "https://www.directlyrics.com/",
    logo: "directlyrics.svg",
  },
  {
    name: "Umanlife",
    url: "http://us.umanlife.com",
    logo: "umanlife.svg",
  },
  {
    name: "Hooroo",
    url: "https://hooroo.com/",
    logo: "hooroo.svg",
  },
  {
    name: "The New York Times",
    url: "https://nytimes.com/",
    logo: "nytimes.svg",
  },
  {
    name: "Wave",
    url: "https://waveapps.com",
    logo: "wave.svg",
  },
  {
    name: "Shelf.io",
    url: "https://shelf.io/",
    logo: "shelfio.svg",
  },
  {
    name: "Nau Studio",
    url: "https://naustud.io",
    logo: "naustudio.svg",
  },
  {
    name: "Triip",
    url: "https://triip.me",
    logo: "triip.svg",
  },
  {
    name: "Overblog",
    url: "https://over-blog.com",
    logo: "overblog.svg",
  },
  {
    name: "EXANTE",
    url: "https://exante.eu",
    logo: "exante.svg",
  },
  {
    name: "Insider.pro",
    url: "https://insider.pro",
    logo: "insider.svg",
  },
  {
    name: "JustWatch",
    url: "https://www.justwatch.com",
    logo: "justwatch.svg",
  },
  {
    name: "HIJUP",
    url: "https://www.hijup.com",
    logo: "hijup.svg",
  },
  {
    name: "Jane",
    url: "https://jane.com",
    logo: "jane.svg",
  },
  {
    name: "Jobtalk",
    url: "https://jobtalk.jp/",
    logo: "jobtalk.svg",
  },
  {
    name: "LIGADIGITAL",
    url: "https://www.ligadigital.com/",
    logo: "ligadigital.svg",
  },
  {
    name: "Bitovi",
    url: "https://www.bitovi.com/",
    logo: "bitovi-logo.svg",
  },
  {
    name: "Hootsuite",
    url: "https://hootsuite.com/",
    logo: "hootsuite.svg",
  },
  {
    name: "SeatGeek",
    url: "https://seatgeek.com",
    logo: "seatgeek.svg",
  },
  {
    name: "Hux",
    url: "https://hux.com",
    logo: "hux.svg",
  },
  {
    name: "LeSalon",
    url: "https://lesalon.com",
    logo: "lesalon.svg",
  },
  {
    name: "Refinery29",
    url: "http://refinery29.com",
    logo: "refinery29.svg",
  },
  {
    name: "Aha!",
    url: "https://www.aha.io",
    logo: "aha.svg",
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com",
    logo: "hashnode.svg",
  },
  {
    name: "Teachoo",
    url: "https://www.teachoo.com",
    logo: "teachoo.svg",
  },
  {
    name: "Web Jam LLC",
    url: "https://www.web-jam.com",
    logo: "WebJamLLC.svg",
  },
  {
    name: "Douban Read",
    url: "https://read.douban.com",
    logo: "ark.svg",
  },
  {
    name: "Hasura",
    url: "https://hasura.io",
    logo: "hasura.svg",
  },
  {
    name: "Yelp",
    url: "https://www.yelp.com",
    logo: "yelp.svg",
  },
  {
    name: "N26",
    url: "https://n26.com",
    logo: "n26.svg",
  },
  {
    name: "iLoveCoding",
    url: "https://ilovecoding.org",
    logo: "ilovecoding.svg",
  },
  {
    name: "hipages",
    url: "https://hipages.com.au",
    logo: "hipages.svg",
  },
  {
    name: "Weblio",
    url: "https://ejje.weblio.jp/",
    logo: "weblio.svg",
  },
  {
    name: "UNCOVER TRUTH",
    url: "https://www.uncovertruth.co.jp/",
    logo: "uncovertruth.svg",
  },
  {
    name: "Coupa",
    url: "https://www.coupa.com",
    logo: "coupa.svg",
  },
  {
    name: "ePages",
    url: "https://www.epages.com",
    logo: "epages.svg",
  },
  {
    name: "Digitalychee",
    url: "https://www.lizhi.io",
    logo: "digitalychee.svg",
    added: "2018-09-19",
  },
  {
    name: "CrowdSync",
    url: "https://www.crowdsync.io",
    logo: "crowdsync.svg",
    added: "2018-09-20",
  },
  {
    name: "FusionCharts",
    url: "https://www.fusioncharts.com/",
    logo: "fusioncharts.svg",
    added: "2018-09-20",
  },
  {
    name: "Yeti",
    url: "https://yeti.co",
    logo: "yeti.svg",
    added: "2018-09-20",
  },
  {
    name: "Kuali",
    url: "https://www.kuali.co",
    logo: "kuali.svg",
    added: "2018-09-21",
  },
  {
    name: "Sequence",
    url: "https://sequence.work",
    logo: "sequence.svg",
    added: "2018-09-21",
  },
  {
    name: "BitMidi",
    url: "https://bitmidi.com",
    logo: "bitmidi.svg",
    added: "2018-09-21",
  },
  {
    name: "Test Company Babel",
    url: "https://facebook.com/",
    logo: "test-company-babel.png",
    "attributes": {
        openSource: true,
        contributor: true,
        sponsor: true
    },
    added: "2019-01-28"
  },
];

module.exports = users;
