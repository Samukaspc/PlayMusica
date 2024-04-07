import { ButtonBox, Container, ContainerBox, ContainerH1, DropzoneContainer } from "./styled";
import Dropzone, { FileRejection } from 'react-dropzone';
import { useCallback } from 'react';
import { Button } from "antd";

export default function Musicas() {
  const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    console.log(acceptedFiles);
    console.log(rejectedFiles);
  }, []);

  return (
  <Container>
    <ContainerH1>
      <h1>Divisor de Músicas(s)</h1>
    </ContainerH1>
    <ContainerBox>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} >
            <input {...getInputProps()} />
            <DropzoneContainer>
              <p>Arraste e solte arquivos aqui ou clique para selecionar</p>
            </DropzoneContainer>
          </div>
        )}
      </Dropzone>
    </ContainerBox>
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps }) => (
        <ButtonBox>
          <Button {...getRootProps()} type="primary">  Adicionar</Button>
        </ButtonBox>
      )}
    </Dropzone>
  </Container>
  );
};
