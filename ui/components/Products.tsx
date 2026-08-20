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
	image: string
	badge: string
	href: string
}

const ProductCard = ({ title, image, badge, href }: ProductCardProps) => {
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
