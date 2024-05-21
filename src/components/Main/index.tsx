import { FC } from 'react';
import Gallery from '../Gallery';
import Title from '../Title';
import '../../styles/global.css';

const Main: FC = () => {
  return (
    <div className="Main">
      <Title />
      <Gallery />
    </div>
  );
};

export default Main;
