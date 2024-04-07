import { ButtonBox, ContainerBox, ContainerH1, DropzoneContainer } from "./styled";
import { useCallback } from 'react';
import { Alert, Button, message } from "antd";
import { FileRejection, useDropzone } from "react-dropzone";


export default function UploadArquivo() {
  const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    console.log(acceptedFiles);
    console.log(rejectedFiles);
    const audioFiles = acceptedFiles.filter(file => file.type.startsWith('audio/'));


    if (audioFiles.length > 0) {
      message.success('Arquivo de áudio aceito com sucesso!');
      //TODO: para mudar de pagina
      window.location.href = '/EdicaoArquivo';
    } else {
      message.error('Arquivo inválido! Por favor, selecione um arquivo de áudio.');
    }

    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach(rejectedFile => {
        <Alert message={`Erro ao processar o arquivo ${rejectedFile.file.name}: ${rejectedFile.errors[0].message}`} type="error" />
        alert(`Erro ao processar o arquivo ${rejectedFile.file.name}: ${rejectedFile.errors[0].message}`);
      });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      'audio/*': []
    },
    multiple: true,
  });

  return (
    <>
      <ContainerH1>
        <h1>Divisor de Músicas(s)</h1>
      </ContainerH1>
      <ContainerBox>
        <div {...getRootProps()} >
          <input {...getInputProps()} />
          <DropzoneContainer>
            <p>Arraste e solte arquivos aqui ou clique para selecionar</p>
          </DropzoneContainer>
        </div>
      </ContainerBox>
      <ButtonBox>
        <Button {...getRootProps()} type="primary">Adicionar</Button>
      </ButtonBox>
    </>
  );
}
