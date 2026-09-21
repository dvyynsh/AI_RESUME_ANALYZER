import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-resume-analyzer-uc6g.onrender.com/api",
});

export default api;