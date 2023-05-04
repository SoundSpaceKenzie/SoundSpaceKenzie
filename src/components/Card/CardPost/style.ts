import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 0 auto;
  width: 320px;

  .contanier_user {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0 auto;

    .contanier_user {
      display: flex;
      gap: 0.5em;
      align-items: center;
      font-size: 12px;
      font-weight: 600;

      img {
        width: 40px;
        border-radius: 100%;
      }
    }
  }

  .CardMedia {
    display: flex;
    align-items: center;
    width: 320px;
    height: auto;
  }

  .contanier_icons {
    display: flex;
    gap: 1em;
    padding: 0.5em;
    width: 300px;
  }
  .Icons {
    transform: scale(1.8);
  }

  p {
    font-size: 12px;
    max-width: 300px;
  }

  .all_comments {
    background-color: transparent;
    font-size: 12px;
    width: 142px;
  }

  #LikeButton {
    color: #ba1016;
  }
  p {
    font-size: 12px;
    width: 300px;
  }

  .all_comments {
    background-color: transparent;
    font-size: 12px;
    width: 142px;
  }
`;
