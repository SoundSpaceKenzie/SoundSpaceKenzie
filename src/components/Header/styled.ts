import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  padding: 10px;
  width: 100%;
  height: 80px;
  background-color: #1a001d;
  color: white;
  z-index: 1;
  .Resp-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    .logo {
      max-height: 75px;
    }
    .right-side {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 25px;
      .UserIcon {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit:cover;
      }
      .ExitBtn {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
