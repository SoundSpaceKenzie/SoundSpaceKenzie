export interface IPostProps {
  children: React.ReactNode;
}

export interface IPostContext {
  posts: IPost[];
  CreatePost: (data: IPostRegisters ) => Promise<void>
}
  
export interface IPostRegisters{
  
    description: string,
    link: string,
    type: string,
    like?: [],
    user: {
      name: string,
      avatar: string,
    },
    userId: number,
  
}

export interface IData {
  data: [IPost];
}

export interface IPost {
  description: string;
  id: number;
  like: [ILike];
  link: string;
  type: string;
  name: string;
  user: IUser;
  userId: number;
}

export interface ILike {
  useID: number;
}

interface IUser {
  name: string;
  avatar: string;
}


interface IDataPost {
  description: string;
  link: string;
  type: string;
  like: [ILike];
  userId: number;
}
