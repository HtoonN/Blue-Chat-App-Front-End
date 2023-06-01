import Logo from "../../../Images/logo.png";
import React, { useState } from "react";
import LogoComponent from "../../../components/logoComponent";
import LabelAndInputText from "../../../components/LabelAndInputText";
import LabelAndInputPassword from "../../../components/LabelAndInputPassword";
import LargeButton from "../../../components/LargeButton";
import registerControl from "../../../Utlities/RegisterControl";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div>
      <div className="flex flex-col items-center justify-start  lg:flex-row lg:items-center lg:justify-center  lg:h-screen lg:w-screen ">
        <div className="lg:flex lg:items-center lg:justify-end  lg:w-[50vw] lg:h-[90vh] lg:pr-28">
          <LogoComponent Logo={Logo} />
        </div>
        <div className="px-10 rounded-lg text-blue-800  flex flex-col items-center justify-center  md:pb-10 lg:w-[50vw] lg:h-[100vh] lg:items-start ">
          <h1 className="mb-10 text-center font-bold text-[21px] lg:text-[25px]">
            Register
          </h1>
          <LabelAndInputText
            name="Username"
            value={username}
            setValue={setUsername}
          />
          <LabelAndInputText name="Email" value={email} setValue={setEmail} />
          <LabelAndInputPassword
            name="Password"
            value={password}
            setValue={setPassword}
          />
          <LabelAndInputPassword
            name="Re-Password"
            value={rePassword}
            setValue={setRePassword}
          />
          <LargeButton
            name="Submit"
            onClickFun={() =>
              registerControl({ username, email, password, rePassword })
            }
          />
          <div>
            <h1 className="mt-3 text-center text-sm ">
              Already account ?
              <span
                className="underline px-2 cursor-pointer"
                onClick={() => location.assign("login")}
              >
                login
              </span>
            </h1>
            <h1
              className="underline text-sm cursor-pointer text-center lg:text-left"
              onClick={() => location.assign("help")}
            >
              Help
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
