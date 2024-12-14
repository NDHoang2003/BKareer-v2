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
    label: "Trắc nghiệm tính cách MBTI",
    to: "/mbtiDetail",
  },
  {
    label: "Khám phá năng lực nghề nghiệp",
    to: "/ccDetail",
  },
  {
    label: "Trắc nghiệm IQ",
    to: "/iqDetail",
  },
  {
    label: "Trắc nghiệm EQ",
    to: "/eqDetail",
  },
  {
    label: "Trắc nghiệm não trái - não phải",
    to: "/lrBrainDetail",
  },
  {
    label: "Trắc nghiệm 3 thiên hướng học tập",
    to: "/learningStyleDetail",
  },
  {
    label: "Trắc nghiệm 5 yếu tố tính cách",
    to: "/fivePerDetail",
  },
  {
    label: "Trắc nghiệm Phong Cách Làm Việc",
    to: "/workStyleDetail",
  },
  {
    label: "Trắc nghiệm tính cách True Colors",
    to: "/colorsDetail",
  },
  {
    label: "Trắc nghiệm Thang đo Bền chí",
    to: "/gritDetail",
  },
];

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 py-0.5 pr-2 pl-2.5 lg:ml-auto rounded-none menu font-18 hover:bg-[#4596cf] h-[100%]"
        >
          <div className="normal-case normal-txt font-normal">Bài kiểm tra</div>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      
      {
        <MenuList className="p-0 z-20 bg-white">
          {profileMenuUser.map(({ label, to }, key) => {
            return (
              <Link to={to}>
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2  
                    hover:bg-[#85c1e9] focus:bg-[#85c1e9] active:bg-[#85c1e9]
                    pb-3 w-full pl-3 pr-3
                  }`}
                >
                  <Typography className="mt-3 text-lg" color="#358bca">
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
