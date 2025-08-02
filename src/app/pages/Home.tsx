'use client';

import React from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import data from './dataBrisbaneBadminton.json';


const services = data.home.services;
export const HeroData = data.home.heroSlides[0]
export default function Home() {
	return (
		<div>
			<ServicesSection services={services} />
		</div>
	);
}
