import styled from "styled-components";

// Container task
export const AddTaskStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 3em;

  & form {
    border: 2px solid #7b8a8c;
    border-radius: 20px;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & h2 {
      letter-spacing: 1px;
      font-size: 1.8em;
    }

    & .submit {
      width: 50%;
      display: flex;
      justify-content: flex-end;

      & input {
        width: 15%;
      }
    }
  }
`;

export const HomeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border: 2px solid #7b8a8c;
    border-radius: 10px;
    margin: 0.5em;
    padding: 0.5em;
    list-style: none;

    & li {
      display: flex;
      width: 50%;
      flex-direction: column;
      padding: 0.4em;
      border-bottom: 1px solid #7b8a8c;

      & p {
        font-size: 1.3em;
        margin: 0.3em;
      }
    }

    & .send {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
