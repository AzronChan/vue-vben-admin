import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';

export interface UserInSertParam {
  age: number;
birth: string
curCity: string;

education	:string;

faceUrl	:string;

height : string;

homeTown	:string;

nickname	:string;

password	:string;

photos	:string;

platform: number

sex: number;

starSign	:string;

tags	:string;

userPhone	:string;

weight:string
}

enum Api {
  InsertUser = '/user/admin/insertUser',
}

/**
 * @description: user login api
 */
export function insertUserApi(params: UserInSertParam) {
  return defHttp.post<UserInSertParam>(
    {
      url: Api.InsertUser,
      params,
    },
    {
      errorMessageMode: 'message',
    },
  );
}
