import React, { useState, Suspense } from "react";
import youtube from "./api/youtube";
import Video from "./Video";
import PlaceholderLoading from "./PlaceholderLoading";

function MyCourse({ course }) {
  const [open, setOpen] = useState(false);
  const [videos, setVideos] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageCounter, setPageCounter] = useState(1);
  const placeholderArray = new Array(5).fill(<PlaceholderLoading />);

  function handleSubmit(pageToken) {
    setLoading(true);
    youtube
      .get("/playlistItems", {
        params: {
          pageToken: pageToken,
          playlistId: course.playlist,
        },
      })
      .then((response) => {
        setVideos(response);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  function handleVideos() {
    if (!open) {
      setOpen(true);
      Object.keys(videos).length || handleSubmit();
    }
  }

  function pageHandler(pageToken, e, action = true) {
    e.stopPropagation();
    handleSubmit(pageToken);
    let page = pageCounter;
    if (page > Math.ceil(videos.data.pageInfo.totalResults / 5)) {
      page = Math.ceil(videos.data.pageInfo.totalResults / 5);
    }
    action ? page++ : page--;
    setPageCounter(page);
  }

  return (
    <>
      <div
        className={"my-course " + (open ? "my-course-open" : "")}
        onClick={handleVideos}
      >
        <div className="my-course-title">
          <h3>{course.name}</h3>
          {open && (
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="my-course-button"
            >
              ✕
            </button>
          )}
        </div>
        <p className="my-course-technologies">
          Languages:
          {course.technologies.map((technique, number) => {
            return (
              <span className="my-course-technique" key={number}>
                {number === course.technologies.length - 1
                  ? technique
                  : technique + ","}
              </span>
            );
          })}
        </p>
        {open &&
          (loading ? (
            <ol className="videos">
              {placeholderArray.map((skeleton) => skeleton)}
            </ol>
          ) : (
            <ol className="videos">
              {videos.data.items.map((video) => (
                <Video video={video} key={video.id} />
              ))}
            </ol>
          ))}
        {open && (
          <div className="video-buttons">
            <button
              className="video-button"
              disabled={loading || !videos.data.prevPageToken}
              onClick={(e) => pageHandler(videos.data.prevPageToken, e, false)}
            >
              {`< Previous`}
            </button>

            <p className="page-counter">{pageCounter}</p>

            <button
              className="video-button"
              disabled={loading || !videos.data.nextPageToken}
              onClick={(e) => pageHandler(videos.data.nextPageToken, e)}
            >{`Next >`}</button>
          </div>
        )}
      </div>
    </>
  );
}

export default MyCourse;
