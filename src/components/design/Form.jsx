import React from "react";
import Label from "./Label";

const Form = () => {
  return (
    <div className="lg:w-[90%] w-full  border border-[#1c1c41] bg-[#0d002e71] p-5 pt-10 pb-12 rounded-xl ">
      <form
        className="flex flex-col gap-4"
        // onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CustomInput
            placeHolder={"Your Full name"}
            name="name"
            label={"Name"}
          />
          <CustomInput
            placeHolder={"Your Email"}
            label={"Email"}
            name={"email"}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <CustomInput
            placeHolder={"Tell your budget (USD)"}
            label={"Budget"}
            name={"budget"}
          />
          <CustomInput
            placeHolder={"UI/UX improve, Motion design"}
            label={"Select (use comma)"}
            name={"select"}
          />
        </div>
        <CustomInput
          type={"textarea"}
          label={"Descripon of the project"}
          name="description"
        />
        <input
          type="hidden"
          name="topic"
          // value={topic}
        />
        <button
          type="submit"
          // disabled={session?.user == undefined || loading === true ? true : false}
          className="w-full  disabled:opacity-50 text-center  mt-3 bg-gradient-to-br from-[#7838ec] to-[#2547fd] py-3 px-5 rounded-[10px]"
        >
          Submit
        </button>
        {/* {responseMessage && <div className="mt-1 mb-0 text-red-500 text-[0.8rem] font-medium">{responseMessage}</div>} */}
      </form>
    </div>
  );
};

const CustomInput = ({ className, placeHolder, label, type, name }) => {
  return (
    <div>
      <Label>{label}</Label>
      {type === "textarea" ? (
        <>
          <textarea
            placeholder={placeHolder}
            className={`w-full mt-3 bg-[#0d0f2c] border border-[#1c1c41] px-5 py-2 rounded-[10px] outline-none h-20 focus:bg-none ${className}`}
            name={name}
          />
        </>
      ) : (
        <>
          <input
            placeholder={placeHolder}
            className={`w-full mt-3 bg-[#0d0f2c] border border-[#1c1c41] py-3 px-5 rounded-[10px] outline-none focus:bg-none ${className}`}
            name={name}
          />
        </>
      )}
    </div>
  );
};

export default Form;
