import styled from 'styled-components';

export const Styledfooter = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: #1a001d;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  height: 40px;
  @media (min-width: 425px) {
    display: none;
  }
  img {
    background-color: white;
    width: 20px;
    border-radius: 50%;
  }
`;
