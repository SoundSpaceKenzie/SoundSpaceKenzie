
import { StyledHeader } from './styled';
import ExitBTN from '../../assets/imgs/HeaderAssets/logout.png';
import EmptyUserIcon from '../../assets/imgs/HeaderAssets/Empty-UserIcon.jpg';
import Logo from '../../assets/imgs/logoSpaceSound.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <div className='Resp-container'>
        <img src={Logo} className='Logo' alt=' Logo SoundSpace' />
        <div className='right-side'>
          <img src={EmptyUserIcon} alt='Login Usuário' className='UserIcon' />
          <img src={ExitBTN} alt='Exit Button' className='ExitBtn' />
        </div>
      </div>
    </StyledHeader>
  );
};

