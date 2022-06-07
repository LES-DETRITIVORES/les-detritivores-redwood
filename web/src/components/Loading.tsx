import React from "react";
import { Icons } from "./Icons";

const Loading = ({ title }) => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <Icons
        icons="spinner"
        className="animate-spin h-5 w-5 text-neutral-900 dark:text-neutral-100"
      />
      <span className="text-black dark:text-white">{title}</span>
    </div>
  );
};
export default Loading;