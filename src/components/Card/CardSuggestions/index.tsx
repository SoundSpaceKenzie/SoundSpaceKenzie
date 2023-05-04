import { useState } from 'react';
import { IUser } from '../../../providers/User/@types';
import { StyledCardSuggestions } from '../CardSuggestions/style';

interface IProps {
  user: IUser;
}

export const CardSuggestions = ({ user }: IProps) => {
  const [seguindo , setSeguindo] = useState(false)

  return (
    <StyledCardSuggestions>
      <div className='contanier_user'>
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
      </div>{
      !seguindo ? 
      <button onClick={()=>setSeguindo(true)}>Seguir</button> :
      <button className='seguindo' onClick={()=>setSeguindo(false)}>Seguindo</button>}
    </StyledCardSuggestions>
  );
};
