import { IUser } from '../../../providers/User/@types';
import { StyledCardSuggestions } from '../CardSuggestions/style';

interface IProps {
  user: IUser;
}

export const CardSuggestions = ({ user }: IProps) => {
  return (
    <StyledCardSuggestions>
      <div className='contanier_user'>
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
      </div>
      <button>Seguir</button>
    </StyledCardSuggestions>
  );
};
