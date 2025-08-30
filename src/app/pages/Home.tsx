'use client';

import React from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import data from './dataBrisbaneBadminton.json';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
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
									<h2
										className={bannerTitleClass.replace('font-extrabold', 'font-normal') + ' text-shadow-lg mb-6 text-center'}
										style={{ ...bannerTitleStyle, fontWeight: 'normal', textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
									>
										{about.title}
									</h2>
									<p
										className={bannerDescClass.replace('font-medium', 'font-normal') + ' text-center text-sm md:text-base'}
										style={{ ...bannerDescStyle, textAlign: 'center', width: '100%', maxWidth: 'none' }}
									>
										{about.description}
									</p>
								</div>

								{/* Why Choose Us */}
								<div
									className={sportySectionTheme.card.className.replace('font-extrabold', 'font-normal')}
									style={{ ...sportySectionTheme.card.style, fontWeight: 'normal', textAlign: 'justify' }}
								>
									<h2
										className={bannerTitleClass.replace('font-extrabold', 'font-normal') + ' text-shadow-lg mb-6 text-center'}
										style={{ ...bannerTitleStyle, fontWeight: 'normal', textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
									>
										{whyChoose.title}
									</h2>
									<ul className="list-disc pl-5 text-white">
										{whyChoose.points.map((point, index) => (
											<li key={index}>{point}</li>
										))}
									</ul>
									<div className="mt-6 text-white">
										<p><strong>Opening Hours:</strong> {whyChoose.openingHours}</p>
										<p><strong>Address:</strong> {whyChoose.address}</p>
										<p><strong>Bookings:</strong> <a href={whyChoose.bookingsUrl} className="text-cyan-400 underline">{whyChoose.bookingsUrl}</a></p>
										<p><strong>Email:</strong> <a href={`mailto:${whyChoose.email}`} className="text-cyan-400 underline">{whyChoose.email}</a></p>
									</div>
								</div>
							</div>
						</section>
			<ServicesSection services={services} />
		</div>
	);
}
