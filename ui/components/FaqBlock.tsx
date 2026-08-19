'use client'

import type { FaqContentBlock, FaqItem } from '@/constants/questions'
import Image from 'next/image'
import { useState, type FC } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface Props {
	items: FaqItem[]
	defaultOpenIndex?: number | null
}

const FaqBlock: FC<Props> = ({ items, defaultOpenIndex = null }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

	const handleToggle = (index: number) => {
		setOpenIndex(current => (current === index ? null : index))
	}

	return (
		<ul className='flex w-full flex-col gap-4 md:gap-5 mx-auto max-w-[976px]'>
			{items.map((item, index) => {
				const isOpen = openIndex === index

				return (
					<li
						key={item.id}
						className='overflow-hidden rounded-xl border border-gray-300 bg-white'
					>
						<button
							type='button'
							onClick={() => handleToggle(index)}
							aria-expanded={isOpen}
							aria-controls={`faq-answer-${item.id}`}
							className='flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 md:gap-6 md:px-8'
						>
							<div className='relative size-8 shrink-0 overflow-hidden rounded-full'>
								<Image
									src={item.image}
									fill
									alt=''
									className='object-cover'
									sizes='32px'
								/>
							</div>

							<h3 className='min-w-0 flex-1 text-base font-semibold leading-tight tracking-[-0.02em] text-[#111827] sm:text-lg md:text-xl lg:text-2xl'>
								{item.question}
							</h3>

							<span className='ml-auto flex size-8 shrink-0 items-center justify-center text-[#667085] md:size-10'>
								{isOpen ? (
									<FiMinus
										aria-hidden='true'
										className='size-6 stroke-[3] md:size-7'
									/>
								) : (
									<FiPlus
										aria-hidden='true'
										className='size-6 stroke-[3] md:size-7'
									/>
								)}
							</span>
						</button>

						<div
							id={`faq-answer-${item.id}`}
							className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
								isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
							}`}
						>
							<div className='overflow-hidden'>
								<div className='flex gap-3 px-4 pb-5 sm:gap-4 sm:px-6 sm:pb-6 md:gap-6 md:px-8 md:pb-8'>
									<div className='relative mt-1 size-9 shrink-0 overflow-hidden rounded-full sm:size-10 md:size-12'>
										<Image
											src='/brand-peop.png'
											fill
											alt=''
											className='object-contain'
											sizes='48px'
										/>
									</div>

									<div className='min-w-0 flex-1'>
										<div className='max-w-[1400px] space-y-4 text-sm font-normal leading-[1.55] text-[#344054] sm:text-base md:space-y-5 md:text-lg md:leading-[1.6]'>
											{item.content.map((block, blockIndex) => (
												<FaqContent key={blockIndex} block={block} />
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

interface FaqContentProps {
	block: FaqContentBlock
}

const FaqContent: FC<FaqContentProps> = ({ block }) => {
	switch (block.type) {
		case 'paragraph':
			return <p>{block.text}</p>

		case 'subtitle':
			return <p className='font-medium text-[#344054]'>{block.text}</p>

		case 'ordered-list':
			return (
				<ol className='list-decimal space-y-1 pl-5 sm:pl-6'>
					{block.items.map((item, index) => (
						<li key={`${item}-${index}`} className='pl-1'>
							{item}
						</li>
					))}
				</ol>
			)

		case 'unordered-list':
			return (
				<ul className='list-disc space-y-1.5 pl-5 sm:pl-6'>
					{block.items.map((item, index) => (
						<li key={`${item}-${index}`} className='pl-1'>
							{item}
						</li>
					))}
				</ul>
			)

		case 'note':
			return <p className='pt-1 font-normal text-[#344054]'>{block.text}</p>

		default:
			return null
	}
}

export default FaqBlock
