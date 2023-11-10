import axios from "axios";
import { setActiveLanguage } from "../Redux/Reducer/Preferences";

const changeFunction = (language, dispatch) => {
  if (language) {
    let changeLanguage = "en";
    if (language === "myanmar") {
      changeLanguage = "bm";
    }
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/change_language/${changeLanguage}`,
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        if (language === "myanmar") {
          dispatch(setActiveLanguage("burmese"));
        } else {
          dispatch(setActiveLanguage("english"));
        }
      }
    });
  }
};

export default changeFunction;
