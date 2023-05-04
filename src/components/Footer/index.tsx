import { Styledfooter } from './style';
import { VscDiffAdded } from 'react-icons/vsc';

export const Footer = ({ setModalOpen }) => {
  return (
    <Styledfooter>
      <button onClick={() => setModalOpen(true)}>
        <VscDiffAdded className='Icons' />
      </button>
    </Styledfooter>
  );
};
