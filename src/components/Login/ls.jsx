import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export function Basic() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "username",
        res.data.firstName + " " + res.data.lastName
      );
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("imageUrl", res.data.imageUrl);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <Navbar shadow={false} fullWidth className="border-0">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/home">
            <Typography color="blue-gray" className="text-lg font-bold">
              MATCHMETRICS
            </Typography>
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
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
            <ul className="flex flex-col gap-4">
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Link to="/login">
                <Button variant="text">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button color="gray">buy now</Button>
              </Link>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <section className="grid text-center h-[92vh] items-center p-8 mt-[-20]">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Log In
          </Typography>
          <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
            Enter your email and password to Log in
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-[24rem] text-left"
          >
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  onChange={handleChange}
                  required
                  value={data.email}
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Your Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                value={data.email}
                required
                onChange={handleChange}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Password
                </Typography>
              </label>
              <Input
                size="lg"
                placeholder="********"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
                name="password"
                value={data.password}
                required
                onChange={handleChange}
              />
            </div>
            {error && <div>{error}</div>}
            <Button
              color="gray"
              size="lg"
              className="mt-6"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </form>
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <a href="/" className="font-medium text-gray-900">
              <Link to="/signup">Create account</Link>
            </a>
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default Basic;
