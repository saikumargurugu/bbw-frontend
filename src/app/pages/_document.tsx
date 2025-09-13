import { Html, Head, Main, NextScript } from 'next/document';

// List of all image URLs from dataBrisbaneBadminton.json
const preloadImages = [
  // home.heroSlides
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/COURTS2.jpg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Home/HOME2.JPG",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Home/HOME3.JPG",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/TRAINING2.jpg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Home/HOME1.JPG",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Home/HOME2.JPG",
  // home.services
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/COURTS3.jpg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/CLUB/CLUB_WHITE.png",
  "https://images.unsplash.com/photo-1722003184213-b5dfa47e2476?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/TRAINING2.jpg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/SOCIAL.jpg",
  "https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/489956476_122149506584528399_5493119559582749710_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=68ep-g_6TsEQ7kNvwFn-Dsu&_nc_oc=AdnhvaV-JXsbOvT_t5d6k_bD4VwVTmSxxe7l2UrXSAsNryJ7kGFcO2HMg-YEgAd9MLE&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=dtjDd2Uni7bJ0wHhquxvlw&oh=00_AfTWOYj98hY463S4-sie-sCEpkwlUx6MuZPyAUb9yWSmjQ&oe=68931B84",
  // footer.ContactUs
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/Building.jpg",
  // ContactUs.images
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/Building.jpg",
  // Socials.images
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Socials/inviteSocials.jpeg",
  // acadamy.coaches
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Coaches/Pavan.jpeg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Coaches/Srinivas.jpeg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Coaches/AuthrLee.jpeg",
  "https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Coaches/Ankit.jpeg",
  // socials[]
  "https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical images for faster rendering */}
        {preloadImages.map((url, i) => (
          <link key={i} rel="preload" as="image" href={url} />
        ))}
         <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
