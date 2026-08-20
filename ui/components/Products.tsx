import { products } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'

const Products = () => {
	return (
		<div className='grid grid-cols-1 gap-5 md:grid-cols-2 max-w-[80%] w-full mx-auto text-center'>
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	)
}

interface ProductCardProps {
	title: string
	subtitle: string
	image: string
	badge: string
	href: string
}

const ProductCard = ({
	title,
	subtitle,
	image,
	badge,
	href,
}: ProductCardProps) => {
	return (
		<Link
			href={href}
			className='
			
				block
				px-10
			
				rounded-4xl
				bg-white
				transition-transform
				duration-300
				ease-out
				hover:scale-[1.02]
			'
		>
			{/* <div className=' left-6 right-6 top-6 z-20 md:left-10 md:right-10 md:top-8'>
				<h3 className='text-[28px] font-normal leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[34px] lg:text-[40px]'>
					{title}
				</h3>

				<p className='text-[28px] font-normal leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[34px] lg:text-[40px]'>
					{subtitle}
				</p>

				<div className='mt-6 h-px w-full bg-black/80' />
			</div>

			<div className=' inset-x-0 bottom-0 top-[34%]'>
				<Image
					src={image}
					alt={title}
					fill
					className='object-contain object-bottom transition-transform duration-300 group-hover:scale-[1.03]'
					sizes='(max-width: 768px) 100vw, 50vw'
				/>
			</div>

			<div
				className='
				
					z-30
					rounded-full
					bg-linear-to-r
					from-[#267889]
					to-[#37A99C]
					px-5
					py-2.5
					text-sm
					font-semibold
					text-white
					shadow-md

					sm:left-6
					sm:px-6
					sm:text-base
				'
			>
				{badge}
			</div> */}

			<div className='p-5 border-b border-b-slate-900/20'>
				<h3 className='text-[28px] font-normal leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[34px] lg:text-[40px]'>
					{title}
				</h3>
			</div>
			<div className='w-40 h-auto py-8 flex items-center justify-center mx-auto'>
				<Image src={image} width={822} height={1984} alt='' />
			</div>

			<div>
				<p className=' w-2/3 mx-auto mb-8  rounded-3xl bg-linear-to-br from-[#DCF6EC] via-[#D3EDE3] to-[#C5E1D3] text-xl py-2 font-semibold'>
					{badge}
				</p>
			</div>
		</Link>
	)
}

export default Products
