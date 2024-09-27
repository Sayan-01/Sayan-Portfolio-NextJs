import React from "react";
import Section from "./Section";
import Form from "./design/Form";
import { contact_feature, contact_feature_2 } from "@/constants";

const Contact = () => {
  return (
    <Section
      id={"contact"}
      customPadding={" lg:pt-24 pb-0 lg:pb-5 -mb-4"}
      crosses
      sectionLine={"relative top-0"}
    >
      <div className="container -mt-16 md:mt-0 mb-20">
        <h2 className="h2 w-full md:text-center">Contact With Me</h2>
        <p className="body-2 text-n-4 md:text-center md:mb-20 mb-[56px] mt-4">Full-stack developer build mordern, high-performance websites with seamless user experiences.</p>
        <div className="flex flex-col md:flex-row">
          {/* left-side */}
          <div className="w-full items-start flex flex-col">
            <div className="px-5 py-2 md:mt-0 my-6 rounded-full bg-gradient-to-r from-[#191e47] via-[#2b1d72] font-semibold">Conatct</div>
            <p className="text-white/60 md:max-w-[80%] ">Connect with Azeorex for innovative web design, impactful branding, and dedicated expert support to elevate your brand.</p>
            <div className="my-8 flex lg:flex-row flex-col gap-10">
              <div>
                {contact_feature.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-6 mt-6"
                    >
                      <div className="bg-gradient-to-br from-[#2b1d72] to-[#06050c] w-[52px] h-[52px] flex items-center justify-center rounded-full">{item.logo}</div>
                      <div>
                        <div className="text-lg">{item.title}</div>
                        <div className="text-sm text-white/60">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                {contact_feature_2.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-6 mt-6"
                    >
                      <div className="bg-gradient-to-br from-[#2b1d72] to-[#06050c] w-[52px] h-[52px] flex items-center justify-center rounded-full">{item.logo}</div>
                      <div>
                        <div className="text-lg">{item.title}</div>
                        <div className="text-sm text-white/60">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right-side */}
          <Form />
        </div>
      </div>
    </Section>
  );
};



export default Contact;
