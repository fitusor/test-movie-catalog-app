import React from 'react';
import '../../styles/Loader/index.css';
import { FC } from 'react';

interface ILoaderProps {
  size?: 'small' | 'medium' | 'large'; // Размеры загрузчика
}

const Loader: FC<ILoaderProps> = ({ size = 'medium' }) => {
  return (
    <div
      className={`loader loader-${size}`}
      data-testid="loader"
    >
      <div className="loader-inner"></div>
    </div>
  );
};

export default Loader;
