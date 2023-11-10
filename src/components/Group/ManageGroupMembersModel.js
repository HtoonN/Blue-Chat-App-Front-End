import { Button, Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setManageGroupMembersModel } from "../../Redux/Reducer/OpenCloseReducer";
import GroupMemberList from "./GroupMemberList";
import GroupAddList from "./GroupAddList";
import GroupAcceptList from "./GroupAcceptList";

const ManageGroupMembersModel = () => {
  const [BtnMembers, setBtnMembers] = useState(true);
  const [BtnAccept, setBtnAccept] = useState();
  const [BtnAdd, setBtnAdd] = useState();

  const dispatch = useDispatch();
  const open = useSelector((state) => state.openClose.manageGroupMembersModel);

  const data = useSelector((state) => state.userDatas.chatFriend);

  const handleClose = () => dispatch(setManageGroupMembersModel());

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {data.status && (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px] ">
            <div className="text-base">
              {activeLanguage.groupMenuBoxdetail.managemember.title} - ({" "}
              {data.data.name} )
            </div>
          </DialogTitle>
          <div className="overflow-hidden flex flex-row">
            <Button
              className="flex-1"
              sx={{
                borderBottom: BtnMembers
                  ? "2px solid #1e3a8a"
                  : "2px solid transparent",
                color: "#1e3a8a",
                fontWeight: BtnMembers ? "600" : "400",
                opacity: BtnMembers ? "" : "0.5",
                borderRadius: "0px",
                "&:active": {
                  fontWeight: "600",
                },
              }}
              onClick={() => {
                if (!BtnMembers) {
                  setBtnAccept(false);
                  setBtnAdd(false);
                  setBtnMembers(true);
                }
              }}
            >
              {activeLanguage.groupMenuBoxdetail.managemember.member.header}
            </Button>
            <Button
              className="flex-1"
              sx={{
                borderBottom: BtnAccept
                  ? "2px solid #1e3a8a"
                  : "2px solid transparent",
                color: "#1e3a8a",
                fontWeight: BtnAccept ? "600" : "400",
                opacity: BtnAccept ? "" : "0.5",
                borderRadius: "0px",
                "&:active": {
                  fontWeight: "600",
                },
              }}
              onClick={() => {
                if (!BtnAccept) {
                  setBtnAccept(true);
                  setBtnAdd(false);
                  setBtnMembers(false);
                }
              }}
            >
              {activeLanguage.groupMenuBoxdetail.managemember.accept.header}
            </Button>
            <Button
              className="flex-1"
              sx={{
                borderBottom: BtnAdd
                  ? "2px solid #1e3a8a"
                  : "2px solid transparent",
                color: "#1e3a8a",
                fontWeight: BtnAdd ? "600" : "400",
                opacity: BtnAdd ? "" : "0.5",
                borderRadius: "0px",
                "&:active": {
                  fontWeight: "600",
                },
              }}
              onClick={() => {
                if (!BtnAdd) {
                  setBtnAccept(false);
                  setBtnAdd(true);
                  setBtnMembers(false);
                }
              }}
            >
              {activeLanguage.groupMenuBoxdetail.managemember.add}
            </Button>
          </div>
          <div className="h-[500px]">
            {BtnMembers && <GroupMemberList activeLanguage={activeLanguage} />}
            {BtnAdd && <GroupAddList />}
            {BtnAccept && <GroupAcceptList activeLanguage={activeLanguage} />}
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ManageGroupMembersModel;
