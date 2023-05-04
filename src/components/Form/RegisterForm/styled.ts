import styled from "styled-components";

export const StyledFormRegister = styled.form`
display: flex;
flex-direction: column;
gap: 1em;

label{
  font-size: 0.875em;
  color: var(--grey-0);
  
}

a{
  width: 100%;
  height: 44px;
  background-color:var(--color-secundary);
  color:var(--color-primary);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  padding:1em;
  font-weight: 600;
  font-size: 0.875em;
}
`