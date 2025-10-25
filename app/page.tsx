import HeroSection from "./sections/hero";
import AboutUsSection from "./sections/about-us/about-us";
import ProcessSection from "./sections/process";
import ServicesSection from "./sections/services";
import FaqSection from "./sections/faq";
import FooterSection from "./sections/footer";
import ContactSection from "./sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ProcessSection />
      <ServicesSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}
