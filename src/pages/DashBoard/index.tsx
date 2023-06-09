import { Header } from '../../components/Header';
import { ListPost } from '../../components/ListPost';
import { StyledDashboard } from './style';
import { Footer } from '../../components/Footer';

import { useContext, useState } from 'react';
import Modal from '../../components/Modal/modal';
import { UserTitle } from '../../components/UserTitle';
import { CardSuggestions } from '../../components/Card/CardSuggestions';
import { UserContext } from '../../providers/User/UserContext';

export const DashBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { Users } = useContext(UserContext);

  return (
    <StyledDashboard>
      <Header />
      <aside className='Sidebar'>
        <button onClick={() => setModalOpen(true)}>Criar Post</button>
      </aside>
      <main>
        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <UserTitle />

        <div>
          <ListPost />
        </div>
      </main>

      <aside className='User-Sugestions'>
        <h3>Sugestões de Usuários</h3>
        <ul>
          {Users.map((user) => (
            <CardSuggestions key={user.id} user={user} />
          ))}
        </ul>
      </aside>
      <Footer setModalOpen={setModalOpen} />
    </StyledDashboard>
  );
};
