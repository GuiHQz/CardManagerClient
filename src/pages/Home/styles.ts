import styled from "styled-components";
import BackgroundHeader from "../../assets/img/polygon-scatter-haikei.svg";

export const Container = styled.div`
  height: 100vh;
  background-color: #000d16;
`;

//HEADER

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundHeader});
  height: 30%;
  margin: 0 auto;
  box-shadow: 0 0 50px 0 yellow;
`;

export const Form = styled.form`
  .search-box {
    display: flex;
    font-size: large;
    text-align: center;
    width: 100rem;
    padding: 2rem 0;
    border-radius: 0.5rem;
    border: 0.1rem solid yellow;
  }
`;

export const Input = styled.input`
  display: -webkit-flex;
  float: none;
  padding: 1rem;
`;

// BODY

export const Body = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  width: 70%;
  margin: 0 auto;
`;

export const ul = styled.ul`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const li = styled.li`
  width: 20rem;
  height: 20rem;
  margin: 0 1rem;
  border: 0.2rem solid yellow;
  border-radius: 1rem;
  background-color: #000d16;
  display: flex;
  justify-content: center;
  align-items: end;
  font-weight: 800;
`;

export const h2 = styled.h2`
  margin-top: 1rem;
  text-transform: uppercase;
`;
