import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const LabelAndInputPassword = (props) => {
  const [seenForPassword, setSeenForPassword] = useState(false);
  return (
    <div className="mb-5">
      <p className="mb-1 text-small lg:text-base">{props.name}</p>
      <div className="border-2 w-58 px-2 py-1 rounded-xl bg-white min-w-[300px] border-blue-800 ">
        <input
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          type={seenForPassword ? "text" : "password"}
          placeholder="more then 7 character"
          className=" outline-none w-11/12 placeholder-gray-500 placeholder-opacity-40 text-black"
        />
        <span
          onClick={() => setSeenForPassword(!seenForPassword)}
          className="cursor-pointer"
        >
          {seenForPassword ? (
            <Visibility fontSize="small" />
          ) : (
            <VisibilityOff fontSize="small" color="disabled" />
          )}
        </span>
      </div>
    </div>
  );
};

export default LabelAndInputPassword;
