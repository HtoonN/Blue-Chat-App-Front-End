import {
  setAcceptFun,
  setBody,
  setData,
  setHeader,
  setOpenCD,
} from "../../Redux/Reducer/ConfirmationDialog";

const callFunForConformationDialog = (handleClose, dispatch, data) => {
  dispatch(setHeader(data.header));
  dispatch(setBody(data.body));
  dispatch(setAcceptFun(data.funName));
  dispatch(setData(data.data));
  dispatch(setOpenCD());
  handleClose();
};
export default callFunForConformationDialog;
