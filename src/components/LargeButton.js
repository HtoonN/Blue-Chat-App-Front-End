import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSeen, setText, setUnseen } from "../Redux/Reducer/SetAlert";

const LargeButton = (props) => {
  const [onButton, setOnButton] = useState(false);
  const dispatch = useDispatch();

  const fun = async () => {
    setOnButton(true);

    const ans = props.onClickFun();

    if (!ans.error) {
      dispatch(setText(ans.information));
      dispatch(setSeen());
      setTimeout(() => {
        dispatch(setUnseen());
        setOnButton(false);
        setTimeout(() => {
          dispatch(setText("Alert"));
        }, 500);
      }, 2500);
      // localStorage.setItem("auth", "true");
      //location.assign("user/home_page");
    } else {
      alert(ans.information);
      setOnButton(false);
    }
  };
  return (
    <div>
      <button
        className="w-24 h-[35px] my-4 transition hover:bg-blue-900 text-blue-900 font-medium hover:text-white border-2 border-blue-900  rounded-xl  duration-50 ease-in-out hover active:bg-white active:text-blue-900 text-small lg:text-base hover:shadow-xl disabled:opacity-50 disabled:bg-white disabled:text-blue-900 disabled:shadow-none"
        onClick={fun}
        disabled={onButton}
      >
        {props.name}
      </button>
    </div>
  );
};

export default LargeButton;
