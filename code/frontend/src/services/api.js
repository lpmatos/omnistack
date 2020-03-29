import axios from "axios"
import { config } from "../settings/config";

const api = axios.create({
  baseURL: config.ENDPOINT_BACKEND
});

export default api;
