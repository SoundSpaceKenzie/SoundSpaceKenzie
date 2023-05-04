import { StyledCardSuggestions } from '../CardSuggestions/style';
export const CardSuggestions = ({user}) => {
return(
  <StyledCardSuggestions>
    <div className='contanier_user'>
    <img src={user.avatar} alt={user.name}/>
    <p>{user.name}</p>
    </div>
    <button>Seguir</button>
  </StyledCardSuggestions>
)
}