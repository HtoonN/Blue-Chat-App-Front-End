import logOutControl from "../LogOutControl";
import blockUser from "./Funcitons/BlockUser";
import deleteAccount from "./Funcitons/DeleteAccount";
import deleteChat from "./Funcitons/DeleteChat";
import deleteGroup from "./Funcitons/DeleteGroup";
import deleteGroupMessage from "./Funcitons/DeleteGroupMessage";
import deleteMessageForFriend from "./Funcitons/DeleteMessageForFriend";
import leaveGroup from "./Funcitons/LeaveGroup";
import unfriend from "./Funcitons/Unfriend";

const conformationFunctions = {
  deleteGroup: deleteGroup,
  deleteChat: deleteChat,
  blockUser: blockUser,
  unfriend: unfriend,
  leaveGroup: leaveGroup,
  deleteMessageFri: deleteMessageForFriend,
  deleteGroupMessage: deleteGroupMessage,
  deleteAccount: deleteAccount,
  logOutControl: logOutControl,
};

export default conformationFunctions;
