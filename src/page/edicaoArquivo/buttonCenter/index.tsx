import { Button } from "antd";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function ButtonCenter({
  quantidadeSeparar,
}: ButtonCenterPropsType) {
  const [quantidadeParaDividir, setQuantidadeParaDividir] = useState(0);

  const adiconarQuantidade = () => {
    if (quantidadeParaDividir < 100) {
      setQuantidadeParaDividir(quantidadeParaDividir + 1);
      quantidadeSeparar(quantidadeParaDividir + 1);
    }
  };

  const removerQuantidade = () => {
    if (quantidadeParaDividir > 0) {
      setQuantidadeParaDividir(quantidadeParaDividir - 1),
        quantidadeSeparar(quantidadeParaDividir - 1);
    }
  };
  return (
    <>
      <Button
        icon={<FaArrowUp />}
        onClick={adiconarQuantidade}
        type="primary"
        style={{ width: "60px" }}
      />
      <Button type="dashed" style={{ width: "60px" }}>
        {quantidadeParaDividir}
      </Button>
      <Button
        icon={<FaArrowDown />}
        onClick={removerQuantidade}
        type="primary"
        style={{ width: "60px" }}
      />
    </>
  );
}

export type ButtonCenterPropsType = {
  quantidadeSeparar: (quantidadeSeparar: number) => void;
};
