import { Button } from "antd";
import { BoxMusica, ContainerBox, ContainerBoxButton } from "./style";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import JSZip from "jszip";

export default function ResultadoArquivo({
  resultadoDados,
  separarDados,
}: separarDadosPropsType) {
  const [resultado, setResultado] = useState<File[]>(resultadoDados);

  useEffect(() => {
    setResultado(resultadoDados);
  }, [resultadoDados]);

  const baixarTodosArquivos = async () => {
    const zip = new JSZip();

    resultado.forEach((file: File) => {
      zip.file(file.name, file);
    });

    const content = await zip.generateAsync({ type: "blob" });

    const url = URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "musicas.zip");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <ContainerBox>
        {resultado.map((file: any, index: number) => (
          <BoxMusica key={index} selected={false}>
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
        <Button type="default" onClick={() => separarDados(!separarDados)}>
          Separar Arquivo
        </Button>

        <Button
          type="primary"
          style={{ backgroundColor: "green" }}
          onClick={baixarTodosArquivos}
        >
          Baixar Arquivo
        </Button>
        <Button
          style={{ backgroundColor: "yellow" }}
          onClick={() => setResultado([])}
        >
          Limpar
        </Button>
      </ContainerBoxButton>
    </>
  );
}

export type separarDadosPropsType = {
  separarDados: (separarDados: boolean) => void;
  resultadoDados: File[];
};
