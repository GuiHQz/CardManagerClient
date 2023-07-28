import styled from "styled-components";

export const Container = styled.div`
  input {
    color: white;
    background-color: transparent;
    padding: 1rem 0;
    border-radius: 1rem;
    border: 0.01rem solid rgba(255, 255, 0, 0.4);
  }

  input:hover {
    border-color: rgba(255, 255, 0, 0.8);
  }

  input:focus {
    box-shadow: 0 0 1rem rgba(255, 255, 0, 0.8);
  }

  .twin-input {
    display: flex;
    align-items: center;
  }

  .twin-input span {
    margin-right: 1rem;
  }

  .twin-input input {
    padding: 10px;
  }
`;

export const TextInput = styled.input``;

export const NumberInput = styled.input`
  color: red;
  height: 4rem;
  width: 6.5rem;
`;
