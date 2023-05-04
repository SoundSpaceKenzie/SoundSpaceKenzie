import { createContext, useEffect, useState } from 'react';
import Api from '../../services/Api';
import {
  IComments,
  IData,
  IDataComments,
  IDeleteComments,
  IGetComments,
  INewComments,
  IPost,
  IPostContext,
  IPostProps,
  IPostRegisters,
  IDataLike,
} from './@types';

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: IPostProps) => {
  const token = localStorage.getItem('@SoundSpace:Token');
  const [comments, setComments] = useState<IComments[]>([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [posts, setPosts] = useState<IPost[]>([]);

  const GetPosts = async () => {
    try {
      const { data }: IData = await Api.get('/posts', config);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const CreatePost = async (data: IPostRegisters) => {
    try {
      await Api.post('/posts', data, config);
      GetPosts();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetPosts();
  }, []);

  const PatchLike = async (dataLike: IDataLike) => {
    try {
      await Api.patch(
        `/posts/${dataLike.postID}`,
        { like: dataLike.like },
        config
      );
      GetPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const GetComments = async (dataComments: IGetComments) => {
    setComments([]);
    try {
      const { data }: IDataComments = await Api.get(
        `/posts/${dataComments.idPost}/comments`
      );
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const NewComments = async (dataComments: INewComments) => {
    try {
      await Api.post(`/comments`, dataComments, config);
      GetComments({ idPost: dataComments.postId });
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteComments = async (dataComments: IDeleteComments) => {
    try {
      await Api.delete(`/comments/${dataComments.commentId}`, config);
      GetComments({ idPost: dataComments.postId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        CreatePost,
        GetComments,
        comments,
        NewComments,
        DeleteComments,
        PatchLike,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
