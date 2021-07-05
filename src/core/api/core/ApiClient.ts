import axios, {AxiosError, AxiosResponse, ResponseType} from 'axios'
import {ApiSdkLogger} from '../helper/Logger'
import * as qs from 'qs'

export interface RequestOption {
  readonly qs?: any
  readonly headers?: any
  readonly body?: any
  readonly timeout?: number
  readonly responseType?: ResponseType
}

export interface ApiClientParams {
  readonly baseUrl: string
  readonly headers?: any
  readonly requestInterceptor?: (options?: RequestOption) => Promise<RequestOption> | RequestOption
  readonly proxy?: string
  readonly mapData?: (_: any) => any
  readonly mapError?: (_: any) => never
}

export interface ApiClientApi {
  readonly baseUrl: string
  readonly get: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly post: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly postGetPdf: <T = any>(uri: string, options?: RequestOption) => Promise<Blob>
  readonly getPdf: <T = any>(uri: string, options?: RequestOption) => Promise<Blob>
  readonly delete: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly put: <T = any>(uri: string, options?: RequestOption) => Promise<T>
}

export type StatusCode =
  200 |
  301 |
  302 |
  400 |
  401 |
  403 |
  404 |
  500 |
  504;

export class ApiError extends Error {
  constructor(public code: StatusCode, public message: string, public error?: Error) {
    super(message);
  }
}

export type Method = 'POST' | 'GET' | 'PUT' | 'DELETE';

export class ApiClient {

  private readonly fetch: (method: Method, url: string, options?: RequestOption) => Promise<any>

  readonly postGetPdf: (url: string, options?: RequestOption) => Promise<Blob>

  readonly getPdf: (url: string, options?: RequestOption) => Promise<Blob>

  readonly baseUrl: string

  constructor({
    baseUrl,
    headers,
    requestInterceptor,
    mapData,
    mapError,
  }: ApiClientParams) {
    const client = axios.create({
      baseURL: baseUrl,
      headers: {...headers,},
    })

    this.baseUrl = baseUrl

    this.fetch = async (method: Method, url: string, options?: RequestOption) => {
      const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor)
      return client.request({
        method,
        url,
        headers: builtOptions?.headers,
        params: options?.qs,
        data: options?.body,
        paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'})
      })
        .then(mapData ?? ((_: AxiosResponse) => _.data))
        .catch(mapError ?? ((_: AxiosError) => {
          ApiSdkLogger.error('[ApiClient]', _)
          const errorMessage = (() => {
            switch (_.response?.status) {
              case 400:
                return 'BAD_REQUEST'
              default:
                return _.response?.data
            }
          })()
          throw new ApiError(_.response?.status as StatusCode, errorMessage)
        }));
    };

    /** TODO(Alex) Didn't find any way to download pdf with axios but it should exist. */
    this.postGetPdf = async (url: string, options?: RequestOption) => {
      const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor)
      return fetch(baseUrl + url, {
        method: 'POST',
        headers: builtOptions?.headers,
        body: JSON.stringify(builtOptions?.body),
      }).then(_ => _.blob())
    }

    this.getPdf = async (url: string, options?: RequestOption) => {
      const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor)
      return fetch(baseUrl + url, {
        method: 'GET',
        headers: builtOptions?.headers,
      }).then(_ => _.blob())
    }
  }

  private static readonly buildOptions = async (
    options?: RequestOption,
    headers?: any,
    requestInterceptor: (_?: RequestOption) => RequestOption | Promise<RequestOption> = _ => _!
  ): Promise<RequestOption> => {
    const interceptedOptions = await requestInterceptor(options)
    return {
      ...interceptedOptions,
      headers: {...headers, ...interceptedOptions?.headers},
    }
  };

  readonly get = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('GET', uri, options)
  }

  readonly post = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('POST', uri, options)
  }

  readonly delete = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('DELETE', uri, options)
  };

  readonly put = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('PUT', uri, options);
  };
}
