import '../../styles/UserInfo/index.css';
import UserIcon from '../../assets/images/user-icon.svg';
import React from 'react';

const UserInfo = () => {
  return (
    <div className="user-info">
      <img
        src={UserIcon}
        alt="asd"
        role="img"
      />
      <p>Fitkovich Mikalai</p>
    </div>
  );
};

export default UserInfo;
