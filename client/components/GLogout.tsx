import React from 'react';
import { GoogleLogout } from 'react-google-login'

const clientId = '599605619584-shbhg17403n9gc49afij6ljb92qn8omk.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully!')
    };

    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout