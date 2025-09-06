'use client';

import React from 'react';
// import Image from 'next/image';
// import data from './dataBrisbaneBadminton.json';
import CardCarousel from '../components/CardCarousel';
import { QRCodeSVG } from 'qrcode.react';
import { sportySectionTheme } from '../styles/sportyTheme';

const events = [
	{
		title: 'Badminton Night',
		date: ' ',
		description:
			'Join us for a casual night of badminton! Meet new people, play friendly matches, and enjoy snacks and drinks.',
		image:
			'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Socials/KRISHNA.JPG',
		link: '/contact',
	},
	{
		title: 'Adult Socials',
		date: 'Every Day',
		image:
			'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Socials/SOCIAL.jpg',
		description:
			'Enjoy a fun evening of badminton with fellow enthusiasts. All skill levels welcome, from beginners to advanced players. Great way to socialize and improve your game!',
		link: '/contact',
	},
	{
		title: 'Kids Socials',
		date: ' ',
		description:
			'A day for the entire family! Come for a friendly tournament, activities for all ages, and delicious food and beverages.',
		image:
			'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Socials/SOCIAL2.jpg',
		link: '/contact',
	},
	{
		title: 'AVI - ART',
		date: 'Sunday',
		description:'Graded socials for Advanced players. Players above C Grade are welcome to join.',
		image:
			'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Socials/SOCIALS.PNG',
		link: '/contact',
	},
	{
		title: 'Club Socials',
		date: '',
		description:"Club Socials are a great way to meet fellow members and enjoy some friendly competition.",
		image:
			'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Socials/fbwall.jpg',
		link: '/contact',
	},
];

const whatsappInviteUrl = 'https://chat.whatsapp.com/FGZOTERLPJAAQQcLj4S5bd?mode=ac_t'; // Replace with your actual invite link

export default function SocialsPage() {
	return (
	 <div className={sportySectionTheme.section.className + ' min-h-screen'} style={sportySectionTheme.section.style}>
		 {/* WhatsApp Group QR Card */}
		 <div className={sportySectionTheme.card.className + ' max-w-md mx-auto mt-10'} style={sportySectionTheme.card.style}>
			 <h2 className="text-2xl font-bold text-green-400 mb-4" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Join Our WhatsApp Group</h2>
			 <p className="text-white/90 mb-4 text-center" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
				 Scan the QR code below to join our club WhatsApp group for updates, events, and community chat!
			 </p>
			 <QRCodeSVG
				 value={whatsappInviteUrl}
				 size={150}
				 fgColor="#fff"
				 bgColor="#000"
				 className="mb-4"
			 />
			 <a
				 href={whatsappInviteUrl}
				 target="_blank"
				 rel="noopener noreferrer"
				 className={sportySectionTheme.sharpButton.className + ' mt-2'}
				 style={sportySectionTheme.sharpButton.style}
			 >
				 Join WhatsApp Group
			 </a>
		 </div>
		 <div className="w-full max-w-5xl mx-auto mt-16">
			 <CardCarousel events={events} />
		 </div>
	 </div>
 );
}
