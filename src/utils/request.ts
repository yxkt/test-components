import { extend } from 'umi-request';
import { notification, message } from 'antd';
import { history } from 'umi';
import util from '@/utils/util';

const baseUrl: string | undefined =
  process.env.NODE_ENV === 'production' ? '' : '/apiManage1';
const token = sessionStorage.getItem('token') || 'token存在'
interface codeMessage {
  [key: number]: string;
}
const codeMessage: codeMessage = {
  100200: '服务器成功返回请求的数据。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response?.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    //处理超时等错误
    // notification.error({
    //   description: '您的网络发生异常，无法连接服务器',
    //   message: '网络异常',
    // });
  }
  return response;
};

const request = extend({
  errorHandler,
  prefix: baseUrl,
  // timeout: 6000,
  headers: {
    Authorization: token,
    'x-requested-with': 'XMLHttpRequest',
  },
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      ...options,
    },
  };
});

// 处理相关错误信息
request.interceptors.response.use(async (response) => {
  const { status } = response;
  if (status === 403) {
    history.replace('/access');
  }
  if (status === 401 || status === 302) {
    history.replace('/login');
  }
  return response;
});

request.use(async (ctx, next) => {
  const { req } = ctx;
  const { options } = req;
  const { skipBizError } = options;

  await next();
  const { res } = ctx;
  if (!skipBizError) {
    if (res?.code && res?.code === 100302) {
      return util.loginRedirectUri();
    } else if (res?.code && res?.code !== 100200 && res?.code !== 130039) {
      message.error(res?.msg);
      return res;
      // throw new Error(res);
    }
  }
});

export default request;
