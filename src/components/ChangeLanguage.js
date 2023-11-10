import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChangeLanguage } from "../Redux/Reducer/OpenCloseReducer";
import changeFunction from "../Utlities/ChangeLanguageFun";

const ChangeLanguage = () => {
  const selectedLanguage = useSelector(
    (state) => state.userDatas.profileDatas.language
  );

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const style = "w-[300px] md:w-96 ";

  const [language, setLanguage] = useState(selectedLanguage);
  const open = useSelector((state) => state.openClose.changeLanguage);
  const dispatch = useDispatch();

  const handleChange = (language) => {
    setLanguage(language);
  };

  const handleClose = () => {
    dispatch(setChangeLanguage());
  };

  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>
      {open && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className={style}>
            <span className="text-blue-900 font-extrabold">
              {activeLanguage.changeLanguageModel.header}
            </span>
          </DialogTitle>
          <DialogContent className={style}>
            <div className="mb-3">
              {activeLanguage.changeLanguageModel.selectedLanguage} :{" "}
              <span className="capitalize">{language}</span>
            </div>
            <div className=" max-h-[150px] overflow-x-hidden overflow-y-scroll pl-2">
              <h2
                onClick={() => {
                  handleChange("myanmar");
                }}
                className={`${
                  language === "myanmar"
                    ? "text-blue-900 font-bold"
                    : "hover:font-bold  active:font-thin"
                } ${
                  language === "burmese"
                    ? "text-blue-900 font-bold"
                    : "hover:font-bold  active:font-thin"
                } cursor-pointer `}
              >
                Myanmar(မြန်မာ)
              </h2>
              <h2
                onClick={() => {
                  handleChange("english");
                }}
                className={`${
                  language === "english"
                    ? "text-blue-900 font-bold"
                    : "hover:font-bold  active:font-thin"
                }  cursor-pointer`}
              >
                English
              </h2>
              <h2
                onClick={() => {
                  //handleChange("thai");
                }}
                className={`${
                  language === "thai"
                    ? "text-blue-900 font-bold"
                    : "hover:font-bold  active:font-thin"
                } cursor-pointer`}
              >
                Thai(ไทย)
              </h2>
            </div>
          </DialogContent>
          <DialogActions className={style}>
            <Button onClick={handleClose}>
              <span className="text-blue-900">
                {activeLanguage.changeLanguageModel.btn.cancel}
              </span>
            </Button>
            <Button
              onClick={() => {
                handleClose();
                if (language && selectedLanguage !== language) {
                  changeFunction(language, dispatch);
                } else {
                  console.log("Can't change");
                }
              }}
            >
              <span className="text-blue-900">
                {activeLanguage.changeLanguageModel.btn.ok}
              </span>
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default ChangeLanguage;
