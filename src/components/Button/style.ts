import styled from 'styled-components';

interface IStyledButton {
  backgroundC: string;
  textColor: string;
}

export const StyledButton = styled.button<IStyledButton>`
  width: 100%;
  height: 44px;
  background-color: ${({ backgroundC }) => `var(${backgroundC})`};
  border: none;
  border-radius: 5px;
  color: ${({ textColor }) => `var(${textColor})`};
  font-weight: 600;
  font-size: 0.875em;

  cursor: pointer;
`;
