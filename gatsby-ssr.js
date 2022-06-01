/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import axios from "axios";
import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";


export const wrapRootElement = ({ element }) => {
  return (
    <ReactKeycloakProvider 
    authClient={{}}
>
    {element}
</ReactKeycloakProvider>
  );
};
