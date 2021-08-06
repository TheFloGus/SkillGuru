import Skeleton from "react-loading-skeleton";
import React, { useState } from "react";

function Video({ video }) {
  const [open, setOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [frameLoading, setFrameLoading] = useState(true);
//   console.log(video);

  return (
    <li className="video">
      <div className="video-info">
        <div className="frame">
          {imageLoading && <Skeleton width={300} height={169} />}
          <img
            key={video.id}
            src={video.snippet.thumbnails.high.url}
            width="300px"
            height="225px"
            onLoad={() => setImageLoading(false)}
            onClick={() => setOpen(!open)}
          ></img>
        </div>
        <div className="video-text">
          <h3 className="video-title">
            {video.snippet.title || <Skeleton />}
          </h3>
          <p className="video-description">{`${video.snippet.description.substring(
            0,
            250
          )}...` || <Skeleton count={5}/>}</p>
        </div>
      </div>

      <div className="video-big" onClick={(e) => e.preventDefault()}>
        {open && (
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={"video-frame" + (frameLoading ? "" : "show")}
            onLoad={() => setFrameLoading(false)}
          ></iframe>
        )}
        {open && frameLoading && <Skeleton width={960} height={540} />}
      </div>
    </li>
  );
}

export default Video;
