import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { errorHandle } from './ErrorHandle';

import NProgress from 'nprogress';

// 后端接口返回通用格式
type Result<T> = {
  code: number;
  message: string;
  data: T;
};

/**
 *
 * AxiosRequestConfig：axios传递参数的类型
 *
 * AxiosInstance：axios实例对象类型
 *
 * AxiosResponse：axios请求返回值类型
 *
 * AxiosError： axios响应错误类型
 *
 */

export default class HttpRequest {
  // axios 实例
  private instance: AxiosInstance;
  // 基础配置，url和超时时间
  private readonly baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 30000 };

  constructor(config?: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // const token = localStorage.getItem('token') as string;
        // config.headers!.Authorization = token;
        NProgress.start();
        return config;
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );

    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        NProgress.done();
        return res.data;
      },
      (err: AxiosError) => {
        NProgress.done();
        errorHandle(err.response as AxiosResponse);
        return Promise.reject(err.response);
      }
    );
  }

  // 定义请求方法
  public request<T = any>(config: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.request(config);
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.get(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.delete(url, config);
  }
}
