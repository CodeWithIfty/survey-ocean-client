import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
const FeaturedSurveySection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  //   Changing visible slide depending window size
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setSlidesToShow(isSmallScreen ? 2 : 3);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  return (
    <section className="my-24 mx-4">
      <div className="w-full ">
        <CarouselProvider
          visibleSlides={slidesToShow}
          totalSlides={6}
          step={3}
          naturalSlideWidth={400}
          naturalSlideHeight={300}
          className="md:h-64 h-[350px] bg-[url(/assets/featured-survey-bg-01.png)] bg-cover "
        >
          <div className="w-full flex justify-between ">
            <div className="flex gap-2">
              <div className="border-b-4  border-[#5751E6] w-8 h-auto"></div>
              <h1 className=" font-extrabold drop-shadow-sm text-gray-800">
                Featured <br /> Survey
              </h1>
            </div>

            <div className="">
              <ButtonBack className="bg-primary p-3 rounded-full text-white mr-2">
                <FaChevronLeft />
              </ButtonBack>
              <ButtonNext className="bg-primary p-3 rounded-full text-white">
                <FaChevronRight />
              </ButtonNext>
            </div>
          </div>

          <Slider className="mt-8 w-full h-full ">
            <Slide tag="a" index={0}>
              <div className=" bg-white shadow-xl   p-4 mr-4 ">
                <h6 className="font-semibold">Questions</h6>
                <h1 className="text-xl font-bold"> Data Visualization Core</h1>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  animi, quasi corrupti ullam dignissimos cumque assumenda!
                  Ratione error!
                </p>
                <span className="text-xs ">learn more...</span>
              </div>
            </Slide>
            <Slide tag="a" index={1}>
              <div className=" bg-white shadow-xl  p-4 mr-4">
                <h6 className="font-semibold">Questions</h6>
                <h1 className="text-xl font-bold"> Data Visualization Core</h1>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  animi, quasi corrupti ullam dignissimos cumque assumenda!
                  Ratione error!
                </p>
                <span className="text-xs ">learn more...</span>
              </div>
            </Slide>
            <Slide tag="a" index={2}>
              <div className=" bg-white shadow-xl  p-4 mr-4">
                <h6 className="font-semibold">Questions</h6>
                <h1 className="text-xl font-bold"> Data Visualization Core</h1>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  animi, quasi corrupti ullam dignissimos cumque assumenda!
                  Ratione error!
                </p>
                <span className="text-xs ">learn more...</span>
              </div>
            </Slide>
            <Slide tag="a" index={3}>
              <div className=" bg-white shadow-xl  p-4 mr-4">
                <h6 className="font-semibold">Questions</h6>
                <h1 className="text-xl font-bold"> Data Visualization Core</h1>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  animi, quasi corrupti ullam dignissimos cumque assumenda!
                  Ratione error!
                </p>
                <span className="text-xs ">learn more...</span>
              </div>
            </Slide>
            <Slide tag="a" index={4}>
              <div className=" bg-white shadow-xl  p-4 mr-4">
                <h6 className="font-semibold">Questions</h6>
                <h1 className="text-xl font-bold"> Data Visualization Core</h1>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  animi, quasi corrupti ullam dignissimos cumque assumenda!
                  Ratione error!
                </p>
                <span className="text-xs ">learn more...</span>
              </div>
            </Slide>
            <Slide tag="a" index={5}>
              <div className=" bg-white shadow-xl  p-4 mr-4">
                <h6 className="font-semibold">Questions</h6>
                <h1 className="text-xl font-bold"> Data Visualization Core</h1>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  animi, quasi corrupti ullam dignissimos cumque assumenda!
                  Ratione error!
                </p>
                <span className="text-xs ">learn more...</span>
              </div>
            </Slide>
          </Slider>

          <DotGroup />
        </CarouselProvider>
      </div>
    </section>
  );
};

export default FeaturedSurveySection;
