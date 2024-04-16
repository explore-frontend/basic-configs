import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

// 初始化然后加一点简单逻辑（比如遇到错误的时候提示出来，登录或权限类异常处理逻辑等）
export const fetch: Fetch = axios.create();

export type FetchEventHandler = (params: {
    src: string;
    name: string;
    message?: string;
    result_type: string;
    category: string;
}) => void;

fetch.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export interface Fetch extends AxiosInstance {
    errorHandler?: FetchEventHandler;
    successHandler?: FetchEventHandler;
}

// TODO 这里需要把成功或失败的结果上报上去，用于做线上报警
fetch.errorHandler = (e) => {
    console.error('接口校验失败', e);
};

export type ResponseDataType<T extends AxiosResponse> = T['data'];
