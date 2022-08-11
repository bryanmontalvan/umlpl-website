import { Nav } from "../components/NavBar";
import { FooterSocial } from "../components/Footer";
// Home-page spcific components
import { HeroContentUML } from "../components/homepage-components/Hero";
import { CardsGrid } from "../components/homepage-components/News";
import { ContactUs } from "../components/homepage-components/ContactUs";
// Parallax Components
import { ParallaxProvider } from 'react-scroll-parallax';
import { Banner } from "../components/Parallax";


// This is where all the website's components are called!
export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <Nav />
        <HeroContentUML />
        <CardsGrid />
        <Banner link="https://goriverhawks.com/images/2020/12/1/parallax2_bg.jpg" />
        <ContactUs />
        <Banner link="https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/uml.sidearmsports.com/images/responsive_2020/promo_bg.jpg" />
        <FooterSocial />
      </ParallaxProvider>
    </>
  )
}
