import styled from "styled-components";
import BackgroundImage from "../../assets/img/polygon-scatter-haikei.svg";

export const Container = styled.div`
  display: flex;
  align-items: start;
  background-size: cover;
  background-position: center center;
  background-image: url(${BackgroundImage});
  height: 100vh;

  .page-title {
    color: white;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

//LEFT SIDE

export const StatsForm = styled.form`
  display: flex;
  overflow: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  font-size: 1.5rem;

  .box-form {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40rem;
    height: 40rem;
  }

  .twin-box {
    display: flex;
    justify-content: space-around;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;

// RIGHT SIDE

export const CardRender = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`;
