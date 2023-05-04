import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { LoginSchema, TLoginValues } from '../../../schemas/UserSchemas';
import { StyledFormLogin } from './style';
import { Input } from '../../Input/Input';
import { UserContext } from '../../../providers/User/UserContext';
import { Button } from '../../Button';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(LoginSchema),
  });

  const { UserLogin } = useContext(UserContext);

  const submit = (data: TLoginValues) => {
    UserLogin(data);
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Email'
        placeholder='Digite aqui seu email'
        id='email'
        error={errors?.email?.message}
        {...register('email')}
      />

      <Input
        type='password'
        label='Senha'
        placeholder='Digite aqui sua senha'
        id='password'
        error={errors?.password?.message}
        {...register('password')}
      />
      <Button text={'Entrar'} backgroundC={'--grey-2'} textColor={'--grey-3'} />
    </StyledFormLogin>
  );
};

export default LoginForm;
