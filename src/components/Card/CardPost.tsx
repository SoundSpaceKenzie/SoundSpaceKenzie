import { Spotify } from 'react-spotify-embed';
import ReactPlayer from 'react-player/youtube';
import { FiHeart } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { StyledCard } from './style';
import { UserContext } from '../../providers/User/UserContext';
import { useContext, useState } from 'react';
import { PostContext } from '../../providers/Post/PostContex';

interface IProps {
  url: string;
  description: string;
  name: string;
  avatar: string;
  type: string;
  postID: number;
  userPostID: number;
}

export const CardPost = ({
  postID,
  name,
  avatar,
  url,
  description,
  type,
  userPostID,
}: IProps) => {
  const { GetComments, comments, NewComments, DeleteComments } =
    useContext(PostContext);
  const { User } = useContext(UserContext);

  const [newComment, setNewComment] = useState<string>('');
  const [showComments, setShowComments] = useState(0);

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

  return (
    <StyledCard>
      <div className='contanier_user'>
        <img src={avatar} alt='Usuário' />
        <p>{name}</p>
      </div>

      <div className='CardMedia'>
        {type === 'Spotify' ? (
          <Spotify link={url} width={300} height={255}></Spotify>
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
        <button>
          <FiHeart className='Icons' />
        </button>
        <button>
          <BiCommentDetail className='Icons' />
        </button>
      </div>

      <p>{description}</p>
      <button>Ver todos os comentários</button>
    </StyledCard>
  );
};
