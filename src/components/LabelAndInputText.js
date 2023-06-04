import React from "react";

const LabelAndInputText = (props) => {
  return (
    <div className="mb-5 ">
      <p className="mb-1 text-small lg:text-base">{props.name}</p>
      <input
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        type="text"
        placeholder="more than 7 character"
        className="outline-none border-2 w-58 px-2 py-1 rounded-xl bg-white min-w-[300px] border-blue-800 placeholder-gray-500 placeholder-opacity-40 text-black"
      />
    </div>
  );
};

export default LabelAndInputText;
