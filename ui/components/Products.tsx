import { products } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'

const Products = () => {
	return (
		<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
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
				group
				relative
				block
				aspect-[1.25/1]
				overflow-hidden
				rounded-[28px]
				bg-white
				transition-transform
				duration-300
				ease-out
				hover:scale-[1.02]
				md:rounded-[32px]
			'
		>
			<div className='absolute left-6 right-6 top-6 z-20 md:left-10 md:right-10 md:top-8'>
				<h3 className='text-[28px] font-normal leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[34px] lg:text-[40px]'>
					{title}
				</h3>

				<p className='text-[28px] font-normal leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[34px] lg:text-[40px]'>
					{subtitle}
				</p>

				<div className='mt-6 h-px w-full bg-black/80' />
			</div>

			<div className='absolute inset-x-0 bottom-0 top-[34%]'>
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
					absolute
					bottom-10
					left-5
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
			</div>
		</Link>
	)
}

export default Products
