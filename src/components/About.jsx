import React from "react";
import Section from "./Section";
import Image from "next/image";
import { curve } from "../../public";

const About = () => {
  return (
    <Section
      id={"about-me"}
      customPadding={"pt-14 lg:pt-16 xl:pt-[8rem] lg:pb-10 pb-0 -mb-4"}
      crosses
      sectionLine={"relative top-0"}
    >
      <div className="container -mt-16 md:mt-0 xl:pb-[10rem] md:pb-[5.5rem] pb-[4.5rem]">
        <h2 className="h2 w-full md:text-center">Learn More About Me.</h2>
        <p className="body-2 text-n-4 md:text-center md:mb-20 mb-[56px] mt-4">Full-stack developer build mordern, high-performance websites with seamless user experiences.</p>
        <div>
          {[
            {
              title: "1_Experience",
              description:
                "The powerhouse of AI tech, creative audacity, business mindset. We work with everything digital and help you turn innovative ideas, products, services, and processes into a profitable business then support you to scale it from pre-seed to series D and beyond.",
              about: (
                <div className="text-center">
                  <h2 className=" font-semibold text-lg">Narula Institute of Technology, Agarpara(West Bengal)</h2>
                  <p>Bachelor of Technology - BTech, Computer Science and Engineering Oct 2023 - ongoing</p>
                </div>
              ),
            },
            {
              title: "1_Collage",
              description:
                "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Narula Institute of Technology, Kolkata. I have completed 2 semesters. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
              about: (
                <div className="text-center">
                  <h2 className=" font-semibold text-lg">Narula Institute of Technology, Agarpara(West Bengal)</h2>
                  <p>Bachelor of Technology - BTech, Computer Science and Engineering Oct 2023 - ongoing</p>
                </div>
              ),
            },
            {
              title: "2_Schooling",
              description:
                "The powerhouse of AI tech, creative audacity, business mindset. We work with everything digital and help you turn innovative ideas, products, services, and processes into a profitable business then support you to scale it from pre-seed to series D and beyond.",
            },
          ].map((item) => {
            return (
              <div className="flex border-b border-n-2/40 py-5">
                <div className="w-[22rem] px-8 flex flex-col items-center justify-center border-white/40 border-r">
                  <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center border-2 border-white/40 mb-4">
                    <div className="w-[60px] h-[60px] rounded-full border-2 border-white/40"></div>
                  </div>
                  {item.about}
                </div>
                <div className="w-full px-8 border-white/40 border-r">
                  <div className="relative inline-block mb-4">
                    <div className="mb-4 font-bold text-[2rem] italic">{item.title}</div>
                    <Image
                      src={curve}
                      className="absolute top-full left-0 w-full xl:-mt-2"
                      width={624}
                      height={28}
                      alt="Curve"
                    />
                  </div>
                  <div>{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default About;
