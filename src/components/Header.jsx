"use client";
import MenuSvg from "../../public/svg/MenuSvg";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Anton } from "next/font/google";

import Button from "./Button";
// import { HambugerMenu } from "./design/Header";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const jersey = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  const nav = [
    { title: "home", url: "#home" },
    { title: "services", url: "#services" },
    { title: "skills", url: "#skills" },
    { title: "projects", url: "#projects" },
    { title: "about me", url: "#about-me" },
  ];
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          className="block w-[12rem] xl:mr-8"
          href="#hero"
        >
          <Image
            className="w-[7.2rem] aspect-auto"
            src="/logo.png"
            alt="logo"
            width={600}
            height={600}
          />
        </Link>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {nav.map((item, index) => (
              <div key={index}>
                {/* Add key prop here */}
                <Link
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        <Link
          href="https://linkdin.com/in/Sayan-s1"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          @Sayandas
        </Link>
        <Button
          className="hidden lg:flex text-sm"
          href="#login"
        >
          Contact
        </Button>

        <Button
          white={false}
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
