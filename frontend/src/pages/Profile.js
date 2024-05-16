import React from 'react';
import Dashboard from '../components/Dashboard';
import ProfileInfo from '../images/ProfileInfo.svg';
import '../styles/Profile.css'
function Profile() {
  return (
    <div>
        <Dashboard />
        <div className='ProfileInfo'>
            <img src={ProfileInfo} width='100%'></img>
        </div>
    </div>
  );
}

export default Profile;
