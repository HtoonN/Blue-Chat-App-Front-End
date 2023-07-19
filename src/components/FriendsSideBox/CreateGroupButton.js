import { Diversity1 } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCreateGroupModel } from "../../Redux/Reducer/OpenCloseReducer";

const CreateGroupButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-10 p-1">
      <Button
        variant="contained"
        sx={{ backgroundColor: "#0d47a1" }}
        className="w-full "
        onClick={() => {
          dispatch(setCreateGroupModel());
        }}
      >
        <Diversity1 className="text-white mr-2 p-1" />
        Create Group +
      </Button>
    </div>
  );
};

export default CreateGroupButton;
