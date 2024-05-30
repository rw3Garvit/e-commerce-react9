import axios from "axios";
import { base_url } from "../constant";

let get_api = async (endpoint) => {
  let res = await axios.get(base_url + endpoint);
  return res;
};

let post_api = async (endpoint) => {
  let res = await axios.post(base_url);
  return res;
};

export { get_api, post_api };
