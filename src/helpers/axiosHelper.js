import axios from "axios";

const apiEp = "http://www.omdbapi.com/?apikey=4c8be5cb&";

export const fetchMovie = (title) => {
  try {
    const response = axios.get(apiEp + "t=" + title);

    // console.log(response);
    return response;
  } catch (error) {
    return error.message;
  }
};
