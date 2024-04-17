import { useState } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    imageUrl: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  function NavItem({ children }) {
    return (
      <li>
        <Typography
          as="a"
          href="#"
          variant="paragraph"
          color="blue-gray"
          className="text-blue-gray-700 flex items-center gap-2 font-medium"
        >
          {children}
        </Typography>
      </li>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 51) + 50;

    // Append the random number to the URL string
    const imageUrl = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
    setData((prevState) => ({
      ...prevState,
      imageUrl,
    }));
  };
  React.useEffect(() => {
    const postData = async () => {
      try {
        const url = "http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/api/users";
        const { data: res } = await axios.post(url, data);
        navigate("/login");
        console.log(res.message);
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
  
    if (data.imageUrl) {
      postData();
    }
  }, [data,navigate]);
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
            <Link to="/Login">
              <Button color="gray">Log in</Button>
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
              <NavItem>
                <RectangleStackIcon className="h-5 w-5" />
                Pages
              </NavItem>
              <NavItem>
                <UserCircleIcon className="h-5 w-5" />
                Account
              </NavItem>
              <NavItem>
                <Squares2X2Icon className="h-5 w-5" />
                Blocks
              </NavItem>
              <NavItem>
                <CommandLineIcon className="h-5 w-5" />
                Docs
              </NavItem>
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
            Sign up
          </Typography>
          <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
            Enter your details to Sign up
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-[24rem] text-left"
          >
            <div className="mb-6">
              <label htmlFor="text">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  First Name
                </Typography>
              </label>
              <Input
                id="firstName"
                color="gray"
                size="lg"
                type="text"
                name="firstName"
                placeholder="Harish"
                value={data.firstName}
                required
                onChange={handleChange}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="text">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Last Name
                </Typography>
              </label>
              <Input
                id="lastName"
                color="gray"
                size="lg"
                type="text"
                name="lastName"
                placeholder="Pal"
                value={data.lastName}
                required
                onChange={handleChange}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  onChange={handleChange}
                  required
                  value={data.email}
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Email
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
              Sign up
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
