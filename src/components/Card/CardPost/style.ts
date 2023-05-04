import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 0 auto;
  width: 100%;

  .contanier_user {
    display: flex;
    gap: 0.5em;
    align-items: center;
    font-size: 12px;
    font-weight:600;
    width: 100%;

    img {
      width: 40px;
      border-radius: 100%;
    }
  }

  .CardMedia {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .contanier_icons {
    display: flex;
    gap: 1em;
    width:100%;
    height:30px;
    align-items: center;
  }
  .Icons {
    transform: scale(1.8);
  }

  p {
    font-size: 12px;
    width:100%;
  }

  .all_comments {
    background-color: transparent;
    font-size: 12px;
    width: 8.875em;
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
