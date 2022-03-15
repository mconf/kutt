import React from 'react';
import { GoogleLogout } from 'react-google-login'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();


function GLogout() {
    const onSuccess = () => {
        //Can be enabled to showcase if a google logout has been made
        //alert('Logout made successfully!')
    };

    return (
        <div>
            <GoogleLogout
            clientId={publicRuntimeConfig.GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GLogout