import { Button } from "antd";
import { ContainerBox, ContainerBoxButton } from "./style";

export default function ResultadoArquivo({
  separarDados,
}: separarDadosPropsType) {
  return (
    <>
      <ContainerBox></ContainerBox>
      <ContainerBoxButton>
        <Button type="default" onClick={() => separarDados(!separarDados)}>
          Separar Arquivo
        </Button>

        <Button type="primary" style={{ backgroundColor: "green" }}>
          Baixar Arquivo
        </Button>
      </ContainerBoxButton>
    </>
  );
}

export type separarDadosPropsType = {
  separarDados: (separarDados: boolean) => void;
};
