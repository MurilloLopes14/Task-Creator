import styled from "styled-components";

export const NavBarStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  min-height: 7vh;
  border-bottom: 2px solid #7b8a8c;
  box-shadow: 10px 0 10px 2px #000;
  padding: 0.5em;

  & ul {
    list-style: none;
    display: flex;
    margin-right: 3em;
    flex-wrap: wrap;

    & a {
      padding: 0.5em;
      margin-right: 1em;
      font-size: 1.3em;
      color: var(--secondary);
      text-decoration: none;
      transition: 0.4s;

      & svg {
        font-size: 1.3em;
        color: var(--secondary);
      }
    }
    & .active {
      filter: brightness(1.3);
      background-color: #4a4b54;
      border-radius: 10px;
    }
  }
`;
