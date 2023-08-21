import { Cancel } from "@mui/icons-material";
import { LinearProgress, ListItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cancelSendingFile from "../Utlities/CancelSendingFile";

const SendingMessge = ({ selectedUserId }) => {
  const sendingFileStatusQueue = useSelector(
    (state) => state.userDatas.sendingFileStatusQueue
  );

  const dispatch = useDispatch();

  return (
    <>
      {Object.entries(sendingFileStatusQueue).map(([k, v], i) => {
        if (v?.receiver === selectedUserId) {
          return (
            <ListItem key={i}>
              {!sendingFileStatusQueue[k].senting && (
                <Cancel
                  className="absolute top-1 right-1 bg-red-500 rounded-xl p-1 border-white text-white border-2 cursor-pointer"
                  onClick={() => {cancelSendingFile(v.tempId, dispatch)}}
                />
              )}
              <div className="ml-auto w-[300px] bg-blue-900 text-white px-2 py-1 rounded-lg ">
                {sendingFileStatusQueue[k].length && (
                  <div className="p-2">
                    File -{" "}
                    <span className="text-xs font-extralight opacity-50">
                      {sendingFileStatusQueue[k].senting
                        ? "100"
                        : parseInt(
                            (sendingFileStatusQueue[k].receivedSize /
                              sendingFileStatusQueue[k].length) *
                              100,
                            10
                          )}
                      %
                    </span>
                    <LinearProgress
                      variant="determinate"
                      value={
                        sendingFileStatusQueue[k].senting
                          ? 100
                          : parseInt(
                              (sendingFileStatusQueue[k].receivedSize /
                                sendingFileStatusQueue[k].length) *
                                100,
                              10
                            )
                      }
                    />
                  </div>
                )}
                <div className="p-2">
                  Message -{" "}
                  {sendingFileStatusQueue[k].senting ? (
                    <span className="text-xs font-extralight opacity-50">
                      Senting...
                    </span>
                  ) : (
                    <span className="text-xs font-extralight opacity-50">
                      Waiting...
                    </span>
                  )}
                  {sendingFileStatusQueue[k].senting && <LinearProgress />}
                </div>
              </div>
            </ListItem>
          );
        }
      })}
      <div />
    </>
  );
};

export default SendingMessge;
