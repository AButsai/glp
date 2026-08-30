import { products } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'

const Products = () => {
	return (
		<div className='mx-auto grid w-full max-w-[814px] grid-cols-2 items-stretch gap-3 sm:gap-5'>
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
	price: string
}

const ProductCard = ({
	title,
	subtitle,
	image,
	badge,
	href,
	price,
}: ProductCardProps) => {
	return (
		<Link
			href={href}
			className='group flex h-full w-full flex-col rounded-3xl md:p-4 md:shadow-lg md:inset-shadow-xs transition-transform duration-300 ease-out hover:scale-[1.02]'
		>
			<div className='flex aspect-square w-full shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-b from-[#DCF6EC] via-[#D3EDE3] to-[#C5E1D3]'>
				<div className='flex h-full w-full items-center justify-center p-3 md:p-6'>
					<Image
						src={image}
						width={130}
						height={314}
						alt={title}
						className='h-auto max-h-full w-auto max-w-[130px] object-contain'
					/>
				</div>
			</div>

			<div className='flex flex-1 flex-col px-1 pt-4 text-left'>
				<h3 className='font-roboto text-[20px] font-semibold leading-tight text-[#0F7B5C] sm:text-[26px] lg:text-[32px]'>
					{title}
				</h3>

				<p className='mt-1 font-roboto text-[12px] leading-[18px] text-[#0F7B5C97] lg:text-[13.5px] lg:leading-[20.93px]'>
					{subtitle}
				</p>

				<p
					className='mt-auto shrink-0 whitespace-nowrap pt-2 font-roboto text-[16px] leading-[24px] text-[#0F7B5C] lg:text-right lg:text-[18px] lg:leading-[28px] md:font-semibold'
					dangerouslySetInnerHTML={{ __html: price }}
				/>
			</div>

			<div className='mt-3 shrink-0'>
				<p className='flex w-full items-center justify-center rounded-full bg-[#0F7B5C] px-4 py-3 font-roboto text-[15px] font-semibold leading-[20px] text-white transition-[filter] group-hover:brightness-110'>
					{badge}
				</p>
			</div>
		</Link>
	)
}

export default Products
