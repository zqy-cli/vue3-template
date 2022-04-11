import { defHttp } from '../../utils/http/axios';
//import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';
import { GetUserInfoModel } from './model/userModel';
//import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/api/base/login',
  Logout = '/api/base/logout',
  GetUserInfo = '/api/base/getUserInfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params) {
  return defHttp.post(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: 'none',
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.post<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}
