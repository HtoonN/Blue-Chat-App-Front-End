import React, { useEffect } from "react";
import RouterBrower from "../Router/RouterBrower";

const IndexPage = () => {
  useEffect(() => {
    localStorage.setItem("auth", false);
  }, []);

  return (
    <div>
      <RouterBrower />
    </div>
  );
};

export default IndexPage;
