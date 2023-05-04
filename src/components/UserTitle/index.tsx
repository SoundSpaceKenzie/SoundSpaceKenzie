import { useContext, useState, useEffect } from 'react';
import { Container } from './style';
import { UserContext } from '../../providers/User/UserContext';
import { IUser } from '../../providers/User/@types';

export const UserTitle = () => {
  const [userLocal, setUserLocal] = useState<IUser>();
  const { User, setUser } = useContext(UserContext);
  const userLog = localStorage.getItem('@SoundSpace:User');

  useEffect(() => {
    if (userLog) {
      setUserLocal(JSON.parse(userLog));
      setUser(JSON.parse(userLog));
    } else {
      setUserLocal(User);
    }
  }, []);

  return (
    <Container>
      <h2>Olá,{userLocal?.name}</h2>
      <p>O que você está escutando hoje?</p>
    </Container>
  );
};
