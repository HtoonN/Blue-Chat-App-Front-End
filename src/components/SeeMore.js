import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import addMoreDatas from "../Utlities/AddMoreData";
import LoadingCircle from "./LoadingCircle";

const SeeMore = ({ nextPage, data }) => {
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.99,
  });

  useEffect(() => {
    if (inView && nextPage) {
      addMoreDatas(data.path, nextPage, setSearching, dispatch, data.function);
    }
  }, [inView]);

  return (
    <div>
      {nextPage ? (
        <div className="h-24 flex justify-center items-center">
          {searching ? (
            <LoadingCircle />
          ) : (
            <div
              className="flex justify-center items-center h-10 text-sm opacity-50"
              ref={ref}
            >
              See More..
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-10 text-sm opacity-50">
          That's all
        </div>
      )}
    </div>
  );
};

export default SeeMore;
