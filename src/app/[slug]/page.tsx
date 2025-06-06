import React from 'react';
// app/[slug]/page.tsx
import Club from '@/app/pages/club';
import Contact from '@/app/pages/contact';
import Services from '@/app/pages/services';
import CourtHirePage from '@/app/pages/court-hire';
import AcademyPage from '@/app/pages/academy';
import SocialsPage from '@/app/pages/socials';
import SignUp from '../pages/signUp';
import ShopPage from '@/app/pages/shop/pages/index'; // Import the Shop page



export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
      switch (slug) {
        case 'club':
            return <Club />;
        case 'contact':
            return <Contact />;
        case 'services':
            return <Services />;
        case 'court-hire':
            return <CourtHirePage />;
        case 'shop':
            return <ShopPage />;
        case 'academy':
            return <AcademyPage />;
        case 'socials':
            return <SocialsPage />;
        case 'sign-up':
            return <SignUp />;
        default:
            <></>;
    }
  }
