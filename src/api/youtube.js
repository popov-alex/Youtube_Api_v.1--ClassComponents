import axios from "axios";

const KEY = "AIzaSyCSJC-w3v5V1yyizidMu0n8oqbcgKbtLd0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY, type: "video" },
});
