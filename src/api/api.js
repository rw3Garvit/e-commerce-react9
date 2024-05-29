import axios from "axios";
import { base_url } from "../constant";

let get_product = async (endpoint) => {
  let res = await axios.get(base_url);
  return res;
};

let add_proudct = async (endpoint) => {
  let res = await axios.post(base_url);
  return res;
};
