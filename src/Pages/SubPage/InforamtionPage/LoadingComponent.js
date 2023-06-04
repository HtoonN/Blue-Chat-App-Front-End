import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CheckCircle } from "@mui/icons-material";

const LoadingComponent = () => {
  const open = useSelector((state) => state.loading.seen);
  const success = useSelector((state) => state.loading.success);
  const title = useSelector((state) => state.loading.title);

  return (
    <div>
      {open && (
        <div
          className={
            open
              ? "fixed z-40 bg-transparent  transition w-full h-full"
              : "none z-40 bg-transparent  transition w-full h-full"
          }
        >
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-10/12 h-[300px] bg-white shadow-lg rounded-lg  flex flex-col items-center justify-between py-10  md:h-[350px] md:w-6/12 lg:w-4/12 ">
            <div className="text-lg font-semibold lg:text-xl ">{title}</div>
            <div>
              {success ? (
                <CheckCircle
                  sx={{
                    fontSize: "50px",
                    color: "#1e3a8a",
                  }}
                />
              ) : (
                <CircularProgress
                  sx={{ width: "300px", height: "300px", color: "#1e3a8a" }}
                />
              )}
            </div>
            <div>
              <div>{success ? "Success !" : "loading..."}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingComponent;
