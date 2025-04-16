import HeaderSection from "../app/components/HeaderSection/page"
import NavBarSection from "../app/components/NavBarSection/page"
import FooterSection from "./components/FooterSection/page";
import CarroselSection from "./components/CarroselSection/page";
export default function Home() {
  return (
    <>
      <HeaderSection />
      <CarroselSection />
      <NavBarSection />
      <FooterSection />
    </>
  );
}
