import React from "react";

const FriendsBar = () => {
  const arr = [
    "e",
    "f",
    "g",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "e",
    "f",
    "g",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
  ];
  return (
    <div className="flex h-24 w-full overflow-x-auto items-center pl-1 overflow-y-hidden border-b-2 ">
      {arr.map((arr, index) => {
        return (
          <div
            key={index}
            className="flex-none w-[60px] h-[60px] bg-blue-900 mr-10 rounded-full"
          >
            {index}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsBar;
