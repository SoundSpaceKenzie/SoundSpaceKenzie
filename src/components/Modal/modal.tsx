import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { ModalStyled } from './style';
import { PostContext } from '../../providers/Post/PostContex';

interface IProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
export const Modal = ({ modalOpen, setModalOpen }: IProps) => {
  const [text, setText] = useState('');
  const modalDialog = useRef<HTMLDialogElement>(null);
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }
  
  const { CreatePost } = useContext(PostContext)
  
  const submit = (data) => {
    CreatePost(data)
  }

  
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
          <form onSubmit={submit} className='modal__form'>
            <div className='header__form'>
            <h1 className='title__form'>Cadastrar Post</h1>
            <button className='close__button'
              onClick={() => setModalOpen(false)}
            >
              {' '}
              X{' '}
            </button>
            </div>

            <label> Url vindo do: </label>
            <select>
              <option value='Spotify'> Spotify </option>
              <option value='YouTube'> YouTube </option>
            </select>

            <label> Link URL: </label>
            <input 
              type='url'
              name='url'
              id='url'
              placeholder='Digite aqui a URL da plataforma escolhida...'
            />

            <label> Descrição: </label>
            <textarea
              value={text}
              onChange={handleChange}
              id='description'
              placeholder='Digite aqui sua descrição...'
            />

            <button className='button__post' > Postar </button>
          </form>
        </ModalStyled>
      </dialog>
    </>
  );
};

export default Modal;
