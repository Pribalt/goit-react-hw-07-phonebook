import { BallTriangle } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#000000"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Overlay>
  );
};
