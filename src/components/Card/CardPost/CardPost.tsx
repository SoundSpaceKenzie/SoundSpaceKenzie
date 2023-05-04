import { Spotify } from 'react-spotify-embed';
import ReactPlayer from 'react-player/youtube';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { StyledCard } from './style';
import { UserContext } from '../../../providers/User/UserContext';
import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../../providers/Post/PostContex';
import { ILike } from '../../../providers/Post/@types';

interface IProps {
  url: string;
  description: string;
  name: string;
  avatar: string;
  type: string;
  postID: number;
  userPostID: number;
  likes: [ILike];
}

export const CardPost = ({
  postID,
  name,
  avatar,
  url,
  description,
  type,
  userPostID,
  likes,
}: IProps) => {
  const { GetComments, comments, NewComments, DeleteComments, PatchLike } =
    useContext(PostContext);
  const { User } = useContext(UserContext);

  const [newComment, setNewComment] = useState<string>('');
  const [showComments, setShowComments] = useState(0);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (likes) {
      const filter = likes.filter((element) => element.userID === User.id);
      if (filter.length > 0) {
        setLike(true);
      }
    }
  }, []);

  const Show = (id: number) => {
    GetComments({ idPost: id });
    setNewComment('');
    if (id === showComments) {
      setShowComments(0);
    } else {
      setShowComments(id);
    }
  };

  const AddComment = (id: number) => {
    if (newComment !== '') {
      NewComments({ postId: id, text: newComment, userId: User.id });
      setNewComment('');
    }
  };

  const Like = () => {
    if (!likes) {
      PatchLike({ postID: postID, like: [{ userID: User.id }] });
    } else {
      const filter = likes.filter((element) => element.userID === User.id);

      if (filter.length > 0) {
        const filterRemove = likes.filter(
          (element) => element.userID !== User.id
        );
        setLike(false);
        PatchLike({ postID: postID, like: filterRemove });
      } else {
        PatchLike({ postID: postID, like: [...likes, { userID: User.id }] });
        setLike(true);
      }
    }
  };

  return (
    <StyledCard>
      <div className='contanier_user'>
        <img src={avatar} alt='Usuário' />
        <p>{name}</p>
      </div>

      <div className='CardMedia'>
        {type === 'Spotify' ? (
          <Spotify link={url} width={272} height={255}></Spotify>
        ) : (
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='250px'
            controls={true}
          />
        )}
      </div>

      <div className='contanier_icons'>
        <button onClick={Like}>
          {like ? (
            <AiFillHeart className='Icons' id='LikeButton' />
          ) : (
            <AiOutlineHeart className='Icons' />
          )}
        </button>
        <button onClick={() => Show(postID)}>
          <BiCommentDetail className='Icons' />
        </button>
      </div>

      <p className='description'>
        <strong>{name}</strong> {description}
      </p>
      <button className='all_comments' onClick={() => Show(postID)}>
        Ver todos os comentários
      </button>
      <div style={{ display: showComments === postID ? 'block' : 'none' }}>
        <ul className='contanier_allComments'>
          {comments
            ? comments.map((comment) => (
                <li className='comments' key={comment.id}>
                  <p>{comment.text}</p>
                  {comment.userId === User.id ? (
                    <button
                      onClick={() =>
                        DeleteComments({
                          commentId: comment.id,
                          postId: postID,
                        })
                      }
                    >
                      X
                    </button>
                  ) : userPostID === User.id ? (
                    <button
                      onClick={() =>
                        DeleteComments({
                          postId: postID,
                          commentId: comment.id,
                        })
                      }
                    >
                      X
                    </button>
                  ) : null}
                </li>
              ))
            : null}
        </ul>
        <div className='contanier_postComment'>
          <input
            type='text'
            onChange={(e) => setNewComment(e.currentTarget.value)}
            value={newComment}
          />
          <button onClick={() => AddComment(postID)}>Publicar</button>
        </div>
      </div>
    </StyledCard>
  );
};
