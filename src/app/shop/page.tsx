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
import Home from '@/app/pages/Home';


///folder shop to [[..slug]]/page.tsx
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const slugs = params.slug || [];
  console.log("Slugs:", slugs);

  // Handle root "/"
  if (slugs.length === 0) {
    return <Home />;
  }

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
    case '':
      return <Home />;
    case 'club':
      return <Club />;
    case 'contact':
      return <Contact />;
    case 'services':
      return <Services />;
    case 'court-hire':
      return <CourtHirePage />;
    case 'shop':
      console.log("Slugs:", slugs[1]);
      switch (slugs[1]) {
        case 'products':
          switch (slugs[2]) {
            case 'details':
              console.log("Slugs:", slugs[1]);
              const productId = slugs[3];
              return <ProductDetailPage productId={productId} />;
            default:
              return <ShopPage />;
      }
      default:
        return <ShopPage />;
    }
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
  return [
    { slug: [] }, // root "/"
    { slug: ["club"] },
    { slug: ["contact"] },
    { slug: ["services"] },
    { slug: ["court-hire"] },
    { slug: ["shop"] },
    { slug: ["academy"] },
    { slug: ["socials"] },
    { slug: ["sign-up"] },
    // Add dynamic paths as needed:
    { slug: ["shop", "products", "details"] },
    { slug: ["shop", "brands", "2"] },
  ];
}

// <<<<<<< working
// // export default function Page({ params }:any) {
// //   const slugs = params.slug || [];
// //   console.log("Slugs:", slugs);
  
// //   return <div>Welcome to the Badminton Club!</div>;
// // }
// =======
