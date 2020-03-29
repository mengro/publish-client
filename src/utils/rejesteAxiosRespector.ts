import axios from 'axios';

export default function () {
  // Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  const data = response.data
  const success = data.code === 1
  return {
    ...data,
    success,
    completeResponse: response
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
}
