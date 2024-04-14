import HeroSection16 from "./hero";
import Footer16 from "./footer";
import { Typography } from "@material-tailwind/react";

import bg from "./assets/bg.png";
const Main = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <div className="">
        <div className="text-center bg-black text-white">
          Please open on a desktop for Full Experience
        </div>
        <div className="mx-auto flex flex-col items-center justify-center">
          <Typography color="blue-gray" className="text-lg font-bold">
            MATCHMETRICS
          </Typography>
          <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[75vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Stay Updated with MatchMetrics
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
             Empowering Football Excellence:   {" "}
              <span className="text-green-500 leading-snug ">Data-driven Insights</span>{" "}
              for{" "}
              <span className="leading-snug text-green-500">Winning Strategies</span>
              .
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Precision in Play: MatchMetrics Delivers Spot-On Match Scores
            </Typography>
            <br />
            <br />
            <div className="flex items-center justify-center">
            <img src={bg} alt="lol" className="rounded-lg center no-repeat border-red-500" />
            </div>
          </div>
        </div>
      </header>
        </div>
      </div>
    );
  }
  return (
    <div>
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
