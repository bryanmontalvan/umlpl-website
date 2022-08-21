import { AboutHero } from "../components/about-components/Hero";
import { FooterSocial } from "../components/Footer";
import { Nav } from "../components/NavBar";

export default function Home() {
    return (
      <>
        <Nav/>
        <AboutHero />
        <FooterSocial/>
      </>
    )
  }
  