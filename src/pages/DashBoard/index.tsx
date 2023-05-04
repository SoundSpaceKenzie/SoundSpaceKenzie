import { Header } from '../../components/Header';
import { ListPost } from '../../components/ListPost';
import { StyledDashboard } from './style';
import { Footer } from '../../components/Footer';

import { useState } from 'react';
import Modal from '../../components/Modal/modal';
import { UserTitle } from '../../components/UserTitle';

export const DashBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledDashboard>
      <Header />
      <aside className='Sidebar'>
        <button>Criar Post</button>
        <button>Pesquisar</button>
        <button>Usuarios</button>
      </aside>
      <main>
        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <button onClick={() => setModalOpen(true)}> abrir modal </button>
        <UserTitle />

        <div>
          <ListPost />
        </div>

        <h1>Feed</h1>
        <ul>
          <li>
            <img src='' alt='' />
            <p>Nome: Pessoa</p>
            <div>
              Posts
              <img src='' alt='' />
              <img src='' alt='' />
              <p>Nome: Descrição</p>
              <link rel='stylesheet' href='' />
            </div>
          </li>
        </ul>
      </main>

      <aside className='User-Sugestions'>
        <h3>Sugestões</h3>
        <ul>
          <li>
            <span>Nome da Pessoa</span>
            <button>Seguir</button>
          </li>
          <li>
            <span>Nome da Pessoa</span>
            <button>Seguir</button>
          </li>
        </ul>
      </aside>
      <Footer />
    </StyledDashboard>
  );
};
