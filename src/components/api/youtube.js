import axios from "axios";
const KEY = "AIzaSyAtH_7GRvuZQtsSXE5L9WAKE6jB-evg6aA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
