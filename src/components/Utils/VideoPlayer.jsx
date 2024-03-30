"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device width is less than or equal to 450px
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const option = {
    height: isMobile ? "195" : "390",
    width: isMobile ? "320" : "640",
    playerVars: {
      autoplay: 1,
    },
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
            height={600}
            alt={"logo"}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
