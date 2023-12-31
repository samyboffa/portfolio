import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SecondHeader from "../Components/SecondHeader";
import About from "../Components/About";
import Skills from "../Components/Skills/Skills";
import ProjectList from "../Components/Projects/ProjectList";
import ContactIcon from "../Components/Common/ContactIcon";
import Footer from "../Components/Footer";
import Script from "next/script";
import Seo from "../Components/Seo";

export default function Home() {
  return (
    <div>
      <Seo />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N1B55606JS"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N1B55606JS');`}
      </Script>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MNXQKSF');
          `}
      </Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MNXQKSF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Header />
      <Hero />
      <div className="bg-dark">
        <ContactIcon />
        <SecondHeader />
        <About />
        <ProjectList />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
