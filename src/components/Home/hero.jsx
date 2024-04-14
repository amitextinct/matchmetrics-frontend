import React from "react";
import bg from "./assets/bg.png";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


function HeroSection16() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar shadow={false} fullWidth className="border-0">
        <div className="container mx-auto flex items-center justify-between">
          <Typography color="blue-gray" className="text-lg font-bold">
            MATCHMETRICS
          </Typography>

          <div className="hidden items-center gap-4 lg:flex">
            <Link to="/login">
              <Button variant="text">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button color="gray">Sign up</Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Link to="/login">
                <Button variant="text">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button color="gray">Sign up</Button>
              </Link>
            </div>
          </div>
        </Collapse>
      </Navbar>
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
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Link to="/signup">
                  <Button color="gray" className="w-full px-4 md:w-[12rem]">
                    get started
                  </Button>
                </Link>
              </div>
            </div>
            <br />
            <br />
            <div className="flex items-center justify-center">
            <img src={bg} alt="lol" className="rounded-lg center no-repeat border-red-500" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;
