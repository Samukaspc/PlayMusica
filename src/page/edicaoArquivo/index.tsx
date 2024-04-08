import { Alert, Button } from "antd";
import {
  Box,
  BoxMusica,
  ButtonBox,
  Container,
  ContainerBox,
  ContainerBoxArquivo,
  ContainerBoxButton,
} from "./styled";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";

export default function EdicaoArquivo() {
  const location = useLocation();
  const [quantidadeParaDividir, setQuantidadeParaDividir] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const [removerArquivoTela, setRemoverArquivoTela] = useState<File>();
  const [audioFiles, setAudioFiles] = useState<File[]>(
    location.state?.audioFiles || []
  );
  const [audioFilesAnuncio, setAudioFilesAnuncio] = useState<File[]>([]);
  console.log("audioFilesAnuncio", audioFilesAnuncio);

  const adiconarQuantidade = () => {
    if (quantidadeParaDividir < 100)
      setQuantidadeParaDividir(quantidadeParaDividir + 1);
  };
  const removerQuantidade = () => {
    if (quantidadeParaDividir > 0)
      setQuantidadeParaDividir(quantidadeParaDividir - 1);
  };

  // const [addAnuncio, setAddAnuncio] = useState(false);

  const removerArquivo = (fileRemove: File) => {
    const newAudioFiles = audioFiles.filter((file) => file !== fileRemove);
    setAudioFiles(newAudioFiles);
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const audioFilesAdd = acceptedFiles.filter((file) =>
        file.type.startsWith("audio/")
      );

      // if (addAnuncio) {
      //   setAudioFilesAnuncio([...audioFilesAnuncio, ...audioFilesAdd]);
      //   setAddAnuncio(false);
      //   return;
      // }
      setAudioFiles([...audioFiles, ...audioFilesAdd]);

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

  return (
    <Container>
      <h1>Separar Arquivo(s)</h1>
      <ContainerBoxArquivo>
        <Box>
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
        </Box>
        <ButtonBox>
          <Button
            icon={<FaArrowUp />}
            onClick={() => adiconarQuantidade()}
            type="primary"
            style={{ width: "60px" }}
          ></Button>
          <Button type="dashed" style={{ width: "60px" }}>
            {quantidadeParaDividir}
          </Button>
          <Button
            icon={<FaArrowDown />}
            onClick={() => removerQuantidade()}
            type="primary"
            style={{ width: "60px" }}
          ></Button>
        </ButtonBox>
        <Box>
          <ContainerBox>
            {audioFilesAnuncio.map((file: any, index: number) => (
              <BoxMusica
                key={index}
                onClick={() => {
                  setAudioFilesAnuncio(file);
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
            <Button type="primary">Remover</Button>
          </ContainerBoxButton>
        </Box>
      </ContainerBoxArquivo>
    </Container>
  );
}
