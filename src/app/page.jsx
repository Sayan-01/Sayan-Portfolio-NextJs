import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";
import ButtonGradient from "../../public/svg/ButtonGradient";
import About from "@/components/About";

const page = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Skills />
        <Services />
        <Project />
        <About/>
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default page;
