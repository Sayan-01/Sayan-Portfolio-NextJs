import React from "react";
import Section from "./Section";
import Button from "./Button";
import Program from "./Program";
import { LeftCurve } from "./design/Collaboration";
import { check } from "../../public";
import Image from "next/image";
import { BottomLine } from "./design/Hero";
import Link from "next/link";

const Skills = () => {
  const program = [
    { title: "html", url: "" },
    { title: "css" },
    { title: "js" },
    { title: "npm" },
    { title: "figma" },
    { title: "tailwind" },
    { title: "node" },
    { title: "express" },
    { title: "mongo" },
    { title: "react" },
    { title: "next" },
    { title: "redux" },
    { title: "gsap" },
    { title: "framer" },
    { title: "git" },
    { title: "github" },
    { title: "c" },
    { title: "cpp" },
  ];
  const skills = [
    { title: "Software engineering", id: 3 },
    { title: "Teaching", id: 1 },
    { title: "Drawing", id: 2 },
    { title: "Freelancing", id: 3 },
  ];
  return (
    <Section
      id={"skills"}
      customPadding={"py-14 lg:py-16 xl:py-[10rem] -mb-4"}
    >
      <div className="container lg:flex ">
        <div className=" max-w-[30rem]">
          <h2 className="h2 mb-4 md:mb-8">Technologies Skills And Fremwork&nbsp; That I Know</h2>
          <ul className=" max-w-[22rem] mb-10 md:mb-14">
            {skills.map((item) => (
              <li
                key={item.id}
                className="mb-2 py-3 flex items-center gap-4"
              >
                <Image src={check} />
                <h6>{item.title}</h6>
              </li>
            ))}
          </ul>
          <Link href={"#contact"}>
            <Button className={" font-code text-xs font-bold"}>Contact Me</Button>
          </Link>
          <p className="body-2 text-n-4 lg:w-[24rem]  mt-10">
            Utilizing the MERN stack and Next.js, I can enhance your website's performance with advanced features while ensuring superiorscalability.
          </p>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="  relative left-1/2 flex md:w-[32rem] w-[22.1rem] aspect-square rounded-full -translate-x-1/2 scale:75 md:scale-100 -top-10 md:top-0  md:mt-10 lg:mt-6 mt-20">
            <Program className={""} />
            <LeftCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
