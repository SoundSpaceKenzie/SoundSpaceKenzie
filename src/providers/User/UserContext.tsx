import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  IUser,
  IUserContext,
  IUserContextProps,
  IDataLoginRequest,
} from './@types';
import Api from '../../services/Api';
import { TLoginValues, TRegisterValues } from '../../schemas/UserSchemas';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [User, setUser] = useState<IUser>(Object);
  const [Users, setUsers] = useState<IUser[]>([]);

  const navigate = useNavigate();

  const GetAllUsers = async (token: string) => {
    try {
      const { data } = await Api.get('/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const UserLogin = async (dataForm: TLoginValues) => {
    try {
      const { data }: IDataLoginRequest = await Api.post('/login', dataForm);
      setUser(data.user);
      localStorage.setItem('@SoundSpace:Token', data.accessToken);
      localStorage.setItem('@SoundSpace:User', JSON.stringify(data.user));
      GetAllUsers(data.accessToken);
      navigate('/dashboard');
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        MessageError(String(err.response.data));
      }
    }
  };

  const UserRegister = async (data: TRegisterValues) => {
    const newData = {
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      password: data.password,
    };
    try {
      await Api.post('/register', newData);
      toast.success('Conta criada com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('E-mail já existe');
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@SoundSpace:Token');
    localStorage.removeItem('@SoundSpace:User');
    setUser(Object);
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        UserLogin,
        User,
        UserRegister,
        Users,
        GetAllUsers,
        setUser,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function MessageError(message: string) {
  if (message.includes('user')) {
    toast.error('Usuário não encontrado', {
      theme: 'dark',
      style: { backgroundColor: '#343B41', color: '#fff' },
    });
  } else if (message.includes('password')) {
    toast.error('Senha incorreta', {
      theme: 'dark',
      style: { backgroundColor: '#343B41', color: '#fff' },
    });
  }
}
