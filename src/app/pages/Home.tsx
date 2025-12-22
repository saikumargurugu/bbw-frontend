'use client';

import React from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import data from './dataBrisbaneBadminton.json';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
import { useRouter } from 'next/navigation';
import AboutTiles from '../components/tiles/AboutTiles';
import Heading from '../components/Heading';
import GetInvolvedTiles from '../components/tiles/GetInvolvedTiles';

// Font styles copied directly from Banner.tsx for sporty look
const bannerTitleClass = "text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl font-sans uppercase";
const bannerTitleStyle = { letterSpacing: '0.04em', fontFamily: 'Oswald, Montserrat, Arial, sans-serif' };
const bannerDescClass = "text-white mb-6 max-w-2xl text-lg md:text-2xl drop-shadow font-medium font-sans";
const bannerDescStyle = { fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.06em', lineHeight: 1.6 };

const services = data.home.services;
export const HeroData = data.home.heroSlides[0];
const about = data.home.about;
const whyChoose = data.whyChoose;
export default function Home() {
	const router = useRouter();

	return (
		<div>
			{/* About Us and Why Choose Us Section */}
			<section
				className={sportySectionTheme.section.className + ' my-5'}
				style={sportySectionTheme.section.style}
			>
				{/* Angled red accent background for sporty look */}
				<div className={sportySectionTheme.accent.className} style={sportySectionTheme.accent.style} />
				<div
					className="w-full px-2 sm:px-8 mx-auto flex flex-col justify-center z-10"
					style={{ maxWidth: '100%' }}
				>
					{/* About Us */}
					<div
						className={sportySectionTheme.card.className.replace('font-extrabold', 'font-normal')}
						style={{ ...sportySectionTheme.card.style, fontWeight: 'normal', textAlign: 'justify', marginBottom: '2rem' }}
					>
						<Heading title={about.title} />
						<AboutTiles />
						<p
							className={bannerDescClass.replace('font-medium', 'font-normal') + ' text-center text-sm md:text-base'}
							style={{ ...bannerDescStyle, textAlign: 'center', width: '100%', maxWidth: 'none' }}
						>
							{about.description}
						</p>
						<div className="flex flex-wrap justify-center gap-4 mt-6">
							{about.buttons.map((button, index) => (
								<button
									key={index}
									className={sportySectionTheme.sharpButton.className}
									style={sportySectionTheme.sharpButton.style}
									onClick={() => {
										if (button.newTab) {
											window.open(button.url, '_blank');
										} else {
											router.push(button.url);
										}
									}}
								>
									{button.label}
								</button>
							))}
						</div>
					</div>
					{/* will need to use this in future */}
					{/* <div
						className={sportySectionTheme.card.className.replace('font-extrabold', 'font-normal') + ' flex flex-col items-center text-center'}
						style={{ ...sportySectionTheme.card.style, fontWeight: 'normal', textAlign: 'center', marginBottom: '2rem' }}
					>
						<Heading title='Get Involved With Us' />
						<GetInvolvedTiles />
					</div> */}
				</div>
			</section>
			<ServicesSection services={services} />
		</div>
	);
}
