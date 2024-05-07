import HeroSection from "./Hero";
ServicesPage
// import TechnologiesCarousel from "./ServiceCarousel"
import Link from "next/link";
import ServicesPage from "./Services";
const HomePage = () => {
  return (
    <div className="flex flex-col item-center justify-center ">
        <div className="flex flex-row justify-center bg-indigo-600 px-4 py-3 text-white ">
          <p className="text-center text-sm font-medium mx-2">
            <Link href="#" className="inline-block underlinepz-2"> Have a Project in mind?</Link>
          </p>
          <p className="text-center text-sm font-medium mx-2">U.S. & Canada +1 (514)-638-2519</p>
        </div>
      <HeroSection />
      <ServicesPage />
    </div>
  );
};

export default HomePage;
