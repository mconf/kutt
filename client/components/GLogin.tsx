import React from "react";
import { GoogleLogin } from "react-google-login";
import GoogleButton from "react-google-button";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function GLogin(props) {
  const onSuccess = res => {
    props.onSuccess(res.profileObj); //Returns profile obj
  };

  return (
    <div>
      <GoogleLogin
        clientId={publicRuntimeConfig.GOOGLE_CLIENT_ID}
        hostedDomain={publicRuntimeConfig.MAIL_ORG}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={props.onFailure}
        cookiePolicy={"single_host_origin"}
        render={renderProps => (
          <GoogleButton
            style={{ width: "100%", marginTop: 30 }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign in with Google
          </GoogleButton>
        )}
      />
    </div>
  );
}

export default GLogin;
