import { Alert, Button } from "antd";
import { BoxMusica, ContainerBox } from "./style";
import { ContainerBoxButton } from "../styled";
import { FileRejection, useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

export default function ArquivoEsquerda({ arquivoEsquerda }: ArquivoPropsType) {
  const location = useLocation();
  const [removerArquivoTela, setRemoverArquivoTela] = useState<File>();
  const [audioFiles, setAudioFiles] = useState<File[]>(
    location.state?.audioFiles || []
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const removerArquivo = (fileRemove: File) => {
    const newAudioFiles = audioFiles.filter((file) => file !== fileRemove);
    setAudioFiles(newAudioFiles);
    arquivoEsquerda(newAudioFiles);
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const audioFilesAdd = acceptedFiles.filter((file) =>
        file.type.startsWith("audio/")
      );
      setAudioFiles([...audioFiles, ...audioFilesAdd]);
      arquivoEsquerda(audioFilesAdd);

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

  useEffect(() => {
    if (location.state?.audioFiles) {
      arquivoEsquerda(location.state.audioFiles);
    }
  }, [location.state?.audioFiles, arquivoEsquerda]);
  return (
    <>
      <ContainerBox>
        {audioFiles.map((file: any, index: number) => (
          <BoxMusica
            key={index}
            onClick={() => {
              setRemoverArquivoTela(file);
              setSelectedItemIndex(index);
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
          onClick={() => {
            if (removerArquivoTela) removerArquivo(removerArquivoTela);
          }}
          type="primary"
        >
          Remover
        </Button>
      </ContainerBoxButton>
    </>
  );
}

export type ArquivoPropsType = {
  arquivoEsquerda: (arquivoEsquerda: File[]) => void;
};
