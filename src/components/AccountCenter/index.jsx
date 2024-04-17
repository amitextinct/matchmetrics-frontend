import Navigationbar from "../NavBar";
import Footer16 from "../Home/footer";
import { Typography } from "@material-tailwind/react";
import React from "react";
function AccountCenter() {
  const username = localStorage.getItem("username");
  const imageUrl = localStorage.getItem("imageUrl");
  const email = localStorage.getItem("email");

  return (
    <div>
      <Navigationbar />
      <br />
      <br />
      <br />
      <br />
      <div className="">
        <div className="text-center flex flex-row justify-center">
          <div className="flex flex-col justify-center mx-1 ">
            <img
              className="h-96 w-96 rounded-full object-none object-center my-1/2"
              src={`${imageUrl}`}
              alt={username}
            />
          </div>
          <div className="flex flex-col justify-center mx-1 ">
            <Typography
              variant="large"
              className="mb-2 block font-large text-gray-900 text-center"
            >
              {username}
            </Typography>
            <Typography
              variant="large"
              className="mb-2 block font-large text-gray-900 text-justify"
            >
              {email}
            </Typography>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer16 />
    </div>
  );
}
export default AccountCenter;
