import styled from "styled-components";

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

export const ContainerBoxButton = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
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
