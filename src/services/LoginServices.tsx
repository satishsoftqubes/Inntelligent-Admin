import React from "react";
import axios from "axios";
import { AppConfigData } from "./CommonServices";

export const Login = async (ReqData) => {
  try {
    const response = await axios({
      method: "POST",
      url: AppConfigData.APIBasePath + "authmanagement/api/Auth/Login",
      data: ReqData,
      // headers: {
      //   "Content-Type": "application/json",
      //   accept: "*/*",
      //   // Authorization: "Bearer ",
      // },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const ClientSelect = async (ReqData) => {
  try {
    const resdata = await axios({
      method: "POST",
      url: AppConfigData.APIBasePath + "authmanagement/api/Auth/Login",
      data: ReqData,
      // headers: {
      //   "Content-Type": "application/json",
      //   accept: "*/*",
      //   // Authorization: "Bearer ",
      // },
    });
    return resdata;
  } catch (error) {
    return error;
  }
};

export const Logout = () => {
  return <div>Logout</div>;
};
