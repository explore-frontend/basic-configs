import { notification } from "antd";
import Axios, { type AxiosRequestConfig } from "axios";

const axios = Axios.create({
  baseURL: "/",
  timeout: 1000 * 10, // 默认接口超时时间10s
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => {
    const data = response.data;
    const request = response.request as AxiosRequestConfig;
    const isJson =
      !response.headers["content-disposition"] && (!request.responseType || request.responseType === "json");
    if (response.status === 200 && (!isJson || data.result === 1)) {
      return data;
    }

    const errorMsg = data?.error_msg || data?.error_message || data?.message || response.statusText || "Error";
    notification.error({
      message: `请求错误 ${response.statusText}: ${typeof response.data === "string" ? response.data : ""}`,
      description: errorMsg,
    });
    return Promise.reject(new Error(errorMsg));
  },
  (error) => {
    if (error.message === "canceled") {
      return Promise.reject(error);
    }
    if (error.code === "ECONNABORTED" && error.message.includes("timeout of")) {
      notification.error({
        message: "网络错误",
        description: `接口：${error.config.url as string} 超时，请联系研发同学排查`,
      });
      return Promise.reject(error);
    }
    const status = error.response?.status;
    if (status) {
      notification.error({
        message: "网络错误",
        description:
          error.response.status + " " + error.response.statusText + ": " + error.response?.request?.responseURL,
      });
      return Promise.reject(error.response);
    }

    notification.error({
      message: "网络错误",
      description: error.message + ": " + error.config?.url,
    });
    return Promise.reject(error);
  },
);

// eslint-disable-next-line @typescript-eslint/unbound-method
export const request = axios.request;

export default axios;
