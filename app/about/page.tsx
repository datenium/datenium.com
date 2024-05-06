import Head from "next/head";
import TeamPage from "../component/Teams";
import Locations from "../component/Offices";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-8 ">
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Your project is carried out by passionate developers</h2>
                <p className="mt-6 text-gray-600"> Datenium is a leading-edge software company dedicated to
                  revolutionizing industries through the power of artificial
                  intelligence. We specialize in crafting intelligent solutions that
                  empower businesses to thrive in this modern digital era</p>
                <p className="mt-4 text-gray-600"> At Datenium, we believe in the synergy of data and AI, and our team of
                  passionate professionals works tirelessly to create innovative
                  applications that transform data into actionable insights. Our
                  commitment to excellence and technological prowess sets us apart in
                  the competitive landscape.</p>
              </div>
            </div>
          </div>
        </div>

        <TeamPage />

        <Locations />
      </div>
    </div>
  );
};

export default About;
