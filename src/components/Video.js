import React, { useState } from "react";

function Video({ video }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="video">
      <div className="frame">
        <img
          key={video.id}
          src={video.snippet.thumbnails.high.url}
          width="300px"
          height="225px"
          onClick={() => setOpen(!open)}
        ></img>
      </div>
      {open && (
        <iframe
          width="1280"
          height="720"
          src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </li>
  );
}

export default Video;
