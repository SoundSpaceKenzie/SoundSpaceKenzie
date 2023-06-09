import styled from "styled-components";

export const StyledCardSuggestions = styled.li`
display: flex;
align-items: center;
gap: 1em;
padding: 0.5em 1em;
justify-content: space-between;

img{
  width: 40px;
    border-radius: 50%;
    height: 40px;
    object-fit:cover;
  }

  p{
    font-size: 14px;
    font-weight: 600;
  }

  .contanier_user{
    display: flex;
    gap: 0.5em;
    align-items: center;
    flex-direction:row;
  }

  button{
    width: 87px;
    padding: 0.4em 0.7em;
    font-size:14px;
    font-weight: 600;
    background-color:var(--grey-1);
    color: var(--color-primary);
  }


  .seguindo{
    background-color:var(--grey-0);
    border: 2px solid var(--color-secundary);
  }
`