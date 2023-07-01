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
import addGroup from "../Utlities/Group/AddGroup";
import leaveGroup from "../Utlities/Group/LeaveGroup";
import editGroup from "../Utlities/Group/EditGRoup";

const GroupMenuList = ({ isAdmin, isMember, arr, profileimage }) => {
  const [BtnAdd, setBtnAdd] = useState(false);
  const [BtnLeave, setBtnLeave] = useState(false);
  const [BtnManage, setBtnManage] = useState(false);

  return (
    <div>
      <List className=" w-full border-b-2 ">
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
                      <Button
                        onClick={() => {
                          addGroup(arr.groupId, setBtnAdd);
                        }}
                        disabled={BtnAdd}
                        sx={{ color: "#1e3a8a" }}
                      >
                        Add
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      editGroup(arr.groupId, setBtnManage);
                    }}
                    disabled={BtnManage}
                    sx={{ color: "#1e3a8a" }}
                  >
                    Manage
                  </Button>
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
