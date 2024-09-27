import React from "react";

const Label = ({children}) => {
  return <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{children}</div>;
};

export default Label;
