import { getAxiosInstance } from './api';

export const getAllApis = (callback) => {
  getAxiosInstance()
    .get('/tweets')
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getAllHashTags = (callback) => {
  getAxiosInstance()
    .get('/hashTags')
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getAllUsers = (callback) => {
  getAxiosInstance()
    .get('/users')
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
