import axios from "axios";
import { AppConfigData } from "./CommonServices";

export const getProperty = async (ReqData, accessToken) => {
  try {
    const response = await axios({
      method: "POST",
      url: AppConfigData.APIBasePath + "propertymanagement/api/Property/PropertyList",
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
