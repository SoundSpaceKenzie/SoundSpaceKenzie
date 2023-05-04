export interface IPostProps {
  children: React.ReactNode;
}

export interface IPostContext {
  posts: IPost[];
  comments: IComments[];
  CreatePost: (data: IPostRegisters) => Promise<void>;
  GetComments: (dataComments: IGetComments) => Promise<void>;
  NewComments: (dataComments: INewComments) => Promise<void>;
  DeleteComments: (dataComments: IDeleteComments) => Promise<void>;
  PatchLike: (dataComments: IDataLike) => Promise<void>;
}

export interface IPostRegisters {
  description: string;
  link: string;
  type: string;
  like?: [];
  user: {
    name: string;
    avatar: string;
  };
  userId: number;
}

export interface IData {
  data: [IPost];
}

export interface IDataComments {
  data: [IComments];
}

export interface IDataLike {
  postID: number;
  like: ILike[];
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
  userID: number;
}

interface IUser {
  name: string;
  avatar: string;
}

export interface IDataPost {
  data: {
    description: string;
    link: string;
    type: string;
    user: IUser;
    like: [ILike];
    userId: number;
  };
}

export interface IComments {
  text: string;
  userId: number;
  postId: number;
  id: number;
}

export interface IGetComments {
  idPost: number;
}

export interface INewComments {
  text: string;
  userId: number;
  postId: number;
}

export interface IDeleteComments {
  postId: number;
  commentId: number;
}
