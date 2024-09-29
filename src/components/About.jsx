import React from "react";
import Section from "./Section";
import { HiCubeTransparent, HiOutlineLightBulb, HiOutlinePaperAirplane, HiOutlineStar } from "react-icons/hi2";

import { Bebas_Neue } from "next/font/google";

const anton = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

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
              id: "01",
              title: "Experience",
              description: "Currently working at Azeorex as the CEO and Developer, a company co-founded by me.",
              tag: ["Web Development", "Web Design", "CEO", "Full Stack Developer"],
              icon: <HiOutlineLightBulb />,
            },
            {
              id: "02",
              title: "College",
              description: "I am currently pursuing B.Tech in Computer Science & Engineering at Narula institute of Technology",
              tag: ["B.Tech", "DSA", "Computer Science", "OOPs", "DBMS"],
              icon: <HiCubeTransparent />,
            },
            {
              id: "03",
              title: "Schooling",
              description: "I completed my class 10+12 form Sri Ramkrisna Sikshalaya, Howrah with PCMB.",
              tag: ["Class 10", "Class 12", "Mathematics", "WBBSE", "PCMB"],
              icon: <HiOutlineStar />,
            },
          ].map((item) => {
            return (
              <div className="flex flex-col gap-y-6 md:flex-row md:flex-wrap  items-center min-[1380px]:justify-between justify-center py-10 border-b border-white/10">
                <div className={`${anton.className} flex lg:gap-10 gap-2  items-start min-1380px:mr-10`}>
                  <div className="decoration-2 underline text-[#7A89D3] lg:text-2xl text-xl font-bold relative lg:bottom-[34px] bottom-[23px]">{item.id}</div>
                  <div className={`lg:text-[110px] text-[70px] lg:w-[370px] md:w-[216px]`}>{item.title}</div>
                </div>
                <div className="flex items-center justify-between md:ml-8 ml-0">
                  <div className="w-[60px] md:mr-8 mr-4 h-[60px] md:border-2 border border-[#878AB6] rounded-full flex items-center justify-center text-3xl text-yellow-200">{item.icon}</div>
                  <p className=" font-semibold text-[#878AB6] sm:w-[330px] w-[230px]">{item.description}</p>
                </div>
                <div className="flex items-center gap-4 ">
                  <div className="flex gap-4 flex-wrap min-1380px:w-[240px] w-full items-center justify-center">
                    {item.tag.map((tag) => {
                      return <div className="  py-2 px-4 md:border-2 border text-[#878AB6] border-[#878ab6] font-semibold rounded-3xl">{tag}</div>;
                    })}
                  </div>
                  <div className="hidden w-[80px] text-orange-400 h-[80px] rounded-full xl:flex items-center justify-center md:border-2 border border-white/40 mb-4">
                    <HiOutlinePaperAirplane size={26} />
                  </div>
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
