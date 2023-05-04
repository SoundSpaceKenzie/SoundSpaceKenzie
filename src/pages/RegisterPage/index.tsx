import { FormRegister } from "../../components/Form/RegisterForm/Form"
import Logo from '../../assets/imgs/logoSpaceSound.svg';
import { StyleRegisterPage } from "./style";

export const RegisterPage = () =>{

  return(
    <StyleRegisterPage>
      <div className="register_contanier">
        <div>
          <img src={Logo} alt="logoSpaceSound"/>
        </div>
        <div className="contanier_form">
            <h1>Cadastro</h1>
          <FormRegister/>
        </div>
      </div>
    </StyleRegisterPage>
  )
}