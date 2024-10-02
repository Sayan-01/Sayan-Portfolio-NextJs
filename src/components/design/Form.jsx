"use client";
import { useState } from "react";
// import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { emailsend } from "../../../server/contact";
import Label from "./Label";

const Form = () => {
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setLoading(true);

    const formData = new FormData(e.target);
    const result = await emailsend(formData);

    if (result?.error) {
      setResponseMessage(result.error);
      setLoading(false);
      // toast({
      //   variant: "destructive",
      //   title: result.error,
      //   description: "Try to filled all of filds",
      // });
    } else if (result?.message) {
      setResponseMessage(result.error);
      // toast({
      //   title: "Uh oh! Connection send ",
      //   description: "Thanks for choosing us to enhance your dream",
      // });
      router.push("/");
    }
  };

  return (
    <div className="lg:w-[90%] w-full  border border-[#2a233ebc] bg-[#050505] p-5 pt-10 pb-12 rounded-xl ">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
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
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
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
        <button
          type="submit"
          disabled={loading === true ? true : false}
          className="w-full  disabled:opacity-50 text-center  mt-3 bg-gradient-to-r from-[#7738ec] to-[#f165e7] py-3 px-5 rounded-[10px] hover:opacity-90 duration-200"
        >
          Submit
        </button>
        {responseMessage && <div className="mt-1 mb-0 text-red-500 text-[0.8rem] font-medium">{responseMessage}</div>}
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
            className={`w-full mt-3 bg-[#14121c] border border-[#2a233ebc] px-5 py-2 rounded-[10px] outline-none h-20 focus:bg-none ${className}`}
            name={name}
          />
        </>
      ) : (
        <>
          <input
            placeholder={placeHolder}
            className={`w-full mt-3 bg-[#14121c] border border-[#2a233ebc] py-3 px-5 rounded-[10px] outline-none focus:bg-none ${className}`}
            name={name}
          />
        </>
      )}
    </div>
  );
};

export default Form;
