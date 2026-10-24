import React from "react";
import OrbitDeliveryHero from "../components/ui/orbit-delivery-hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Certificates from "../components/Certificate/certificate";

function Home() {
  return (
    <>
      <OrbitDeliveryHero />
      <Certificates />
      <Projects />
      <About />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
