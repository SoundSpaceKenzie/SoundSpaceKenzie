import { StyledHeader } from './styled';
import ExitBTN from '../../assets/imgs/HeaderAssets/logout.png';
import Logo from '../../assets/imgs/logoSpaceSound.svg';
import { UserContext } from '../../providers/User/UserContext';
import { useContext } from 'react';

export const Header = () => {
  const { userLogout, User } = useContext(UserContext);
  return (
    <StyledHeader>
      <div className='Resp-container'>
        <img src={Logo} className='Logo' alt=' Logo SoundSpace' />
        <div className='right-side'>
          <img src={User.avatar} alt='Login Usuário' className='UserIcon' />
          <img
            src={ExitBTN}
            alt='Exit Button'
            className='ExitBtn'
            onClick={() => userLogout()}
          />
        </div>
      </div>
    </StyledHeader>
  );
};
