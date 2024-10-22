import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const profileMenuUser = [
  {
    label: "Myers-Briggs Type Indicator",
    to: "/mbti",
  },
  {
    label: "Career Clustering",
    to: "/career",
  },
  {
    label: "IQ Test",
    to: "/iq",
  },
  {
    label: "EQ Test",
    to: "/eq",
  },
  {
    label: "Left-Right Brain Test",
    to: "/lrBrain",
  },
  {
    label: "Learning Style Test",
    to: "/learningStyle",
  },
];

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 py-0.5 pr-2 pl-0.5 lg:ml-auto menu font-18 hover:bg-[#4596cf] h-[100%]"
        >
          <Typography className="normal-case">{"Bài kiểm tra"}</Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      {
        <MenuList className="p-2 z-20 rounded-[20px] bg-white">
          {profileMenuUser.map(({ label, to }, key) => {
            return (
              <Link to={to}>
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded 
                      hover:bg-[#85c1e9] focus:bg-[#85c1e9] active:bg-[#85c1e9]
                  }`}
                >
                  <Typography className="mt-3 text-lg" color={"blue-gray"}>
                    {label}
                  </Typography>
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      }
    </Menu>
  );
}
