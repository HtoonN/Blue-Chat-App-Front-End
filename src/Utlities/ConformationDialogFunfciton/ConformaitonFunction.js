import blockUser from "./Funcitons/BlockUser";
import deleteChat from "./Funcitons/DeleteChat";
import deleteGroup from "./Funcitons/DeleteGroup";
import unfriend from "./Funcitons/Unfriend";

const conformationFunctions = {
  deleteGroup: deleteGroup,
  deleteChat: deleteChat,
  blockUser: blockUser,
  unfriend: unfriend,
};

export default conformationFunctions;
