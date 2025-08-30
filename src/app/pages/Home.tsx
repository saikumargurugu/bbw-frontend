'use client';

import React, { useState } from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import data from './dataBrisbaneBadminton.json';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
// Font styles copied directly from Banner.tsx for sporty look
const bannerTitleClass = "text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl font-sans uppercase";
const bannerTitleStyle = { letterSpacing: '0.04em', fontFamily: 'Oswald, Montserrat, Arial, sans-serif' };
const bannerDescClass = "text-white mb-6 max-w-2xl text-lg md:text-2xl drop-shadow font-medium font-sans";
const bannerDescStyle = { fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.06em', lineHeight: 1.6 };
const bannerBtnClass = "bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-md font-bold uppercase tracking-wider shadow-lg text-base md:text-lg border-2 border-red-700 transition-all duration-200";
const bannerBtnStyle = { fontFamily: 'Oswald, Montserrat, Arial, sans-serif', letterSpacing: '0.08em' };


const services = data.home.services;
export const HeroData = data.home.heroSlides[0];
const about = data.home.about;
export default function Home() {
	const [aboutOpen, setAboutOpen] = useState(false);
	// Use a media query to detect mobile
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	return (
		<div>
						{/* About Us Section */}
						<section
							className={sportySectionTheme.section.className + ' my-12'}
							style={sportySectionTheme.section.style}
						>
							{/* Angled red accent background for sporty look */}
							<div className={sportySectionTheme.accent.className} style={sportySectionTheme.accent.style} />
							<div
								className="w-full px-2 sm:px-8 mx-auto flex justify-center z-10"
								style={{ maxWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : '900px' }}
							>
								<div className={sportySectionTheme.card.className}
									style={sportySectionTheme.card.style}
								>
									<h2
										className={bannerTitleClass + ' text-shadow-lg mb-6'}
										style={{ ...bannerTitleStyle, textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
									>
										{about.title}
									</h2>
									{/* Collapsible text wrapper for mobile */}
									<div className="relative w-full">
										{/* Collapsed: show only first paragraph. Expanded: show all. */}
										{isMobile && !aboutOpen ? (
											<>
												<p
													className={bannerDescClass + ' text-center'}
													style={bannerDescStyle}
												>
													{about.description}
												</p>
												<div className="mt-6 flex justify-center">
													<button
														className={bannerBtnClass}
														style={bannerBtnStyle}
														onClick={() => setAboutOpen(true)}
													>
														Read More
													</button>
												</div>
											</>
										) : (
											<>
												<p
													className={bannerDescClass + ' text-center'}
													style={bannerDescStyle}
												>
													{about.description}
												</p>
												{/* You can add more details here if you expand the JSON structure in the future */}
												{isMobile && (
													<div className="mt-6 flex justify-center">
														<button
															className={bannerBtnClass}
															style={bannerBtnStyle}
															onClick={() => setAboutOpen(false)}
														>
															Show Less
														</button>
													</div>
												)}
											</>
										)}
									</div>
								</div>
							</div>
						</section>
			<ServicesSection services={services} />
		</div>
	);
}
