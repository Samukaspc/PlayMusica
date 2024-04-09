import {
  BoxCenter,
  BoxDireita,
  BoxEsquerda,
  Container,
  ContainerBoxArquivo,
} from "./styled";
import ArquivoDireita from "./arquivoDireita";
import ButtonCenter from "./buttonCenter";
import ArquivoEsquerda from "./arquivoEsquerda";
import ResultadoArquivo from "./resultadoArquivo";
import { useState } from "react";
import SepararArquivo from "../../functios";

export default function EdicaoArquivo() {
  const [quantidade, setQuantidade] = useState<number>(0);
  const [arquivoEsquerdaDados, setArquivoEsquerdaDados] = useState<File[]>([]);
  const [arquivoDireitaDados, setArquivoDireitaDados] = useState<File[]>([]);
  const arquivoEsquerda = async (arquivoEsquerda: File[]) => {
    setArquivoEsquerdaDados(arquivoEsquerda);
  };
  const arquivoDireita = async (arquivoDireita: File[]) => {
    setArquivoDireitaDados(arquivoDireita);
  };
  const quantidadeSeparar = async (quantidadeSeparar: number) => {
    setQuantidade(quantidadeSeparar);
  };

  const separarDados = async (separarDados: boolean) => {
    if (!separarDados) {
      SepararArquivo(arquivoEsquerdaDados, quantidade, arquivoDireitaDados);
    }
  };

  return (
    <Container>
      <h1>Separar Arquivo(s)</h1>
      <ContainerBoxArquivo>
        <BoxEsquerda>
          <ArquivoEsquerda arquivoEsquerda={arquivoEsquerda} />
        </BoxEsquerda>
        <BoxCenter>
          <ButtonCenter quantidadeSeparar={quantidadeSeparar} />
        </BoxCenter>
        <BoxDireita>
          <ArquivoDireita arquivoDireita={arquivoDireita} />
        </BoxDireita>
        <BoxDireita>
          <ResultadoArquivo separarDados={separarDados} />
        </BoxDireita>
      </ContainerBoxArquivo>
    </Container>
  );
}
