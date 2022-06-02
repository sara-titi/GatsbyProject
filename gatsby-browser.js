import axios from "axios";
import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./src/helpers/keycloak";
import LoadingSpinner from "@components/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
// import store from "../../stateManagment/store";
import store from "./src/stateManagment/store";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

axios.interceptors.request.use(
  async (request) => {
    console.log("request");
    //console.log(request);
    request.headers.requestName = "request Products";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//get response filtter http response before received
// axios.interceptors.response.use(
//   async (response) => {
//     console.log("response");
//     response.headers.requestName = "response Products";
//     // console.log(response)
//     return response;
//   },
//   (error) => {
//     // Any status codes outside range of 2xx
//     // Do something with response error
//     if (error.response) {
//       if (error.response.status === 401) {
//         // Do something, call refreshToken() request for example;
//         // return a request
//         return; //axios_instance(config);
//       }
//       //   if (error.response.status === ANOTHER_STATUS_CODE) {
//       //     // Do something
//       //     return Promise.reject(error.response.data);
//       //   }
//     }
//     return Promise.reject(error);
//   }
// );
axios.interceptors.response.use((response) => {
  if(response.status === 401) {
       alert("You are not authorized");
  }
  if(response.status === 200) {
     console.log('The request succeeded.');
     response.headers.requestName = "response Products";

}
  
  return response;
}, (error) => {
  if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

//    // Request interceptor for API calls
// axiosApiInstance.interceptors.request.use(
//     async config => {
//       const value = await redisClient.get(rediskey)
//       const keys = JSON.parse(value)
//       config.headers = {
//         'Authorization': `Bearer ${keys.access_token}`,
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//       return config;
//     },
//     error => {
//       Promise.reject(error)
//   });

//   // Response interceptor for API calls
//   axiosApiInstance.interceptors.response.use((response) => {
//     return response
//   }, async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const access_token = await refreshAccessToken();
//       axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//       return axiosApiInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   });

const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  const setTokens = (token, idToken, refreshToken) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('idToken', idToken);
  }

export const wrapRootElement = ({ element }) => {
  
    return (
        <ReactKeycloakProvider 
            authClient={keycloak}
            initOptions={{
              // onLoad: 'login-required'
                onLoad: "check-sso",
                silentCheckSsoRedirectUri:window.location.origin + '/silent-check-sso.html',
            }}
        >
              <Provider store={store}>

            {element}
            </Provider>
        </ReactKeycloakProvider>
    )
}
