import { TLoginValues, TRegisterValues } from '../../schemas/UserSchemas';

export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IUserContext {
  UserLogin: (data: TLoginValues) => Promise<void>;
  User: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  Users: IUser[];
  UserRegister: (data: TRegisterValues) => Promise<void>;
  GetAllUsers: (data: string) => Promise<void>;
}

export interface IUser {
  length: number;
  email: string;
  name: string;
  avatar: string;
  id: number;
}

export interface IDataLoginRequest {
  data: {
    accessToken: string;
    user: IUser;
  };
}

export type TUserRegister = (data: TRegisterValues) => Promise<void>;
