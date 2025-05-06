import React from 'react';
// app/[slug]/page.tsx
import Club from '@/app/pages/club';
import Contact from '@/app/pages/contact';
import Services from '@/app/pages/services';
import CourtHirePage from '@/app/pages/court-hire';
import AcademyPage from '@/app/pages/academy';
import SocialsPage from '@/app/pages/socials';



export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
      switch (slug) {
        case 'club':
            return <Club />;
        case 'contact':
            return <Contact />;
        case 'services':
            return <Services />;
        case 'court-hire':
            return <CourtHirePage />;
        case 'academy':
            return <AcademyPage />;
        case 'socials':
            return <SocialsPage />;
        default:
            <></>;
    }
  }
