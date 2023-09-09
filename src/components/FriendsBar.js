import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAFriendsData from "../Utlities/Friend/GetAFriendsData";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import FriendBarIteam from "./FriendBar/FriendBarIteam";

const FriendsBar = () => {
  const arr = useSelector((state) => state.userDatas.friendsList.list);
  const friId = useSelector((state) => state.userDatas.friendsDatas.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    getAFriendsData(friId, dispatch);
  }, []);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {arr.length ? (
        <div className="flex h-24 w-full overflow-x-scroll items-center pl-1 overflow-y-hidden border-b-2 pr-10 set-scrollbar color-scrollbar">
          {arr.map((arr, index) => {
            let profileimage;

            if (arr) {
              if (arr.profileImage) {
                profileimage = changeImageStringToObj(arr.profileImage);
              }
            }

            return (
              <FriendBarIteam
                arr={arr}
                key={index}
                profileimage={profileimage}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-24 w-full pl-1 border-b-2 text-center pt-9 text-gray-950 opacity-50">
          {activeLanguage.friendbox.nofriendmessage}
        </div>
      )}
    </div>
  );
};

export default FriendsBar;
