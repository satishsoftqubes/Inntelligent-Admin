import axios from "axios";
import { AppConfigData } from "./CommonService";

export const getClientSelection = async (accessToken) => {
  try {
    const response = await axios({
      method: "POST",
      url: AppConfigData.APIBasePath + "AdminPanel/api/Clients/GetClientsList",
      data: "",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accessToken,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
