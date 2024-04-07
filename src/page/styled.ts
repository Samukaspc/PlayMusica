import styled, { keyframes } from "styled-components";

const animateBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 100% 100%;
  animation: ${animateBackground} 10s ease infinite;
 
`;
export const ContainerH1 = styled.div`
  h1 {
    margin-bottom: 40px;
    font-size: 90px;
    color: #fff;
  }
`
export const ContainerBox = styled.div`
  h1 {
    font-size: 2rem;
    color: #fff;
  }
`
export const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  width: 600px;
  height: 200px;
  opacity: 0.4;
  background-color: #fff;
  p {
    margin: 10px;
  }
`;

export const ButtonBox = styled.button`
border: none;
display: flex;
background-color: transparent;
button {
  width: 600px;
  height: 50px;
  margin-top: 10px;
}
`
