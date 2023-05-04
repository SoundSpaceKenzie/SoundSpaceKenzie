import { Spotify } from 'react-spotify-embed';
import ReactPlayer from 'react-player/youtube';
import { FiHeart } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { StyledCard } from './style';

interface IProps {
  url: string;
  description: string;
  name: string;
  avatar: string;
  type: string;
}

export const CardPost = ({ name, avatar, url, description, type }: IProps) => {
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
