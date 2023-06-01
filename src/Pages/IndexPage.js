import React, { useEffect, useState } from "react";
import RouterBrower from "../Router/RouterBrower";

const IndexPage = () => {
  useEffect(() => {
    localStorage.setItem("auth", false);
  }, []);

  const [blue] = useState(false);
  const [red] = useState(false);

  return (
    <div>
      {blue && (
        <div className="w-full h-full bg-blue-500 absolute opacity-20 z-10" />
      )}
      {red && (
        <div className="w-full h-full bg-purple-500 absolute  opacity-20 " />
      )}
      <RouterBrower />
    </div>
  );
};

export default IndexPage;
