'use client'
import Link from 'next/link'
import { useState } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from './Logo'

const MobNavigate = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}
	return (
		<>
			<button type='button' onClick={handleOpen} className='relative z-50'>
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
						<Link className='text-xl' onClick={handleOpen} href='#how'>
							How it works
						</Link>
						<Link className='text-xl' onClick={handleOpen} href='#reviews'>
							Reviews
						</Link>
						<Link className='text-xl' onClick={handleOpen} href='#faq'>
							FAQ`s
						</Link>
						<Link className='text-xl' onClick={handleOpen} href='#pricing'>
							Pricing
						</Link>
					</nav>
				</div>
			</div>
		</>
	)
}

export default MobNavigate
