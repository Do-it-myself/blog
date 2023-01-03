import React from "react";

export default function Youtube({ id }) {
  const postWidth = Math.min(window.innerWidth * 0.95, 720);
  const padding = 40;
  const imageWidth = Math.round(Math.min(postWidth - padding * 2, 500));
  const imageHeight = Math.round((imageWidth * 9) / 16);
    
  return (
    <div className="youtubeElementFlex">
      <iframe
        allowFullScreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="OpenFitness - Efficient Filter"
        width={imageWidth.toString()}
        height={imageHeight.toString()}
        src={"https://www.youtube.com/embed/" + id + "?autoplay=0"}
        id="widget4"
        className="youtubeElement"
      ></iframe>
    </div>
  );
}

