import React, { useEffect } from "react";
//import RouterBrower from "../Router/RouterBrower";
import RoutesApp from "../Router/Blog";

const IndexPage = () => {
  useEffect(() => {
    localStorage.setItem("auth", false);
  }, []);

  return (
    <div>
      <RoutesApp />
    </div>
  );
};

export default IndexPage;
