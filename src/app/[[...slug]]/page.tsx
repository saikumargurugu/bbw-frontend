import React from 'react';
import Club from '@/app/pages/club';
import Contact from '@/app/pages/contact';
import Services from '@/app/pages/services';
import CourtHirePage from '@/app/pages/court-hire';
import AcademyPage from '@/app/pages/academy';
import SocialsPage from '@/app/pages/socials';
import SignUp from '../pages/signUp';
import ShopPage from '@/app/pages/shop/pages/index';
import ProductDetailPage from '../pages/shop/products/details/page';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }:any) {
  const slugs = params.slug || [];
  console.log("Slugs:", slugs);
  // Handle /shop/products/1/details
  if (
    slugs[0] === 'shop' &&
    slugs[1] === 'products' &&
    slugs[3] === 'details'
  ) {
    const productId = slugs[2];
    return <ProductDetailPage productId={productId} />;
  }

  // Handle top-level routes
  switch (slugs[0]) {
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
      return <div>404 Not Found</div>;
  }
}

export async function generateStaticParams() {
  // Return an array of all possible params for this route
  // Example: [{ slug: ["about"] }, { slug: ["contact"] }]
  return [
    { slug: ["about"] },
    { slug: ["contact"] },
    // Add all other static paths you want to export
  ];
}
