import React, { Component } from "react"
import NewsItem from "./newsItem"

export class News extends Component {
	articles = [
		{
			source: {
				id: null,
				name: "The Indian Express",
			},
			author: "The Indian Express",
			title:
				"Flipkart to slash iPhone 15 price to Rs 63,999 during big saving days sale - The Indian Express",
			description: null,
			url: "https://indianexpress.com/article/technology/mobile-tabs/iphone-15-sale-offers-flipkart-9298988/",
			urlToImage: null,
			publishedAt: "2024-04-30T10:17:25Z",
			content: null,
		},
		{
			source: {
				id: null,
				name: "PINKVILLA",
			},
			author: "Marita Pinto",
			title:
				"What is 2022 TN1 asteroid? Ginormous 1029-foot space rock to hurtles towards Earth at break-neck speed on April 30 - PINKVILLA",
			description:
				"On April 30, 2024, An Asteroid Known As 2022 TN1 Will Get Close To Earth—71,30,422 Kilometers, Or Fewer Than 19 Times The Distance From Earth To The Moon.",
			url: "https://www.pinkvilla.com/trending/world/what-is-2022-tn1-asteroid-ginormous-1029-foot-space-rock-to-hurtles-towards-earth-at-break-neck-speed-on-april-30-1300748",
			urlToImage:
				"https://www.pinkvilla.com/images/2024-04/1749138770_2022-tn1.jpg",
			publishedAt: "2024-04-30T09:45:27Z",
			content:
				"NASA experts are on high alert due to a cosmic event in which a large asteroid known as 2022 TN1 is rapidly approaching Earth. On April 30, 2024, this enormous space rock1029 feet wideis scheduled to… [+2194 chars]",
		},
		{
			source: {
				id: null,
				name: "Livemint",
			},
			author: "Ankit Gohel",
			title:
				"IOC Q4 Results: Net profit drops 40% QoQ to ₹4,838 crore; declares dividend of ₹7 | Mint - Mint",
			description:
				"IOC Q4 Results: IOC’s Q4FY24 revenue from operations fell to  ₹2.19 lakh crore from  ₹2.23 lakh crore, QoQ. Average Gross Refining Margin (GRM) for the year April-March 2024 is $12.05 per barrel.",
			url: "https://www.livemint.com/companies/company-results/ioc-q4-results-net-profit-drops-40-qoq-to-rs-4-838-crore-declares-dividend-of-rs-7-11714469358392.html",
			urlToImage:
				"https://www.livemint.com/lm-img/img/2024/04/30/1600x900/indianoil-kq0C--621x41int_1714469463843_1714469463989.jpg",
			publishedAt: "2024-04-30T09:30:26Z",
			content:
				"Indian Oil Corporation (IOC) on Tuesday reported a 40% drop in its standalone net profit at 4,837.69 crore for the fourth quarter of FY24. The state-owned oil marketing company posted a net profit of… [+2867 chars]",
		},
		{
			source: {
				id: null,
				name: "India Today",
			},
			author: "Sneha Mordani",
			title:
				"AstraZeneca's Covid vaccine may cause blood clotting: Should you be worried? - India Today",
			description:
				"India Today spoke to doctors about AstraZeneca039s admission and the rare side effect called TTS triggered by its Covid-19 vaccine",
			url: "https://www.indiatoday.in/health/story/astrazeneca-covid-vaccine-blood-clotting-tts-india-covishield-2533510-2024-04-30",
			urlToImage:
				"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/vaccine-covishield-301813416-16x9_0.jpg?VersionId=_8W7S0pYybl2FbIJAy2eHfs4JPHgi48H",
			publishedAt: "2024-04-30T09:24:44Z",
			content:
				"The British pharmaceutical company, AstraZeneca, has for the first time admitted in court documents that its vaccine against Covid-19 has the potential to cause TTS, a rare side effect associated wit… [+3966 chars]",
		},
		{
			source: {
				id: null,
				name: "NDTV News",
			},
			author: null,
			title:
				'Man With "Samurai-Type Sword" Arrested In London After Several Attacked - NDTV',
			description:
				"A man with a sword was arrested in Hainault, east of London after several people were attacked and injured, the Metropolitan Police said on Tuesday.",
			url: "https://www.ndtv.com/world-news/man-with-sword-attacks-several-people-including-2-cops-in-london-arrested-5556151",
			urlToImage:
				"https://c.ndtvimg.com/2024-04/rp753kgg_man-with-sword-london_625x300_30_April_24.jpg",
			publishedAt: "2024-04-30T09:03:55Z",
			content:
				'We are awaiting an update on the condition of those injured," cops said.\r\nLondon: A man with a sword was arrested in Hainault, east of London, after several people were attacked and injured, the Metr… [+2238 chars]',
		},
		{
			source: {
				id: "google-news",
				name: "Google News",
			},
			author: null,
			title:
				'"Very Disappointing Question": Asked About Virat Kohli\'s Strike-Rate, Irfan Pathan Loses It On TV - NDTV Sports',
			description:
				"Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
			url: "https://news.google.com/rss/articles/CBMihQFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC92ZXJ5LWRpc2FwcG9pbnRpbmctcXVlc3Rpb24tYXNrZWQtYWJvdXQtdmlyYXQta29obGlzLXN0cmlrZS1yYXRlLWlyZmFuLXBhdGhhbi1sb3Nlcy1pdC1vbi10di01NTQ4MTU30gGLAWh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2lwbC0yMDI0L3ZlcnktZGlzYXBwb2ludGluZy1xdWVzdGlvbi1hc2tlZC1hYm91dC12aXJhdC1rb2hsaXMtc3RyaWtlLXJhdGUtaXJmYW4tcGF0aGFuLWxvc2VzLWl0LW9uLXR2LTU1NDgxNTcvYW1wLzE",
			urlToImage:
				"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
			publishedAt: "2024-04-30T09:01:31Z",
			content: null,
		},
		{
			source: {
				id: null,
				name: "The Indian Express",
			},
			author: "The Indian Express",
			title:
				"Prajwal Revanna suspended over explicit videos’ case: ‘direct role of Karnataka govt leaders,’ claims uncle Kumaraswamy - The Indian Express",
			description: null,
			url: "https://indianexpress.com/article/cities/bangalore/jds-suspends-deve-gowdas-grandson-prajwal-revanna-over-sex-abuse-case-9298564/",
			urlToImage: null,
			publishedAt: "2024-04-30T09:00:23Z",
			content: null,
		},
		{
			source: {
				id: null,
				name: "Deccan Herald",
			},
			author: "PTI",
			title: "Sanofi introduces diabetes drug Soliqua in India - Deccan Herald",
			description:
				"New Delhi, Apr 30 (PTI) Sanofi India on Tuesday said it has launched its diabetes drug Soliqua in the country.",
			url: "https://www.deccanherald.com/india/sanofi-introduces-diabetes-drug-soliqua-in-india-3000995",
			urlToImage:
				"https://images.deccanherald.com/deccanherald%2F2024-04%2F9ff5aee8-2868-4f21-8698-4d2610a866c0%2Fsanofi_1584706829.jpg?rect=0%2C2%2C1200%2C630&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
			publishedAt: "2024-04-30T08:49:45Z",
			content:
				"New Delhi: Sanofi India on Tuesday said it has launched its diabetes drug Soliqua in the country.\r\nThe company introduced the medication after receiving the marketing authorisation from the Central D… [+293 chars]",
		},
		{
			source: {
				id: null,
				name: "Hindustan Times",
			},
			author: "HT Sports Desk",
			title:
				"India T20 World Cup squad Live Updates: Ajit Agarkar, Jay Shah attend meeting - Hindustan Times",
			description:
				"T20 World Cup India Squad 2024 Live Updates: The BCCI selection committee meeting headed by Ajit Agarkar to determine the final Team India squad is underway.",
			url: "https://www.hindustantimes.com/cricket/t20-world-cup-india-squad-2024-live-updates-cricket-team-india-playing-11-bcci-ajit-agarkar-rohit-sharma-hardik-pandya-101714439882755.html",
			urlToImage:
				"https://www.hindustantimes.com/ht-img/img/2024/04/30/550x309/ANI-20240205292-0_1714463574655_1714463640168.jpg",
			publishedAt: "2024-04-30T08:30:02Z",
			content:
				"T20 World Cup India Squad 2024 Live Updates: The much-awaited day has finally arrived for the Indian cricket fraternity. There have been much debate and discussion on the probable 15 that India might… [+14919 chars]",
		},
		{
			source: {
				id: null,
				name: "YouTube",
			},
			author: null,
			title:
				"A new space race underway: The far side of moon is China's next target | WION Climate Tracker - WION",
			description:
				"China will send a robotic spacecraft in coming days on a round trip to the moon's far side in the first of three technically demanding missions that will pav...",
			url: "https://www.youtube.com/watch?v=VAF-C98Rhrw",
			urlToImage: "https://i.ytimg.com/vi/VAF-C98Rhrw/maxresdefault.jpg",
			publishedAt: "2024-04-30T08:04:03Z",
			content: null,
		},
		{
			source: {
				id: null,
				name: "NDTV News",
			},
			author: null,
			title:
				'Ibrahim Ali Khan Makes Grand Instagram Debut: "Legacy? I\'ll Make My Own" - NDTV Movies',
			description: 'Kareena Kapoor wrote, "Let\'s shoot together soon"',
			url: "https://www.ndtv.com/entertainment/ibrahim-ali-khan-makes-grand-instagram-debut-legacy-ill-make-my-own-5555618",
			urlToImage:
				"https://c.ndtvimg.com/2024-04/7uiu4k88_ibrahim-_625x300_30_April_24.jpeg",
			publishedAt: "2024-04-30T07:54:15Z",
			content:
				"Ibrahim Ali Khan shared this image. (courtesy: IbrahimAliKhan)\r\nNew Delhi: Saif Ali Khan and Amrita Singh's son Ibrahim Ali Khan made his big Instagram debut on Tuesday and he did it in impeccable st… [+1772 chars]",
		},
		{
			source: {
				id: null,
				name: "Bar & Bench - Indian Legal News",
			},
			author: "Meera Emmanuel",
			title:
				"Why Supreme Court warned Indian Medical Association President of serious consequences in Patanjali case - Bar & Bench - Indian Legal News",
			description:
				"The Supreme Court on Tuesday took strong exception to comments made by Indian Medical Association (IMA) President Dr RV Asokan against the top court in relation",
			url: "https://www.barandbench.com/news/supreme-court-indian-medical-association-president-serious-consequences-patanjali-case",
			urlToImage:
				"https://media.assettype.com/barandbench%2F2024-04%2Faa849c64-1a1e-413a-a4f5-cfec8e14fa36%2F14.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
			publishedAt: "2024-04-30T07:19:10Z",
			content:
				"The IMA, which is the petitioner in the case against Patanjali, had faced some adverse comments from the Court on April 23.\r\nThe Court had told the Association to put its house in order and address u… [+717 chars]",
		},
		{
			source: {
				id: "the-times-of-india",
				name: "The Times of India",
			},
			author: "Shifa Khan",
			title: "8 golden rules to prevent kidney problems - The Times of India",
			description: "8 golden rules to prevent kidney problems.",
			url: "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/8-golden-rules-to-prevent-kidney-problems/photostory/109695648.cms",
			urlToImage:
				"https://static.toiimg.com/thumb/msid-109695674,imgsize-740488,width-900,height-1200,resizemode-6/109695674.jpg",
			publishedAt: "2024-04-30T06:30:00Z",
			content:
				"According to Dr. Vikas Jain, Founder &amp; Director of Madhuban Kidney Care, New Delhi, Consume nutrient-dense foods low in salt and saturated fats to maintain kidney function.",
		},
		{
			source: {
				id: null,
				name: "The Indian Express",
			},
			author: "George Mathew",
			title:
				"Why RBI has advised banks to refund borrowers for overcharging on interest - The Indian Express",
			description:
				"In the case of repayment of loans during a month, some banks were charging interest for the entire month, rather than only for the period for which the loan was outstanding. RBI recently found banks following several other unfair practices.",
			url: "https://indianexpress.com/article/explained/explained-economics/rbi-banks-overcharging-interest-9298344/",
			urlToImage:
				"https://images.indianexpress.com/2024/04/2024-04-26T135638Z_923747232_RC2CE7AU03DQ_RTRMADP_3_INDIA-CENBANK-SMALL-FINANCE-BANKS.jpg",
			publishedAt: "2024-04-30T06:19:27Z",
			content:
				"The Reserve Bank of India (RBI) has come across instances of lenders resorting to certain unfair practices in charging of excess interest from borrowers. The RBI, through its supervisory teams, has a… [+3239 chars]",
		},
		{
			source: {
				id: null,
				name: "Hindustan Times",
			},
			author: "Vertika Kanaujia",
			title:
				"Columbia University: Protesters lay siege at Hamilton Hall linked to 1968 agitation, rename it ‘Hind’s Hall' - Hindustan Times",
			description:
				"Understand the significance of Hamilton Hall in Columbia University at protesters occupy it after talks with authorities failed.",
			url: "https://www.hindustantimes.com/world-news/us-news/columbia-university-protesters-lay-siege-at-hamilton-hall-linked-to-1968-agitation-after-talks-fail-101714455967791.html",
			urlToImage:
				"https://www.hindustantimes.com/ht-img/img/2024/04/30/1600x900/columbia_1714457671085_1714457696645.jpeg",
			publishedAt: "2024-04-30T06:07:50Z",
			content:
				"Chaos and anarchy have descended upon Columbia University after President Nemat Minouche Shafik refused to capitulate to protesters' demands and cracked down on ongoing protests. Columbia has stated … [+2405 chars]",
		},
		{
			source: {
				id: null,
				name: "Livemint",
			},
			author: "Gulam Jeelani",
			title:
				"BJP, allies won 100+ seats in first two phases of Lok Sabha elections: Amit Shah | Mint - Mint",
			description:
				"Home Minister Amit Shah’s statement comes two days after PM Modi continued his attack on the Opposition INDIA bloc, saying that the BJP-led National Democratic Alliance (NDA) is leading 2-0 after the voting for the first two phases of the Lok Sabha polls.",
			url: "https://www.livemint.com/politics/news/bjp-allies-won-100-seats-in-first-two-phases-of-lok-sabha-elections-amit-shah-11714454941274.html",
			urlToImage:
				"https://www.livemint.com/lm-img/img/2024/04/30/1600x900/PTI04-22-2024-000167B-0_1713861625022_1714455280175.jpg",
			publishedAt: "2024-04-30T05:50:03Z",
			content:
				"Union Home Minister Amit Shah told reporters in Guwahati on April 30 that the Bharatiya Janata Party (BJP) and its allies had emerged victorious on more than 100 seats in the crucial first two phases… [+2436 chars]",
		},
		{
			source: {
				id: null,
				name: "The Indian Express",
			},
			author: "Vinayakk Mohanarangan",
			title:
				"Uber Cup 2024 Live Updates: 15-year-old Tanvi impresses in defeat, tearful Anmol retires hurt as China win 5-0 - The Indian Express",
			description:
				"Uber Cup 2024 Live Score: In a Group A encounter, a young Indian squad takes on red-hot favourites China. Both teams have already qualified for the quarterfinals.",
			url: "https://indianexpress.com/article/sports/badminton/thomas-uber-cup-2024-live-updates-today-india-china-anmol-isharani-9297515/",
			urlToImage:
				"https://images.indianexpress.com/2024/04/Uber-Cup-India-vs-China-Live.jpg",
			publishedAt: "2024-04-30T05:31:03Z",
			content:
				"ANMOL KHARB loves a good one-liner, and doesn’t particularly care about traditional festivals if they come in the way of her badminton practice. On Diwali, she demanded to know from coach Kusum Singh… [+1324 chars]",
		},
		{
			source: {
				id: null,
				name: "Livelaw.in",
			},
			author: "LIVELAW NEWS NETWORK",
			title:
				"Arvind Kejriwal's Challenge To ED Arrest : Live Updates From Supreme Court - Live Law - Indian Legal News",
			description:
				"The Supreme Court will continue hearing today Delhi Chief Minister Arvind Kejriwal's petition challenging his arrest by the ED.  A bench of Justices Sanjiv Khanna and Dipankar Datta will hear the...",
			url: "https://www.livelaw.in/top-stories/arvind-kejriwals-challenge-to-ed-arrest-live-updates-from-supreme-court-256509",
			urlToImage:
				"https://www.livelaw.in/h-upload/2024/03/22/529800-live-updates-arvind-kejriwal-and-sc.webp",
			publishedAt: "2024-04-30T05:04:32Z",
			content:
				"The Supreme Court will continue hearing today Delhi Chief Minister Arvind Kejriwal's petition challenging his arrest by the ED. \r\nA bench of Justices Sanjiv Khanna and Dipankar Datta will hear the ma… [+105 chars]",
		},
		{
			source: {
				id: null,
				name: "News18",
			},
			author: "Titas Chowdhury",
			title:
				"Imtiaz Ali Reveals Chamkila Had a Child with Gurmail after Amarjot: 'Had to Cut the Scene' | Exclusive - News18",
			description:
				"Imtiaz Ali wanted to include more aspects of Chamkila-Gurmail's relationship in Amar Singh Chamkila. He reveals how he united Amarjot and Gurmail's families.",
			url: "https://www.news18.com/movies/imtiaz-ali-reveals-chamkila-had-a-child-with-gurmail-after-amarjot-had-to-cut-the-scene-exclusive-8871117.html",
			urlToImage:
				"https://images.news18.com/ibnlive/uploads/2024/04/fotojet-2024-04-29t222044.223-2024-04-e4f0ca4b0cf2cf6261d2dfe39129259a-16x9.jpg?impolicy=website&width=1200&height=675",
			publishedAt: "2024-04-30T04:37:34Z",
			content:
				"Even more than two weeks after its release on Netflix, Imtiaz Alis Amar Singh Chamkila continues to be a topic of conversation across social media. The film has not only met with a positive response … [+2756 chars]",
		},
		{
			source: {
				id: null,
				name: "Hindustan Times",
			},
			author: "HT Entertainment Desk",
			title:
				"Bhojpuri actor Amrita Pandey found dead after leaving cryptic message on WhatsApp - Hindustan Times",
			description:
				"A Bhojpuri actor named Amrita Pandey was found dead at her home in Bhagalpur, Bihar. She left her final note in the form of a WhatsApp status.",
			url: "https://www.hindustantimes.com/entertainment/others/bhojpuri-actor-amrita-pandey-found-dead-after-leaving-cryptic-message-on-whatsapp-101714448914419.html",
			urlToImage:
				"https://www.hindustantimes.com/ht-img/img/2024/04/30/1600x900/amrita_pandey_1714449022593_1714449090076.png",
			publishedAt: "2024-04-30T04:24:16Z",
			content:
				"Bhojpuri actor Amrita Pandey was found dead at her home in Bhagalpur, Bihar on April 27. The police suspect she died by suicide, as per an NDTV report.\r\nAmrita Pandey was found dead at her home in Bi… [+1424 chars]",
		},
	]
	constructor() {
		super()
		console.log("called a constructor from news component!!!")
		this.state = {
			articles: this.articles,
			loading: false,
		}
	}

	render() {
		return (
			<div className="container my-3 bg-light">
				<h2>NewsApp - Top headlines</h2>
				<div className="row">
					<div className="col-md-4">
						<NewsItem
							title="myTitle"
							description="myDescription"
							newsUrl="TODO"
							imageUrl="https://static.toiimg.com/thumb/msid-109708969,width-1070,height-580,imgsize-54758,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
						/>
					</div>
					<div className="col-md-4">
						<NewsItem title="myTitle" description="myDescription" />
					</div>
					<div className="col-md-4">
						<NewsItem title="myTitle" description="myDescription" />
					</div>
				</div>
			</div>
		)
	}
}

export default News
