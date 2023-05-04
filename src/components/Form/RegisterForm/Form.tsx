import { Button } from '../../Button';
import { Input } from '../../Input/Input';
import { StyledFormRegister } from './styled';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, TRegisterValues } from '../../../schemas/UserSchemas';
import { UserContext } from '../../../providers/User/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValues>({ resolver: zodResolver(RegisterSchema) });

  const { UserRegister } = useContext(UserContext);

  const submit = (data: TRegisterValues) => {
    console.log(data);
    UserRegister(data);
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Nome'
        placeholder='Digite aqui seu nome'
        id='name'
        error={errors?.name?.message}
        {...register('name')}
      />

      <Input
        type='email'
        label='Email'
        placeholder='Digite aqui seu e-mail'
        id='email'
        error={errors?.email?.message}
        {...register('email')}
      />

      <Input
        type='text'
        label='Avatar de Perfil'
        placeholder='url de uma imagem'
        id='avatar'
        error={errors?.avatar?.message}
        {...register('avatar')}
      />

      <Input
        type='password'
        label='Senha'
        placeholder='Digite aqui sua senha'
        id='password'
        error={errors?.password?.message}
        {...register('password')}
      />

      <Input
        type='password'
        label='Confirmar Senha'
        placeholder='Digite novamente sua senha'
        id='passwordConfirm'
        error={errors?.confirm?.message}
        {...register('confirm')}
      />

      <Button
        text='Cadastrar'
        backgroundC={'--grey-2'}
        textColor={'--grey-3'}
      />


      <Link to={"/"} replace>Voltar</Link>
      

    </StyledFormRegister>
  );
};
