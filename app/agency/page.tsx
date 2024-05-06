import HeroSection from "../component/Hero";


export default function Agency() {
    return (
        <section className=" text-white min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Unlock Global Talent, Hire Remotely.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Connecting companies with skilled IT professionals and helping individuals find rewarding remote opportunities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-200">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    )
}
