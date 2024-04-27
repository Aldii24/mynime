"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
// import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 450 });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 450);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  // }, []);

  const option = {
    height: isMobile ? "195" : "390",
    width: isMobile ? "320" : "640",
  };

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4">
        <div className="pt-8">
          <YouTube
            className="yt-size"
            onReady={(event) => event.target && event.target.pauseVideo()}
            opts={option}
            videoId={youtubeId}
            onError={() => alert("Videonya lagi error bro, sorry yawww😥")}
          />
        </div>
        <div>
          <Image
            src={"/images/videoplayer.png"}
            width={600}
            height={390}
            alt={"logo"}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
