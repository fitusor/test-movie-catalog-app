import React from 'react';
import UserInfo from '../UserInfo';
import SearchInput from '../SearchInput';
import '../../styles/Header/index.css';

const Header = () => {
  return (
    <header>
      <p>Movie catalog</p>
      <SearchInput />
      <UserInfo />
    </header>
  );
};

export default Header;
