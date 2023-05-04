import styled from 'styled-components';

export const StyleRegisterPage = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #1a001d;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 2.5rem;
  justify-content: center;

  .register_contanier {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
  }

  .contanier_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    text-align: center;

    h1 {
      color: var(--grey-0);
      font-size: 20px;
    }
  }
`;
