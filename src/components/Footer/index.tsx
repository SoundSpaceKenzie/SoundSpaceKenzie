import { Styledfooter } from './style';
import { VscDiffAdded } from 'react-icons/vsc';

export const Footer = ({setModalOpen}) => {
  return (
    <Styledfooter>
      <button></button>
      <button onClick={()=>setModalOpen(true)}><VscDiffAdded className="Icons"/></button>
      <button></button>
    </Styledfooter>
  );
};
