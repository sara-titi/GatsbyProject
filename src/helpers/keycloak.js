
import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    realm: "gatsbyy", // realm as configured in Keycloak
    url: "http://localhost:8080/auth/", // URL of the Keycloak server
    clientId: "gatsby-uii", // client id as configured in the realm in Keycloak
    loginRequired: false,
  })

//  window.keycloak = keycloak;
export default keycloak;