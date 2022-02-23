import React from 'react';
import { GoogleLogin } from 'react-google-login'
import GoogleButton from 'react-google-button'
import { refreshTokenSetup } from './utils/refreshToken'
import getConfig from "next/config";


const { publicRuntimeConfig } = getConfig();

function Login({ parentCallback }) {

    const onSuccess = (res) => {
        //Sees profile object that google returns
        //console.log('[Login Succes] currentUser: ', res.profileObj);

        refreshTokenSetup(res) //Refreshes tokens so it doesnt auto-logout
        parentCallback(res.profileObj) //Returns profile obj
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res); // Error message
    };

    return (
        <div>
            <GoogleLogin
                clientId={publicRuntimeConfig.GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <GoogleButton
                        style={{ width: "100%", marginTop: 30 }}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        Sign in with Google
                    </GoogleButton>
                )}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login