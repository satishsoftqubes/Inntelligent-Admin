import axios from "axios";
import { AppConfigData } from "./CommonServices";

export const getSuspectList = async (ReqData: any, accessToken) => {
  try {
    const response = await axios({
      method: "POST",
      url: AppConfigData.APIBasePath + "suspects/api/Suspects/GetSuspectsList",
      data: ReqData,
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
