import HeroSection16 from "./hero";
import Footer16 from "./footer";
const Main = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div>
      {isMobile && <div className="w-full bg-black text-white">Please use a desktop to view this page.</div>}
      <HeroSection16 />
      <br />
      <br />
      <br />
      <br />
      <Footer16 />
    </div>
  );
};

export default Main;
