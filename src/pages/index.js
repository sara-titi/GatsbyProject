import React from "react";
import Home from "./home";
import { useKeycloak } from "@react-keycloak/web";
import store from "../stateManagment/store";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const IndexPage = ()=> {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <>
        {keycloak.authenticated ? <Home /> : 
        (<div>
          <p>The user is  NOT authenticated</p>
          <button type="button" className="btn btn-light" onClick={() => keycloak.login()}>Login</button>
        </div>
      )}
      </>

      {/* <div>{keycloak.authenticated ? <Home /> : authenticated} </div> */}
     
    </div>
  );
}

export default IndexPage;
