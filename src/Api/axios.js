import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2cb10/us-central1/api",

  baseURL: "https://us-central1-clone-2cb10.cloudfunctions.net/api",

  //deployed on render.com
  // baseURL: "https://amazon-api-1z2u.onrender.com/",

  // baseURL: "http://localhost:2025",
});

export { axiosInstance };
