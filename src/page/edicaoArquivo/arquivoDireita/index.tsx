import ReactPlayer from "react-player";
import { BoxMusica, ContainerBox, ContainerBoxButton } from "./styled";
import { Alert, Button } from "antd";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";

export default function ArquivoDireita({ arquivoDireita }: ArquivoPropsType) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const [audioFiles, setAudioFiles] = useState<File[]>([]);
  const [removerArquivoTela, setRemoverArquivoTela] = useState<File>();

  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const audioFilesAdd = acceptedFiles.filter((file) =>
        file.type.startsWith("audio/")
      );

      setAudioFiles([...audioFiles, ...audioFilesAdd]);
      arquivoDireita(audioFilesAdd);

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach((rejectedFile) => {
          <Alert
            message={`Erro ao processar o arquivo ${rejectedFile.file.name}: ${rejectedFile.errors[0].message}`}
            type="error"
          />;
          alert(
            `Erro ao processar o arquivo ${rejectedFile.file.name}: ${rejectedFile.errors[0].message}`
          );
        });
      }
      console.log("audioFilesAdd", audioFilesAdd);
    },
    [audioFiles]
  );

  const { getRootProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "audio/*": [],
    },
    multiple: true,
  });

  const removerArquivo = (fileRemove: File) => {
    const newAudioFiles = audioFiles.filter((file) => file !== fileRemove);
    setAudioFiles(newAudioFiles);
    arquivoDireita(newAudioFiles);
  };

  return (
    <>
      <ContainerBox>
        {audioFiles.map((file: any, index: number) => (
          <BoxMusica
            key={index}
            onClick={() => {
              setSelectedItemIndex(index);
              setRemoverArquivoTela(file);
            }}
            selected={selectedItemIndex === index}
          >
            <span>{file.name}</span>
            <ReactPlayer
              url={URL.createObjectURL(file)}
              controls
              width="100%"
              height="50px"
            />
          </BoxMusica>
        ))}
      </ContainerBox>
      <ContainerBoxButton>
        <Button {...getRootProps()} type="primary">
          Adicionar
        </Button>
        <Button
          type="primary"
          onClick={() => {
            if (removerArquivoTela) removerArquivo(removerArquivoTela);
          }}
        >
          Remover
        </Button>
        <Button type="primary" onClick={() => setAudioFiles([])}>
          Limpar
        </Button>
      </ContainerBoxButton>
    </>
  );
}

export type ArquivoPropsType = {
  arquivoDireita: (arquivoDireita: File[]) => void;
};
