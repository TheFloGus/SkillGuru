import React, { useState } from "react";
import youtube from "./api/youtube";
import Video from "./Video";

function MyCourse({ course }) {
  const [open, setOpen] = useState(false);
  const [videos, setVideos] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(1);

  async function handleSubmit(pageToken) {
    const response = await youtube
      .get("/playlistItems", {
        params: {
          playlistId: course.playlist,
          pageToken: pageToken,
        },
      })
      .catch((err) => console.log(err));
    setVideos(response);
    setLoaded(true);
  }

  function handleVideos() {
    if (!open) {
      setOpen(true);
      handleSubmit();
    }
  }

  function pageHandler(pageToken, e, action = true) {
    handleSubmit(pageToken);
    let number = counter;
	if(number > (Math.ceil(videos.data.pageInfo.totalResults / 5))){
		number = Math.ceil(videos.data.pageInfo.totalResults / 5)	
	}
    action ? number++ : number--;
    setCounter(number);
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
              onClick={(e) => {
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
        {loaded && open && (
          <ul className="videos">
            {videos.data.items.map((video) => (
              <Video video={video} key={video.id} />
            ))}
          </ul>
        )}
        {loaded && open && (
          <div className="video-buttons">
            {videos.data.prevPageToken ? (
              <button
                className="video-button"
                onClick={(e) =>
                  pageHandler(videos.data.prevPageToken, e, false)
                }
              >
                {`< Previous`}
              </button>
            ) : (
              <div className="button-placeholder"></div>
            )}

            <p className="page-counter">{counter}</p>

            {videos.data.nextPageToken ? (
              <button
                className="video-button"
                onClick={(e) => pageHandler(videos.data.nextPageToken, e)}
              >{`Next >`}</button>
            ) : (
              <div className="button-placeholder"></div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MyCourse;
