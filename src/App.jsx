import "./App.css";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import Choose from "./components/choose/Choose";
import Stats from "./components/stats/Stats";
import Gallery from "./components/gallery/Gallery";
import Offer from "./components/offer/Offer";
import Chefs from "./components/chef/Chefs";
import Reservation from "./components/reservation/Reservation";
import Testimonials from "./components/testimonial/Testimonials";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Features></Features>
      <Menu></Menu>
      <Choose></Choose>
      <Stats></Stats>
      <Gallery></Gallery>
      <Offer></Offer>
      <Chefs></Chefs>
      <Reservation></Reservation>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
