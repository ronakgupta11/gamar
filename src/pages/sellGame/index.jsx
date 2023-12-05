import React from "react";
import FeaturesPage from "@/components/FeaturesPage";
import WalletPage from "@/components/WalletPage";
import { InputForm } from "@/components/input-form";
const features = () => {
  return (
    <>
      <div
        className=" "
      >
        <h1 className="text-5xl text-center" >Upload Your Game</h1>
        <div className="my-10 m-5 flex justify-center ">
        <InputForm  />
        </div>
      </div>
    </>
  );
};

export default features;
