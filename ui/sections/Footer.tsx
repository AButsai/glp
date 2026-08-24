import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/Container'
import LinkQuiz from '../components/LinkQuiz'
import Logo from '../components/Logo'

const Footer = () => {
	return (
		<footer className='bg-white'>
			<div
				className='rounded-tl-[50px] rounded-tr-[50px]
						bg-linear-to-br
						from-[#DCF6EC]
						via-[#D3EDE3]
						to-[#C5E1D3]'
			>
				<div className='py-24'>
					<p className='text-center uppercase text-lg font-semibold'>
						get started
					</p>
					<h2 className='font-roboto text-[32px] font-bold leading-[1.1] tracking-[0.24px]  sm:text-[44px] lg:text-[60px] lg:leading-[60px] text-center md:w-2/3 mx-auto'>
						Ready to Stop Food Cravings? Get $200 OFF your prescription
						instantly!
					</h2>
					<p className='max-w-[560px] font-roboto text-[16px] leading-[1.5] text-[#4b5563] lg:text-[20px] lg:leading-[28px] mx-auto text-center mb-5 mt-5'>
						{
							"It's not cheating, it's science! Lose up to 15% of your body weight (1-2lbs per week) with medically supervised safe & effective treatment from the comfort of your home."
						}
					</p>
					<LinkQuiz
						title='Get started'
						className=' text-white rounded-4xl p-5 text-xl bg-[#0F7B5C] hover:bg-[#0f7b5cd0] lg:w-50 mx-auto block w-1/2'
					/>
				</div>
				<div className='border-t border-t-gray-400 border-b border-b-gray-400'>
					<Container className='py-12 grid grid-cols-1 md:grid-cols-6 gap-10 text-sm '>
						<Logo className=' md:col-span-1' />
						<div className='text-sm space-y-2 md:col-span-1'>
							<p className='font-medium text-inherit'>Links</p>
							<nav className='flex flex-col space-y-2'>
								<Link className='text-inherit' href={'#'}>
									Terms & Conditions
								</Link>
								<Link className='text-inherit' href={'#'}>
									Privacy Policy
								</Link>
								<Link className='text-inherit' href={'#'}>
									Refund Policy
								</Link>
								<Link className='text-inherit' href={'#'}>
									Contact Us
								</Link>
							</nav>
						</div>
						<div className='md:col-span-4 text-xs leading-snug'>
							<p className='mb-2'>
								* Based on the average weight loss in three 68-week clinical
								trials of patients without diabetes who reached and maintained a
								dose of 2.4 mg/week of GLP-1 treatment, along with a
								reduced-calorie diet and increased physical activity. Results
								may vary based on starting weight and program adherence.
							</p>
							<p className='mb-2'>
								Safety info: GLP-1 medications are used to treat obesity or
								overweight (with weight-related problems), along with diet and
								exercise. They may have serious side effects, including possible
								thyroid tumors. Do not use if you or your family have a history
								of a type of thyroid cancer called MTC or MEN 2.
							</p>
							<p className='mb-2'>
								These statements have not been evaluated by the FDA. This
								product is not intended to diagnose, treat, cure or prevent any
								disease.
							</p>
							<p className='mb-2'>
								+ Wegovy® is for weight loss. Ozempic® is for type 2 diabetes
								treatment but may be prescribed for weight loss. All trademarks
								and brand names belong to their respective owners.
							</p>
							<p className='mb-2'>
								Medical treatment is provided and approved by a licensed medical
								professional.
							</p>
						</div>
					</Container>
				</div>
				<div className='flex py-6 justify-center'>
					<div className='w-[73px] h-[79px]'>
						<Image src={'/legitscript.avif'} width={256} height={277} alt='' />
					</div>
				</div>
			</div>
			<div className='py-6 bg-[#0F7B5C]'>
				<p className='text-sm text-center text-white'>
					© 2026 VelmoRx - Modern Metabolic Medicine, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
