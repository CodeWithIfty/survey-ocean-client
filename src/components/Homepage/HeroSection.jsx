import { FaArrowRight } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-8 grid-cols-1  justify-center items-center md:gap-24 mx-5">
        <div className="lg:col-span-5 md:col-span-4 flex flex-col justify-start items-center order-2">
          <div className="">
            <button className="bg-secondary px-3 py-2 font-semibold mb-3 rounded">
              QUANTITATIVE
            </button>
            <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
              A powerful <br /> online survey tool.
            </h1>
            <div className="bg-white  px-2 py-1 mt-10 w-10/12 flex items-center justify-between  shadow-xl">
              <input
                type="text"
                placeholder="Your Email Address here"
                className="bg-transparent w-full bg-white outline-none"
              />
              <button className="bg-primary py-2 px-4 text-xl text-white rounded">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 md:order-2">
          <div className="">
            <img src="/assets/hero-bg.png" alt="" />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="lg:mx-24 mx-4 md:flex justify-center items-center mt-10 hidden ">
        <div className="flex flex-wrap justify-evenly items-center w-full ">
          <img src="/assets/hero-brand-logos.png" alt="" className="h-20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
