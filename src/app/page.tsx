import HeaderSection from "../app/components/HeaderSection/page"
import NavBarSection from "../app/components/NavBarSection/page"
import ContentSection from "./components/ContentSection/home";
import AboutSection from "./components/ContentSection/about";
import BooksSection from "./components/ContentSection/books";
import ContactSection from "./components/ContentSection/contact";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <NavBarSection />
      {/* <ContentSection /> */}
      {/* <AboutSection /> */}
      {/* <BooksSection /> */}
      <ContactSection />
    </>
  );
}
