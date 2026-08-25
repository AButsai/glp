'use client'
import { LINK_QUIZ } from '@/constants/base-constants'
import Link from 'next/link'
import { useState } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import LinkQuiz from './LinkQuiz'
import Logo from './Logo'

const MobNavigate = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}
	return (
		<>
			<button
				type='button'
				onClick={handleOpen}
				className={` z-50 ${open ? 'fixed top-7 right-5' : 'relative'}`}
			>
				{open ? (
					<RiCloseLargeFill className='size-6' />
				) : (
					<RxHamburgerMenu className='size-6' />
				)}
			</button>

			<div
				className={`fixed inset-0 z-40 h-full w-full bg-linear-to-br from-[#DCF6EC] via-[#D3EDE3] to-[#C5E1D3]  transition-transform duration-300 ease-in-out p-5 ${
					open ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<Logo className=' mb-10' />
				<div className='mt-10'>
					<nav className='flex gap-3 flex-col '>
						<Link
							className='text-sm font-medium text-[#374151] hover:text-accentColor1 transition-colors cursor-pointer'
							onClick={handleOpen}
							href='#how'
						>
							How it works
						</Link>
						<Link
							className='text-sm font-medium text-[#374151] hover:text-accentColor1 transition-colors cursor-pointer'
							onClick={handleOpen}
							href='#reviews'
						>
							Reviews
						</Link>
						<Link
							className='text-sm font-medium text-[#374151] hover:text-accentColor1 transition-colors cursor-pointer'
							onClick={handleOpen}
							href='#faq'
						>
							FAQ`s
						</Link>
						<Link
							className='text-sm font-medium text-[#374151] hover:text-accentColor1 transition-colors cursor-pointer'
							onClick={handleOpen}
							href={LINK_QUIZ}
						>
							Pricing
						</Link>
					</nav>
				</div>

				<LinkQuiz
					title='2-MINUTE ASSESSMENT'
					className='flex w-full min-h-[52px] items-center justify-center rounded-full bg-[#0f7b5c] px-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#0c6048] active:scale-[0.99] mt-5'
				/>
			</div>
		</>
	)
}

export default MobNavigate
