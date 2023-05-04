import { Link } from 'react-router-dom';
import LoginForm from '../../components/Form/LoginForm/LoginForm';
import Logo from '../../assets/imgs/logoSpaceSound.svg';
import { StyleLoginPage } from './style';

const Login = () => {
  return (
    <StyleLoginPage>
      <div className='Login-Container'>
        <img src={Logo} alt='Logo SoundSpace' />
        <p id='Login-Container_title'>
          “Conecte-se com a sua música, compartilhe com o mundo e seja a estrela
          do seu próprio show”
        </p>
        <h2>Login</h2>
        <LoginForm />
        <p>Ainda não tem conta? </p>
        <Link className='Login-Container_link' to={'/register'}>
          Cadastre-se aqui
        </Link>
      </div>
    </StyleLoginPage>
  );
};

export default Login;
