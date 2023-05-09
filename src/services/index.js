import { create } from 'apisauce';
import UserMobx from '../mobx/UserMobx';
import { env } from '../utils/env/config';
export const ip = 'http://192.168.1.169:2000';

export const MODE_API = {
  DEVELOPMENT: env.url_dev,
  UAT: env.url_uat,
  PRODUCTION: env.url_prd,
};
export const CONNECT_API = MODE_API[`${env.node_env}`.toUpperCase()];

const api = create({
  baseURL: MODE_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

const apiupload = create({
  baseURL: MODE_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
/**
 * ฟังก์ชั่นสำหรับ ยิงข้อมูล
 * @param {string} path
 * @param {{}} obj
 * @return {{}}
 */
export const POST = (path, obj, token = UserMobx.returnToken) =>
  new Promise((resolve, reject) => {
    api
      .post(path, obj, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else {
          response.data
            ? reject(response.data)
            : reject({ success: false, message: response.problem });
        }
      })
      .catch((err) => reject(err));
  });

export const POST_LARK = (path, obj) =>
  new Promise((resolve, reject) => {
    api
      .post(path, obj, {
        headers: {
          Authorization: env.token,
        },
      })
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else {
          response.data
            ? reject(response.data)
            : reject({ success: false, message: response.problem });
        }
      })
      .catch((err) => reject(err));
  });

/**
 * ฟังก์ชั่นสำหรับ ดึงข้อมูล
 * @param {string} path
 *
 */
export const GET = (path, token = UserMobx.returnToken) =>
  new Promise((resolve, reject) => {
    api
      .get(
        path,
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else {
          response.data
            ? reject(response.data)
            : reject({ success: false, message: response.problem });
        }
      })
      .catch((err) => reject(err));
  });

export const UPLOAD = (path, formdata, token = UserMobx.returnToken) =>
  new Promise((resolve, reject) => {
    apiupload
      .post(path, formdata, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else {
          response.data
            ? reject(response.data)
            : reject({ success: false, message: response.problem });
        }
      })
      .catch((err) => reject(err));
  });

/* ################################################## URL ################################################## */
export const LOGIN = `/authen/login`;
export const REGISTER = `/authen/register`;
export const GET_PROFILE = `/authen/get_profile`;
