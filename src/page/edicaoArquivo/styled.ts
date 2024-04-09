import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        margin-bottom: 20px;
    }
    `
export const ContainerBoxArquivo = styled.div`
    display: flex;
    gap: 20px;

`
export const ContainerBox = styled.div`
    display: flex;
    overflow: auto;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    flex-direction: column;
    height: 450px;
    background-color: aliceblue;
    opacity: 0.5;
`
export const BoxCenter = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    svg {
        justify-content: center;
    }
    span {
        font-size: 20px;
        display: flex;
        justify-content: center;
    }
    button {
        height: 70px;
        font-size: 25px;
        width: 100px;
    }
`


export const BoxMusica = styled.div<{ selected: boolean }>`
  display: flex;
  margin: 10px;
  span {
    width: 300px;
    align-items: center;
    display: flex;
  }
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "lightgray" : "transparent")};

  .react-player video {
    background-color: black;
  }
`;


export const ContainerBoxButton = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    `
export const BoxEsquerda = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    button {
        height: 50px;
    }
`
export const BoxDireita = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    button {
        height: 50px;
    }
`
