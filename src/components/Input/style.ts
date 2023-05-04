import styled from 'styled-components';

export const StyleInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;

  label {
    font-size: 14px;
    font-weight: 600;

    color: var(--grey-0);
  }

  span {
    color: red;
    font-size: 12px;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: var(--grey-0);
    text-indent: 10px;
    outline: none;

    ::placeholder {
      color: var(--grey-2);
      font-size: 14px;
    }
  }
`;
