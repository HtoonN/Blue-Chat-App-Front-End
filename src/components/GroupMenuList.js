import { Diversity1 } from "@mui/icons-material";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import leaveGroup from "../Utlities/Group/LeaveGroup";
import groupAddFun from "../Utlities/Group/GroupAddFunction";
import { useDispatch, useSelector } from "react-redux";
import cancelAdd from "../Utlities/Group/CancelAdd";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import selectFunction from "../Utlities/SelectedFunction";
import { setFindFriendsModel } from "../Redux/Reducer/OpenCloseReducer";
import getGroupDatasFromGroupList from "../Utlities/GetGroupDatasFromGroupList";

const GroupMenuList = ({ arr }) => {
  const [BtnAdd, setBtnAdd] = useState(false);
  const [BtnLeave, setBtnLeave] = useState(false);
  const [BtnCancel, setBtnCancel] = useState(false);

  let isMember = false;
  let isAdmin = false;
  let added = false;

  let profileimage = {};

  const dispatch = useDispatch();
  const groups = useSelector((state) => state.userDatas.profileDatas.groups);
  const addedGroup = useSelector(
    (state) => state.userDatas.friendsDatas.add.groups
  );
  const groupListDatas = useSelector(
    (state) => state.userDatas.groupListDatas.list
  );

  if (arr.profileImage) {
    profileimage = changeImageStringToObj(arr.profileImage);
  }
  addedGroup.map((group) => {
    if (group === arr.groupId) {
      added = true;
    }
  });
  groups.map((group) => {
    if (group.id === arr.groupId) {
      if (group.status === "owner") {
        isAdmin = true;
      } else {
        isMember = true;
      }
    }
  });

  return (
    <div>
      <List className=" w-full border-b-2  hover:bg-gray-100 ">
        <div>
          <ListItem
            secondaryAction={
              <div>
                {!isAdmin ? (
                  <div>
                    {isMember ? (
                      <Button
                        onClick={() => {
                          leaveGroup(arr.groupId, setBtnLeave, dispatch);
                        }}
                        disabled={BtnLeave}
                        sx={{ color: "#ff0000" }}
                      >
                        Leave
                      </Button>
                    ) : (
                      <div>
                        {added ? (
                          <Button
                            onClick={() => {
                              cancelAdd(arr.groupId, setBtnCancel, dispatch);
                            }}
                            disabled={BtnCancel}
                            sx={{ color: "#1e3a8a" }}
                          >
                            Cancel Request
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              groupAddFun(arr.groupId, setBtnAdd, dispatch);
                            }}
                            disabled={BtnAdd}
                            sx={{ color: "#1e3a8a" }}
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        const data = getGroupDatasFromGroupList(
                          arr.groupId,
                          groupListDatas
                        );
                        selectFunction(
                          arr.groupId,
                          "group",
                          dispatch,
                          data,
                          "owner"
                        );
                        dispatch(setFindFriendsModel());
                      }}
                      sx={{ color: "#1e3a8a" }}
                    >
                      Manage
                    </Button>
                  </>
                )}
              </div>
            }
          >
            <ListItemAvatar>
              <Avatar>
                {arr.profileImage ? (
                  <img
                    src={`http://localhost:3001/api/v1/account/user/get_image/${profileimage.public_id}/${profileimage.version}/${profileimage.format}/${profileimage.resource_type}`}
                  />
                ) : (
                  <Diversity1 className="text-blue-900" />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={arr.name}
              secondary={`${arr.type} ( Members - ${arr.members.totalMember} )`}
            />
          </ListItem>
          {/* <div className="flex flex-row justify-around md:hidden ">
        {!isAdmin ? (
          <div className="hidden md:block">
            {isMember ? (
              <Button
                onClick={() => {
                  unFriend(arr.groupId);
                }}
              >
                Leave
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addPeople(arr.groupId);
                }}
              >
                Add
              </Button>
            )}
          </div>
        ) : (
          <Button
            onClick={() => {
              addPeople(arr.groupId);
            }}
          >
            Manage
          </Button>
        )}
      </div> */}
        </div>
      </List>
    </div>
  );
};

export default GroupMenuList;
