import React from "react";
import Skeleton from "react-loading-skeleton";

function PlaceholderLoading() {
  return (
    <li className="video" style={{margin: '30px 15px'}}>
      <div className="video-info">
        <div className="frame">
          <Skeleton width={300} height={169} />
        </div>
        <div className="video-text">
          <h3 className="video-title"><Skeleton /></h3>
          <p className="video-description">
              <Skeleton count={4} />
          </p>
        </div>
      </div>
    </li>
  );
}

export default PlaceholderLoading;