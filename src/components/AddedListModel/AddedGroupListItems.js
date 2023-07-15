import { Button, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import changeImageStringToObj from "../../Utlities/ChangeImageStringToObj";
import cancelAdd from "../../Utlities/Group/CancelAdd";
import GroupImageComponent from "../GroupImageComponent";

const AddedGRoupListItems = ({ data }) => {
  const [BtnCancel, setBtnCancel] = useState(false);

  const dispatch = useDispatch();

  let profileImage = "";

  if (data.profileImage) {
    profileImage = changeImageStringToObj(data.profileImage);
  }

  return (
    <ListItem
      className="border-b-2  hover:bg-gray-100 cursor-pointer"
      secondaryAction={
        <Button
          onClick={() => cancelAdd(data.groupId, setBtnCancel, dispatch)}
          disabled={BtnCancel}
          sx={{ color: "#1e3a8a" }}
        >
          Cancel
        </Button>
      }
    >
      <GroupImageComponent data={data} profileImage={profileImage} />
      <ListItemText
        primary={data.name}
        secondary={`${data.type} ( Members - ${data.members.totalMember} )`}
      />
    </ListItem>
  );
};

export default AddedGRoupListItems;
