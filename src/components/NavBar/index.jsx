import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PowerIcon, UserCircleIcon } from "@heroicons/react/24/solid";
const username = localStorage.getItem("username");
const imageUrl = localStorage.getItem("imageUrl");
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
const handleLogout = () => {
  localStorage.removeItem("token", "username", "email");
  localStorage.clear();
  window.location.href = "/";
};

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt={username}
            className="border border-gray-900 p-0.5"
            src={`${imageUrl}`}
          />
          {username}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center flex-col gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              <Link className="flex flex-row" to="/accountcenter">
                <UserCircleIcon className="h-4 w-4" strokeWidth="2" />
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="inherit"
                >
                  Account
                </Typography>
              </Link>
              <hr />
              <button className="flex flex-row" onClick={handleLogout}>
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}

                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </button>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function Navigationbar() {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography color="blue-gray" className="text-lg font-bold ml-4">
            MatchMetrics
          </Typography>
        </Link>
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
export default Navigationbar;
