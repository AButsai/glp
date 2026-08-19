export type VideoSourceType = 'direct' | 'youtube'

export interface VideoTestimonial {
	id: number
	title: string
	videoUrl: string
	type: VideoSourceType
	poster?: string
}

export const videoTestimonials: VideoTestimonial[] = [
	{
		id: 1,
		title: 'Customer story 1',
		type: 'youtube',
		videoUrl: 'https://www.youtube.com/shorts/0qmjL7f-Tc4',
	},
	{
		id: 2,
		title: 'Customer story 2',
		type: 'youtube',
		videoUrl: 'https://www.youtube.com/shorts/0qmjL7f-Tc4',
	},
	{
		id: 3,
		title: 'Customer story 3',
		type: 'youtube',
		videoUrl: 'https://www.youtube.com/shorts/0qmjL7f-Tc4',
	},
	{
		id: 4,
		title: 'Customer story 4',
		type: 'youtube',
		videoUrl: 'https://www.youtube.com/shorts/0qmjL7f-Tc4',
	},
	{
		id: 5,
		title: 'Customer story 5',
		type: 'youtube',
		videoUrl: 'https://www.youtube.com/shorts/0qmjL7f-Tc4',
	},
]
