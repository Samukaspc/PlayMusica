import { ButtonBox, ContainerBox, ContainerH1, DropzoneContainer } from "./styled";
import { useCallback } from 'react';
import { Alert, Button, message } from "antd";
import { FileRejection, useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

export default function UploadArquivo() {
  const navigate = useNavigate();

  const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    const audioFiles = acceptedFiles.filter(file => file.type.startsWith('audio/'));

    if (audioFiles.length > 0) {
      message.success('Arquivo de áudio aceito com sucesso!');
      navigate('/EdicaoArquivo', { state: { audioFiles } });
    } else {
      message.error('Arquivo inválido! Por favor, selecione um arquivo de áudio.');
    }

    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach(rejectedFile => {
        <Alert message={`Erro ao processar o arquivo ${rejectedFile.file.name}: ${rejectedFile.errors[0].message}`} type="error" />
        alert(`Erro ao processar o arquivo ${rejectedFile.file.name}: ${rejectedFile.errors[0].message}`);
      });
    }
  }, [navigate]);

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
