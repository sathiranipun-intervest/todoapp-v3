import axios from "axios";
import {HeaderKey} from "../configs/configs";

const httpRequest = async (apiURL, httpMethod = "GET", body = {}) => {
  try {
    const response = await axios({
      url: apiURL,
      method: httpMethod,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: HeaderKey,
      },
    });
    return response.data;
  } catch (e) {
    console.log("Error :", e);
  }
};

export {httpRequest};
