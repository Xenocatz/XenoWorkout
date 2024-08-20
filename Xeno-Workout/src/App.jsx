import NavBar from "./component/layout/navbar";
import HeroSection from "./component/layout/hero";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className=" h-screen bg-gradient-to-tr from-[#136a8b] via-[#195771] to-[#d9e0a4]">
        <HeroSection />
      </div>
    </>
  );
}

export default HomePage;
