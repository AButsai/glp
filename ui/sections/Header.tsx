import { LINK_QUIZ } from '@/constants/base-constants'
import Link from 'next/link'
import Container from '../components/Container'
import LinkQuiz from '../components/LinkQuiz'
import Logo from '../components/Logo'
import MobNavigate from '../components/MobNavigate'

const Header = () => {
	return (
		<header className='py-4'>
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
							href={LINK_QUIZ}
						>
							Pricing
						</Link>
					</nav>
					<LinkQuiz title='2-MINUTE ASSESSMENT' />
				</div>

				<div className='flex flex-1 items-center md:hidden'>
					<Logo />

					<div className='ml-auto flex items-center gap-2'>
						<LinkQuiz title='2-MINUTE ASSESSMENT' />

						<MobNavigate />
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
