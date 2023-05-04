import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 40px;
  @media (min-width: 765px) {
    flex-direction: row;
    padding-bottom: 0px;
  }
  .Sidebar {
    display: none;
    background-color: #1a001d;
    @media (min-width: 765px) {
      display: flex;
      flex-direction: column;
      width: 18%;
      min-width: 120px;
      max-width: 210px;
      padding: 15px;
      gap: 25px;
      padding-top: 58px;
    }
    button {
      background-color: white;
      color: #1a001d;
      padding: 0.5rem;
      border: 2px solid #11dcda;
      border-radius: 5px;
    }
  }
  .User-Sugestions {
    display: none;

    @media (min-width: 765px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
