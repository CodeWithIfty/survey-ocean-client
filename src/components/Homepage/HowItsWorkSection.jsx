import { FaArrowRight } from "react-icons/fa6";

const HowItsWorkSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center mx-2">
        <h5 className="uppercase text-xl font-semibold text-gray-500">
          How It&lsquo;s Work?
        </h5>
        <h1 className="text-4xl mt-3 font-bold ">
          We do digital Survey like it&lsquo;s <br /> our business
        </h1>
        <p className="my-5  md:w-9/12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          delectus qui maiores accusamus quod perspiciatis, soluta odio debitis
          hic ab et reprehenderit, rerum tenetur! Doloremque veritatis ex
          impedit beatae modi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quas nesciunt tempora obcaecati dignissimos,
          excepturi qui ipsa consectetur, nemo itaque cupiditate sint error enim
          architecto fuga, perferendis ut dicta animi dolor?
        </p>
      </div>
      <div className=" grid md:grid-cols-8 grid-cols-1 justify-between items-center ">
        <div className="col-span-4">
          <img src="/assets/vector2.png" alt="" />
        </div>
        <div className="col-span-4 flex justify-center">
          <div className="">
            <button className="bg-secondary px-3 py-1  font-semibold mb-4 uppercase">
              Services
            </button>
            <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
              New Survey <br />{" "}
              <span className="text-[#5751E6]">Questions</span>
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Aut architecto harum iusto.
            </p>

            <button className="mt-7 bg-gray px-2 py-1">Learn More</button>
          </div>
        </div>
      </div>

      <div className="md:mt-0 mt-24 flex ">
        <div className=" grid md:grid-cols-8 grid-cols-1  items-center mx-5 gap-10">
          <div className="col-span-4 flex justify-center">
            <div className="">
              <h2 className="text-xl font-semibold uppercase text-gray-500">
                Our Mission
              </h2>
              <h1 className="text-4xl font-bold mt-2 mb-4">
                We Do Digital Survey
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Aut architecto harum iusto.
              </p>

              <p className="text-sm mt-3 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Aut architecto harum iusto.
              </p>

              <button className="mt-7 bg-primary font-bold text-white px-3 py-2 flex items-center gap-3 rounded-lg">
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="w-10/12">
              <img src="/assets/vector3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWorkSection;
