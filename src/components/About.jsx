import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section
      id={"about-me"}
      customPadding={"pt-14 lg:pt-16 xl:pt-[8rem] lg:pb-10 pb-0 -mb-4"}
      crosses
      sectionLine={"relative top-0"}
    >
      <div className="container -mt-16 md:mt-0 md:pb-[10rem] pb-[2.5rem]">
        <h2 className="h2 w-full md:text-center">Learn More About Me.</h2>
        <p className="body-2 text-n-4 md:text-center md:mb-20 mb-[56px] mt-4">Full-stack developer build mordern, high-performance websites with seamless user experiences.</p>
        <div>
          {[{title: "1_Education", description: "The powerhouse of AI tech, creative audacity, business mindset. We work with everything digital and help you turn innovative ideas, products, services, and processes into a profitable business then support you to scale it from pre-seed to series D and beyond."}, {title: "2_Education", description: "The powerhouse of AI tech, creative audacity, business mindset. We work with everything digital and help you turn innovative ideas, products, services, and processes into a profitable business then support you to scale it from pre-seed to series D and beyond."}]
          .map((item) => {
            return (
              <div className="flex border-b border-n-2/40 py-5">
                <div className="w-[20rem] flex items-center justify-center">
                  <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center border-2 border-white/40">
                    <div className="w-[60px] h-[60px] rounded-full border-2 border-white/40"></div>
                  </div>
                </div>
                <div className="w-full">
                  {/* Display the title separately */}
                  <div className="mb-2 font-bold text-[2rem] italic">{item.title}</div>
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
