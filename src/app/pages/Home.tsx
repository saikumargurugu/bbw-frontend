'use client';

import React, { useState } from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import data from './dataBrisbaneBadminton.json';


const services = data.home.services;
export const HeroData = data.home.heroSlides[0]
export default function Home() {
	const [aboutOpen, setAboutOpen] = useState(false);
	// Use a media query to detect mobile
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	return (
		<div>
			{/* About Us Section */}
			<section
				className="w-full my-8 px-0 py-12 bg-black flex flex-col items-center animate-fadeIn"
				style={{ animation: 'fadeIn 1.2s ease' }}
			>
				<style>{`
					@keyframes fadeIn {
						from { opacity: 0; transform: translateY(40px); }
						to { opacity: 1; transform: translateY(0); }
					}
				`}</style>
						<div
							className="w-full px-2 sm:px-6 mx-auto"
							style={{ maxWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : '75%' }}
						>
					<h2 className="text-3xl font-bold mb-4 text-white text-center">About Us</h2>
					{/* Collapsible text wrapper for mobile */}
								<div className="relative">
									{/* Collapsed: show only first paragraph. Expanded: show all. */}
									{isMobile && !aboutOpen ? (
										<>
											<p className="text-gray-200 mb-4 text-lg text-center">
												Our state-of-the-art facility is certified to host Badminton World Federation (BWF) international tournaments. 
												Home to over 200 active members and trainees, we are a proud Queensland Badminton Association (QBA) state tournament venue and the official training base for elite athletes in the Queensland Junior State Team.
											</p>
											   <div className="mt-6 flex justify-center">
												   <button
													   className="bg-gray-800 text-white px-4 py-1 rounded shadow"
													   onClick={() => setAboutOpen(true)}
												   >
													   Read More
												   </button>
											   </div>
										</>
									) : (
										<>
											<p className="text-gray-200 mb-4 text-lg text-center">
												Our state-of-the-art facility is certified to host Badminton World Federation (BWF) international tournaments. 
												Home to over 200 active members and trainees, we are a proud Queensland Badminton Association (QBA) state tournament venue and the official training base for elite athletes in the Queensland Junior State Team.
											</p>
											<p className="text-gray-300 mb-4 text-center">
												We regularly host community, linguistic, and social group events, fostering an inclusive and vibrant badminton community for all.
											</p>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
												<div>
													<h3 className="text-xl font-semibold text-white mb-2">Academy</h3>
													<p className="text-gray-200">
														Our academy operates as both a community sports provider and an elite junior athlete development centre, with over 150 active members ranging from complete beginners to national-level competitors.
													</p>
												</div>
												<div>
													<h3 className="text-xl font-semibold text-white mb-2">Club</h3>
													<p className="text-gray-200">
														South Brisbane Badminton Inc. is a fully incorporated not-for-profit association, officially registered under Badminton Australia and the QBA, with over 150 active club members.
													</p>
												</div>
												<div>
													<h3 className="text-xl font-semibold text-white mb-2">Daily Badminton Social</h3>
													<p className="text-gray-200">
														We host regular social play sessions, fostering community engagement and active participation for all age groups.
													</p>
												</div>
											</div>
											{isMobile && (
												   <div className="mt-6 flex justify-center">
													   <button
														   className="bg-gray-800 text-white px-4 py-1 rounded shadow text-sm"
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
			</section>
			<ServicesSection services={services} />
		</div>
	);
}
