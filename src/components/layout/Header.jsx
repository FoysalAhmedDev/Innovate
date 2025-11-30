import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo.png";
import { FaAngleDown } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Flex className={`justify-between`}>
          <Link to={`/`}>
          <Image imgSrc={Logo} />
          </Link>
          <div>
            <ul className="flex items-center gap-x-10.5">
              <li>
                <Link to={`/`} className="flex items-center hover:text-[#FF7628] ease-in-out duration-500 transition">
                  Home <FaAngleDown />
                </Link>
              </li>
              <li >
                <Link to={`/about`} className="flex items-center hover:text-[#FF7628] ease-in-out duration-500 transition">
                  About <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={`/service`} className="flex items-center hover:text-[#FF7628] ease-in-out duration-500 transition">
                  Service <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={`/portfolio`} className="flex items-center hover:text-[#FF7628] ease-in-out duration-500 transition">
                  Portfolio <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={`/price`} className="flex items-center hover:text-[#FF7628] ease-in-out duration-500 transition">
                  Price <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={`/blog`} className="flex items-center hover:text-[#FF7628] ease-in-out duration-500 transition">
                  Blog <FaAngleDown />
                </Link>
              </li>
            </ul>
          </div>
          <Button className={`text-white`} btnTxt={`Contact Us`} />
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
