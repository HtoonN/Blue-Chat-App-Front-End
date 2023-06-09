import React, { useEffect, useState } from "react";
import Error404Icon from "../../../Images/404-error.png";

const ErrorPage = () => {
  const [count, setCount] = useState(10);

  const redirectToHomepage = () => {
    location.assign("/login");
  };

  useEffect(() => {
    if (count === 0) {
      location.assign("/login");
      return;
    }
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className=" flex flex-col w-[100vw] h-[100vh]  items-center justify-start
     bg-blue-900 pt-20  text-white "
    >
      <img src={Error404Icon} className="w-40 h-40" />
      <div className="text-white">Page Not Found</div>
      <p className="mt-10">Redirect in</p>
      <p className="mb-10">{count}s</p>
      <button
        className="uppercase text-xs padd py-2 px-5 bg-white rounded-lg hover:shadow-2xl text-blue-900 font-semibold mt-10"
        onClick={redirectToHomepage}
      >
        _Back to Home_
      </button>
    </div>
  );
};

export default ErrorPage;
