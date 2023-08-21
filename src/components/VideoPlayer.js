import {
  Pause,
  PlayArrow,
  Replay,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import LoadingCircle from "./LoadingCircle";

const VideoPlayer = ({ data }) => {
  const [volumeOfVideo, setVolumeOfVideo] = useState(50);
  const [durationOfVideo, setDurationOfVideo] = useState(0);
  const [currentDurationOfVideo, setCurrentDurationOfVideo] = useState(0);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [openVolumebar, setOpenVolumebar] = useState(false);
  const [loading, setLoading] = useState(false);

  const videoRef = useRef();

  const getDurationOfVideo = () => {
    const videoIntervalTime = setInterval(() => {
      if (play) {
        const clearVideoInterval = () => {
          clearInterval(videoIntervalTime);
        };

        setCurrentDurationOfVideo(parseFloat(videoRef.current.currentTime));
        if (parseFloat(videoRef.current.currentTime) >= durationOfVideo) {
          clearVideoInterval();
        }
      }
    }, 1000);
  };

  const videoPlay = () => {
    if (videoRef.current.paused) {
      setPlay(true);
      videoRef.current.play();
      setDurationOfVideo(videoRef.current.duration);
      getDurationOfVideo();
    }
  };

  const videoLoad = () => {
    setLoading(true);
    videoRef.current.load();
  };

  const videoStop = () => {
    if (!videoRef.current.paused) {
      setPlay(false);
      videoRef.current.pause();
    }
  };

  const videoReply = () => {
    setPlay(true);
    setDurationOfVideo(videoRef.current.duration);
    videoRef.current.currentTime = 0;
    videoRef.current.play();

    getDurationOfVideo();
  };

  const videoDuration = (e) => {
    setCurrentDurationOfVideo(parseFloat(e.target.value));
    videoRef.current.currentTime = parseFloat(e.target.value);
  };

  const setVolumeBarFun = () => {
    setOpenVolumebar((pre) => !pre);
  };

  const muteFun = () => {
    setMute(true);
    videoRef.current.muted = true;
  };

  const unMuteFun = () => {
    setMute(false);
    videoRef.current.muted = false;
  };

  const volumebar = (e) => {
    if (mute) {
      unMuteFun();
    }
    const valumValue = parseFloat(e.target.value) / 100;
    setVolumeOfVideo(e.target.value);
    videoRef.current.volume = valumValue.toFixed(1);
  };

  /* useEffect(() => {
      return () => {
        if (play) {
          videoStop();
        }
      };
    }, []); */

  return (
    <>
      <div className="max-w-[300px] max-h-[300px] rounded-lg relative">
        <div className="w-full h-full absolute bg-tranaparent z-20 flex flex-col items-center justify-end">
          {durationOfVideo ? (
            <div className="opacity-0 hover:opacity-100 ">
              <div className="w-full h-7 flex flex-row items-center justify-around mb-4 relative ">
                <div>
                  <div>
                    {openVolumebar && (
                      <div className="absolute left-[28px]  bottom-[40px] cursor-pointer">
                        {mute ? (
                          <VolumeOff
                            className="text-black pb-[5px]"
                            onClick={unMuteFun}
                          />
                        ) : (
                          <VolumeMute
                            className=" text-black pb-[5px]"
                            onClick={muteFun}
                          />
                        )}
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          value={volumeOfVideo}
                          onChange={volumebar}
                        />
                      </div>
                    )}
                  </div>
                  <IconButton
                    sx={{
                      opacity: "0.6",
                      "&:hover": { opacity: "1" },
                    }}
                    onClick={setVolumeBarFun}
                  >
                    <VolumeUp className="text-black" />
                  </IconButton>
                </div>

                {play ? (
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#0d47a1",
                      opacity: "0.6",
                      "&:hover": { backgroundColor: "#0d47a1", opacity: "1" },
                    }}
                    onClick={videoStop}
                  >
                    <Pause />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#0d47a1",
                      opacity: "0.6",
                      "&:hover": { backgroundColor: "#0d47a1", opacity: "1" },
                    }}
                    onClick={videoPlay}
                  >
                    <PlayArrow />
                  </IconButton>
                )}

                <IconButton
                  onClick={videoReply}
                  sx={{
                    opacity: "0.6",
                    "&:hover": { opacity: "1" },
                  }}
                >
                  <Replay className="text-black" />
                </IconButton>
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  max={durationOfVideo}
                  value={currentDurationOfVideo}
                  onChange={videoDuration}
                  className="w-[250px]"
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {loading ? (
                <LoadingCircle />
              ) : (
                <Button onClick={videoLoad} sx={{ color: "#0d47a1" }}>
                  Tap to load video
                </Button>
              )}
            </div>
          )}
        </div>

        <video
          ref={videoRef}
          className="max-w-[300px] max-h-[300px]  object-contain bg-gray-500 z-10"
          preload="none"
          onLoadedData={() => {
            setLoading(false);
            setDurationOfVideo(videoRef.current.duration);
          }}
        >
          <source
            src={`${process.env.REACT_APP_API_A}/get_video?public_id=${data.public_id}&version=${data.version}&type=${data.type}&format=${data.format}`}
            type={`${data.type}/${data.format}`}
          />
        </video>
      </div>
    </>
  );
};

export default VideoPlayer;
