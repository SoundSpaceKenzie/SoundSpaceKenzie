import { Styledfooter } from './style';
import { VscDiffAdded } from 'react-icons/vsc';

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Footer = ({ setModalOpen }: IProps) => {
  return (
    <Styledfooter>
      <button onClick={() => setModalOpen(true)}>
        <VscDiffAdded className='Icons' />
      </button>
    </Styledfooter>
  );
};
