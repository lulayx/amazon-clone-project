import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions 
  // baseURL: "http://127.0.0.1:5001/clone-2cb10/us-central1/api",

  //deployed on render.com
  baseURL: "https://amazon-api-deploy-5fyp.onrender.com/",
});

export { axiosInstance };
