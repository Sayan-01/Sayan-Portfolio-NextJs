import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section
      id={"about-me"}
      customPadding={"py-14 lg:py-16 xl:py-[8rem] -mb-4"}
      crosses
    >
      <div className="container -mt-16 md:mt-0 md:mb-[10rem] mb-10">
        <h2 className="h2 w-full md:text-center">Learn More About Me.</h2>
        <p className="body-2 text-n-4 md:text-center md:mb-20 mb-[56px] mt-4">Full-stack developer build mordern, high-performance websites with seamless user experiences.</p>
        <div className="flex border-b border-n-2 py-5">
          <div className="w-64">logo</div>
          <div className="w-full">
            <div className=" before:content-['01_Education:'] before:text-n-1 before:w-48 before:mb-2 before:font-bold before:text-[2rem] before:italic before:mr-10">
              The powerhouse of AI tech, creative audacity, business mindset. We work with everything digital and help you turn innovative ideas, products, services, and processes into a
              profitable business then support you to scale it from pre-seed to series D and beyond.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
