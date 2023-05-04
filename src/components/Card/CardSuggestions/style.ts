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
  }

  p{
    font-size: 14px;
    font-weight: 600;
  }

  .contanier_user{
    display: flex;
    gap: 0.3em;
    align-items: center;
  }

  button{
    padding: 0.4em 0.7em;
    font-size:14px;
    font-weight: 600;
    background-color:var(--grey-1);
    color: var(--color-primary);
  }
`