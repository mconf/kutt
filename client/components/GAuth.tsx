import React from 'react';
import { GoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from './utils/refreshToken'

const clientId = '599605619584-shbhg17403n9gc49afij6ljb92qn8omk.apps.googleusercontent.com';


function Login() {
    const onSuccess = (res) => {
        console.log('[Login Succes] currentUser: ', res.profileObj);

        refreshTokenSetup(res)
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res);
    };

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login