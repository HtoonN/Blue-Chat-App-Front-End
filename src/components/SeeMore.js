import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import addMoreDatas from "../Utlities/AddMoreData";
import LoadingCircle from "./LoadingCircle";
import { SwipeVertical } from "@mui/icons-material";

const SeeMore = ({ nextPage, data, icon }) => {
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(false);
  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const [ref, inView] = useInView({
    threshold: 0.99,
  });

  useEffect(() => {
    if (inView && nextPage) {
      addMoreDatas(data, nextPage, setSearching, dispatch);
    }
  }, [inView]);

  return (
    <div>
      {nextPage > 1 ? (
        <div className="h-24 flex justify-center items-center">
          {searching ? (
            <LoadingCircle />
          ) : (
            <div
              className="flex justify-center items-center h-10 text-sm opacity-40"
              ref={ref}
            >
              <SwipeVertical />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-10 text-sm opacity-50">
          {activeLanguage.seeMore.thatisall}
        </div>
      )}
    </div>
  );
};

export default SeeMore;
