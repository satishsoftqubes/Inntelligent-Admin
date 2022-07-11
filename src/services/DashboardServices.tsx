import axios from "axios";
import { AppConfigData } from "./CommonServices";

export const getDashboardChart = async (ReqData, accessToken) => {
  try {
    const response = await axios({
      method: "POST",
      url:
        AppConfigData.APIBasePath +
        "dashboardmanagement/api/Dashboard/GetDashboardChartAccountData",
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

export const getDashboardCount = async (ReqData: any, accessToken) => {
  try {
    const response = await axios({
      method: "POST",
      url: AppConfigData.APIBasePath + "dashboardmanagement/api/Dashboard/GetDashboardCount",
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
