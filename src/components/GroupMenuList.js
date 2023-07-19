import { Diversity1 } from "@mui/icons-material";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useRef, useState } from "react";
import leaveGroup from "../Utlities/Group/LeaveGroup";
import groupAddFun from "../Utlities/Group/GroupAddFunction";
import { useDispatch, useSelector } from "react-redux";
import cancelAdd from "../Utlities/Group/CancelAdd";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import ManageMenuBar from "./FindFriendsModel/ManageMenuBar";

const GroupMenuList = ({ arr }) => {
  const [BtnAdd, setBtnAdd] = useState(false);
  const [BtnLeave, setBtnLeave] = useState(false);
  const [BtnCancel, setBtnCancel] = useState(false);

  const [open, setOpen] = useState(false);

  const friendMenuRef = useRef();

  let isMember = false;
  let isAdmin = false;
  let added = false;

  let profileimage = {};

  const dispatch = useDispatch();
  const groups = useSelector((state) => state.userDatas.profileDatas.groups);
  const addedGroup = useSelector(
    (state) => state.userDatas.friendsDatas.add.groups
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
      <List className=" w-full border-b-2  hover:bg-gray-100 cursor-pointer">
        <div>
          <ListItem
            secondaryAction={
              <div>
                {!isAdmin ? (
                  <div>
                    {isMember ? (
                      <Button
                        onClick={() => {
                          leaveGroup(arr.groupId, setBtnLeave);
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
                        setOpen((pre) => !pre);
                      }}
                      sx={{ color: "#1e3a8a" }}
                      ref={friendMenuRef}
                    >
                      Manage
                    </Button>

                    {/* Menu for Manage */}
                    <ManageMenuBar
                      open={open}
                      setOpen={setOpen}
                      friendMenuRef={friendMenuRef}
                    />
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
