import request from "./config";
import { API_PATH } from "./path";

/**
 * 登录系统 resAuthUserlogin
 * 退出系统 resAuthUserlogout
 */
export const apiAuthUserlogin = (data: object) => request(API_PATH + "auth/userlogin", data, "POST");
export const apiAuthUserlogout = (data: object) => request(API_PATH + "auth/userlogout", data, "POST");