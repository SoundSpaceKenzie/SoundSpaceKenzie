import { useContext } from 'react';
import { Container } from './style';
import { UserContext } from '../../providers/User/UserContext';

export const UserTitle = () => {
  const { User } = useContext(UserContext);

  return (
    <Container>
      <h2>Olá,{User.name}</h2>
      <p>O que você está escutando hoje?</p>
    </Container>
  );
};
