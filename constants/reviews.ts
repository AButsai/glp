export interface Review {
	id: number
	title: string
	text: string
	author: string
	location: string
	rating: number
}

export const reviews: Review[] = [
	{
		id: 1,
		title: 'Truly Easy And Affordable',
		text: 'I completed the intake in just a few minutes and had my medication delivered to my door the same week. I’m down 38 lbs and still going. Embody made it truly easy and affordable.',
		author: 'Erin T.',
		location: 'Denver, CO',
		rating: 5,
	},
	{
		id: 2,
		title: 'Wish I Started Sooner',
		text: "I've lost over 50 pounds so far and my energy levels are higher than they've been in years. My sleep has improved, my joints feel better, and staying consistent no longer feels like a daily struggle.",
		author: 'Tim H.',
		location: 'Austin, TX',
		rating: 5,
	},
	{
		id: 3,
		title: 'Support Made The Difference',
		text: 'I tried to do it on my own for years. Having a provider guide me through this process made all the difference. I’m down 42 lbs and the support made it easier to stay on track.',
		author: 'Ashley C.',
		location: 'Charlotte, NC',
		rating: 5,
	},
	{
		id: 4,
		title: 'Steady Progress Every Month',
		text: 'Within the first few weeks, I noticed my cravings quiet down and my portions naturally got smaller. I’m down 24 lbs in 4 months, and the progress feels steady instead of extreme.',
		author: 'Melissa K.',
		location: 'Phoenix, AZ',
		rating: 5,
	},
	{
		id: 5,
		title: 'Easy To Stay Consistent',
		text: "I used to start strong and then fall off after a couple of weeks. With the regular check-ins and simple routine, it became much easier to stay consistent. I'm down 31 lbs.",
		author: 'Rachel D.',
		location: 'Orlando, FL',
		rating: 5,
	},
	{
		id: 6,
		title: 'Finally Seeing Results',
		text: 'After trying so many different approaches, this was the first time I felt like I had a plan I could actually follow. The process was simple and the results have been encouraging.',
		author: 'Sarah M.',
		location: 'Dallas, TX',
		rating: 5,
	},
	{
		id: 7,
		title: 'Simple From Day One',
		text: 'The online intake was straightforward and my provider explained everything clearly. I never felt overwhelmed and getting started was much easier than I expected.',
		author: 'Jessica L.',
		location: 'Tampa, FL',
		rating: 5,
	},
	{
		id: 8,
		title: 'More Energy Every Day',
		text: 'The biggest change for me has been my energy. I feel better throughout the day, my appetite feels much more manageable, and I finally feel like I am making real progress.',
		author: 'Lauren B.',
		location: 'Seattle, WA',
		rating: 5,
	},
	{
		id: 9,
		title: 'Exactly What I Needed',
		text: 'Having guidance and accountability made such a difference. Everything was clearly explained and I always knew what the next step was.',
		author: 'Michael R.',
		location: 'Chicago, IL',
		rating: 5,
	},
	{
		id: 10,
		title: 'The Process Was So Easy',
		text: 'I was surprised by how easy everything was. From the consultation to delivery, the whole experience felt simple, professional, and convenient.',
		author: 'Nicole P.',
		location: 'San Diego, CA',
		rating: 5,
	},
]
