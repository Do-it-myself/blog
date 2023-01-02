import React from "react";
import YouTube from "react-youtube";

const postWidth = Math.min(window.innerWidth * 0.95, 720);
const padding = 40;
const imageWidth = Math.round(Math.min(postWidth - padding * 2, 500));
const imageHeight = Math.round((imageWidth * 9) / 16);

console.log(imageWidth);

export default function Youtube({ id }) {
  const opts = {
    height: imageHeight.toString(),
    width: imageWidth.toString(),
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className="youtubeElementFlex">
      <YouTube videoId={id} opts={opts} onReady={onReady} />
    </div>
  );
}
