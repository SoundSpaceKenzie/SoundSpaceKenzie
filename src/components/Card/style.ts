import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  background-color: beige;

  .contanier_user {
    display: flex;
    gap: 0.2em;
    align-items: center;
    img {
      width: 40px;
    }
  }

  .CardMedia {
    width: 260px;
    height: auto;
  }

  .contanier_icons {
    display: flex;
    gap: 1em;
    padding: 0.5em;

    button {
      background-color: transparent;
    }
  }

  .Icons {
    transform: scale(1.8);
  }

  #LikeButton {
    color: #ba1016;
  }
`;
