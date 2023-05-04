import { StyledButton } from './style';

interface IButton {
  text: string;
  backgroundC: string;
  textColor: string;
}

export const Button = ({ text, backgroundC, textColor }: IButton) => {
  return (
    <StyledButton backgroundC={backgroundC} textColor={textColor}>
      {text}
    </StyledButton>
  );
};
