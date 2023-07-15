import { Diversity1 } from "@mui/icons-material";
import {
  Avatar,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useRef, useState } from "react";
import leaveGroup from "../Utlities/Group/LeaveGroup";
import editGroup from "../Utlities/Group/EditGRoup";
import groupAddFun from "../Utlities/Group/GroupAddFunction";
import { useDispatch, useSelector } from "react-redux";
import cancelAdd from "../Utlities/Group/CancelAdd";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";

const GroupMenuList = ({ arr }) => {
  const [BtnAdd, setBtnAdd] = useState(false);
  const [BtnLeave, setBtnLeave] = useState(false);
  const [BtnManage, setBtnManage] = useState(false);
  const [BtnCancel, setBtnCancel] = useState(false);

  const [open, setOpen] = useState(false);

  const friendMenuRef = useRef();

  /*  const [isMember, setIsMember] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [added, setAdded] = useState(false); */

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
      //setAdded(true);
      added = true;
    }
  });
  groups.map((group) => {
    if (group.id === arr.groupId) {
      if (group.status === "owner") {
        //setIsAdmin(true);
        isAdmin = true;
      } else {
        //setIsMember(true);
        isMember = true;
      }
    }
  });

  const handleClose = () => {
    setOpen(false);
  };

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
                        editGroup(arr.groupId, setBtnManage);
                        setOpen(true);
                      }}
                      disabled={BtnManage}
                      sx={{ color: "#1e3a8a" }}
                      ref={friendMenuRef}
                    >
                      Manage
                    </Button>

                    {/* Menu for Manage */}
                    <Popper
                      open={open}
                      anchorEl={friendMenuRef.current}
                      placement="bottom-start"
                      transition
                      disablePortal
                      sx={{ zIndex: "50" }}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left-top"
                                : "left-bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList>
                                <MenuItem
                                  onClick={() => {
                                    handleClose();
                                    console.log("Click");
                                  }}
                                  sx={{ color: "blue" }}
                                >
                                  Manage Members
                                </MenuItem>
                                <Divider />
                                <MenuItem
                                  onClick={() => {
                                    handleClose();
                                    console.log("Click");
                                  }}
                                  sx={{ color: "blue" }}
                                >
                                  Manage Profile
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
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
