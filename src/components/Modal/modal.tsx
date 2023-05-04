import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ModalStyled } from './style';
import { PostContext } from '../../providers/Post/PostContex';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../providers/User/UserContext';

interface IModal {
  description: string;
  link: string;
  type: string;
}

interface IProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
export const Modal = ({ modalOpen, setModalOpen }: IProps) => {
  const { User } = useContext(UserContext);
  const [text, setText] = useState('');
  const { register, handleSubmit } = useForm<IModal>({});
  const modalDialog = useRef<HTMLDialogElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  const { CreatePost } = useContext(PostContext);

  const submit = (data: IModal) => {
    const newData = {
      description: data.description,
      link: data.link,
      type: data.type,
      // like: [],
      user: {
        name: User.name,
        avatar: User.avatar,
      },
      userId: User.id,
    };
    CreatePost(newData)
    setModalOpen(false)
  };

  useEffect(() => {
    if (modalOpen) {
      console.log(modalOpen);
      modalDialog.current?.showModal();
    } else {
      modalDialog.current?.close();
    }
  }, [modalOpen]);
  return (
    <>
      <dialog ref={modalDialog}>
        <ModalStyled className='main__container'>
          <form onSubmit={handleSubmit(submit)} className='modal__form'>
            <div className='header__form'>
              <h1 className='title__form'>Cadastrar Post</h1>
              <button
              type='button'
                className='close__button'
                onClick={() => setModalOpen(false)}
              >
                {' '}
                X{' '}
              </button>
            </div>

            <label> Url vindo do: </label>
            <select {...register('type')}>
              <option value='Spotify'> Spotify </option>
              <option value='YouTube'> YouTube </option>
            </select>

            <label> Link URL: </label>
            <input
              {...register('link')}
              placeholder='Digite aqui a URL da plataforma escolhida...'
            />

            <label> Descrição: </label>
            <textarea
              {...register('description')}
              value={text}
              onChange={handleChange}
              id='description'
              placeholder='Digite aqui sua descrição...'
            />

            <button type='submit' className='button__post'>
              {' '}
              Postar{' '}
            </button>
          </form>
        </ModalStyled>
      </dialog>
    </>
  );
};

export default Modal;
