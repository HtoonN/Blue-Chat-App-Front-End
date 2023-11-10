import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSeeGroupMemberModel } from "../../Redux/Reducer/OpenCloseReducer";
import { Dialog, DialogTitle, List } from "@mui/material";
import getGroupMembersDataByMember from "../../Utlities/Group/GetGroupMemberDataByMember";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import MemberListModelItem from "./MemberListModelItems";

const MemberListModel = () => {
  const open = useSelector((state) => state.openClose.seeGroupMemberModel);
  const selectedUser = useSelector((state) => state.userDatas.selectedUser);
  const chatFriend = useSelector((state) => state.userDatas.chatFriend);
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.userDatas.memberList);

  const handleClose = () => {
    dispatch(setSeeGroupMemberModel());
  };

  useEffect(() => {
    if (selectedUser.status === "group" && !chatFriend.status && open) {
      getGroupMembersDataByMember(
        chatFriend.data.members.memberList,
        dispatch,
        memberList.list
      );
    }
  }, [selectedUser, open]);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {open && (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
            {activeLanguage.memberList.title}
          </DialogTitle>
          <div className="opacity-50 text-sm w-full text-right pr-5 ">
            {activeLanguage.memberList.total} -
            <span className="font-bold"> {memberList.list.length}</span>
          </div>
          <div className="w-full h-[500px]">
            {memberList.list.length ? (
              <List className="w-full h-full overflow-y-scroll">
                {memberList.list.map((data, index) => {
                  let admin = false;
                  if (data.userId === chatFriend.data.admin[0].id) {
                    admin = true;
                  }
                  return (
                    <MemberListModelItem
                      data={data}
                      isAdmin={admin}
                      key={index}
                      activeLanguage={activeLanguage}
                    />
                  );
                })}
              </List>
            ) : (
              <EmptyMessagedComponent
                message={activeLanguage.memberList.message}
              />
            )}
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default MemberListModel;
