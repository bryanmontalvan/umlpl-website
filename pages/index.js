import { HeroContentUML } from "../components/Hero";
import { Nav } from "../components/NavBar";
import { ParallaxProvider } from 'react-scroll-parallax';
import { LeadGrid } from "../components/News";
import { Banner } from "../components/Parallax";
import { ContactUs } from "../components/ContactUs";
import { FooterSocial } from "../components/Footer";


// This is where all the website's components are called!
export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <Nav />
        <HeroContentUML />
        <LeadGrid />
        <Banner link="https://goriverhawks.com/images/2020/12/1/parallax2_bg.jpg" />
        <ContactUs />
        <Banner link="https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/uml.sidearmsports.com/images/responsive_2020/promo_bg.jpg" />
        <FooterSocial />
      </ParallaxProvider>
    </>
  )
}
