'use client'

import type { VideoTestimonial } from '@/constants/video-testimonials'
import { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

interface Props {
	item: VideoTestimonial
	active: boolean
	onPlay: () => void
}

interface DirectVideoPlayerProps {
	item: VideoTestimonial
}

const getYoutubeId = (url: string) => {
	try {
		const parsedUrl = new URL(url)

		if (parsedUrl.hostname.includes('youtu.be')) {
			return parsedUrl.pathname.slice(1)
		}

		if (parsedUrl.pathname.startsWith('/shorts/')) {
			return parsedUrl.pathname.split('/shorts/')[1]
		}

		if (parsedUrl.pathname.startsWith('/embed/')) {
			return parsedUrl.pathname.split('/embed/')[1]
		}

		return parsedUrl.searchParams.get('v')
	} catch {
		return null
	}
}

const getVimeoId = (url: string) => {
	try {
		const parsedUrl = new URL(url)

		const parts = parsedUrl.pathname.split('/').filter(Boolean)

		return parts.at(-1) ?? null
	} catch {
		return null
	}
}

const getYoutubeThumbnail = (url: string) => {
	const id = getYoutubeId(url)

	if (!id) return null

	return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

const DirectVideoPlayer = ({ item }: DirectVideoPlayerProps) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const toggleVideo = async () => {
		const video = videoRef.current

		if (!video) return

		try {
			if (video.paused) {
				await video.play()
			} else {
				video.pause()
			}
		} catch (error) {
			console.error('Video playback error:', error)
		}
	}

	return (
		<div className='relative h-full w-full overflow-hidden bg-black'>
			<video
				ref={videoRef}
				src={item.videoUrl}
				poster={item.poster}
				autoPlay
				playsInline
				preload='metadata'
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={() => setIsPlaying(false)}
				className='h-full w-full object-cover'
			/>

			<button
				type='button'
				onClick={toggleVideo}
				aria-label={isPlaying ? `Pause ${item.title}` : `Play ${item.title}`}
				className='absolute inset-0 z-10 touch-pan-x'
			/>

			{!isPlaying && (
				<span className='pointer-events-none absolute left-1/2 top-1/2 z-20 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-black/75 text-white'>
					<FaPlay className='ml-1 size-6' />
				</span>
			)}

			{isPlaying && (
				<button
					type='button'
					onClick={event => {
						event.stopPropagation()
						toggleVideo()
					}}
					aria-label={`Pause ${item.title}`}
					className='absolute bottom-4 left-4 z-30 flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm'
				>
					<FaPause className='size-4' />
				</button>
			)}
		</div>
	)
}

const VideoPlayer = ({ item, active, onPlay }: Props) => {
	const youtubeThumbnail =
		item.type === 'youtube' ? getYoutubeThumbnail(item.videoUrl) : null

	const poster = item.poster || youtubeThumbnail

	if (!active) {
		return (
			<button
				type='button'
				onClick={onPlay}
				aria-label={`Play ${item.title}`}
				className='group relative block h-full w-full overflow-hidden bg-neutral-900 touch-pan-x'
			>
				{poster && (
					<div
						className='absolute inset-0 bg-cover bg-center'
						style={{
							backgroundImage: `url("${poster}")`,
						}}
					/>
				)}

				<div className='absolute inset-0 bg-black/10 transition group-hover:bg-black/20' />

				<span className='absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-black/75 text-white transition duration-300 group-hover:scale-105 group-hover:bg-black'>
					<FaPlay className='ml-1 size-6' />
				</span>
			</button>
		)
	}

	if (item.type === 'direct') {
		return <DirectVideoPlayer item={item} />
	}

	if (item.type === 'youtube') {
		const id = getYoutubeId(item.videoUrl)

		if (!id) return null

		return (
			<iframe
				src={`https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
				title={item.title}
				className='h-full w-full border-0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			/>
		)
	}

	if (item.type === 'vimeo') {
		const id = getVimeoId(item.videoUrl)

		if (!id) return null

		return (
			<iframe
				src={`https://player.vimeo.com/video/${id}?autoplay=1&playsinline=1`}
				title={item.title}
				className='h-full w-full border-0'
				allow='autoplay; fullscreen; picture-in-picture'
				allowFullScreen
			/>
		)
	}

	if (item.type === 'embed') {
		return (
			<iframe
				src={item.videoUrl}
				title={item.title}
				className='h-full w-full border-0'
				allow='autoplay; fullscreen; picture-in-picture'
				allowFullScreen
			/>
		)
	}

	return null
}

export default VideoPlayer
