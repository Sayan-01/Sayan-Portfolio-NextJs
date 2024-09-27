import React from "react";
import Link from "next/link";
import ButtonSvg from "../../public/svg/ButtonSvg";
const Button = ({ className, href, onClick, children, px, white }) => {
  let classes = `relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const renderBtn = () => (
    <>
      <button className={classes} onClick={onClick}>
        <span className="z-10 relative">{children}</span>
        {ButtonSvg(white)}
      </button>
      
    </>
  );

  // const renderLink = () => (
  //   <Link href={href} className={classes}>
  //     <span>{children}</span>
  //     {ButtonSvg(white)}
  //   </Link>
  // );
  return renderBtn();
};

export default Button;
