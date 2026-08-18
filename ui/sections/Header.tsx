import Link from 'next/link'
import Container from '../components/Container'
import Logo from '../components/Logo'
import MobNavigate from '../components/MobNavigate'

const Header = () => {
	return (
		<header className='py-4 shadow-md bg-white'>
			<Container className='flex items-center justify-between'>
				<div className='hidden md:flex justify-between flex-1'>
					<Logo />

					<nav className='flex items-center gap-3'>
						<Link
							className='transition duration-300 hover:text-[#0f7b5c]'
							href='#how'
						>
							How it works
						</Link>
						<Link
							className='transition duration-300 hover:text-[#0f7b5c]'
							href='#reviews'
						>
							Reviews
						</Link>
						<Link
							className='transition duration-300 hover:text-[#0f7b5c]'
							href='#faq'
						>
							FAQ`s
						</Link>
						<Link
							className='transition duration-300 hover:text-[#0f7b5c]'
							href='#pricing'
						>
							Pricing
						</Link>
					</nav>
					<Link
						href='https://joinem.co/pages/intake#howitworks'
						className='py-1 px-3 bg-[#0F7B5C] text-center text-white rounded-xl'
					>
						2-MINUTE ASSESSMENT
					</Link>
				</div>

				<div className='flex flex-1 items-center md:hidden'>
					<Logo />

					<div className='ml-auto flex items-center gap-2'>
						<Link
							href='https://joinem.co/pages/intake#howitworks'
							className='rounded-2xl bg-[#0F7B5C] px-3 py-1 text-center text-white'
						>
							2-MINUTE ASSESSMENT
						</Link>

						<MobNavigate />
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
