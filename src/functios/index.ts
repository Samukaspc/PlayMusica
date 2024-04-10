export default function SepararArquivo(
  arquivoEsquerdaDados: File[],
  quantidade: number,
  arquivoDireitaDados: File[]
): File[] {
  if (!quantidade || quantidade <= 0) {
    throw new Error("A quantidade deve ser um número positivo maior que zero.");
  }
  if (!arquivoEsquerdaDados || arquivoEsquerdaDados.length === 0) {
    throw new Error("O arquivoEsquerdaDados não pode estar vazio.");
  }
  if (!arquivoDireitaDados || arquivoDireitaDados.length === 0) {
    throw new Error("O arquivoDireitaDados não pode estar vazio.");
  }

  const resultado: File[] = [];

  for (let i = 0; i < arquivoEsquerdaDados.length; i += quantidade) {
    const indiceUltimoEsquerda = Math.min(
      i + quantidade - 1,
      arquivoEsquerdaDados.length - 1
    );

    const nomeBaseDireita = obterNomeBase(
      arquivoEsquerdaDados[indiceUltimoEsquerda].name
    );

    for (let j = i; j <= indiceUltimoEsquerda; j++) {
      resultado.push(arquivoEsquerdaDados[j]);
    }

    for (let k = 0; k < arquivoDireitaDados.length; k++) {
      const extensaoDireita = arquivoDireitaDados[k].name.split(".").pop();
      const nomeDireita = `${nomeBaseDireita}_${k + 1}.${extensaoDireita}`;
      resultado.push(new File([arquivoDireitaDados[k]], nomeDireita));
    }
  }

  console.log("resultado2", resultado);
  return resultado;
}

function obterNomeBase(nomeArquivo: string): string {
  const nomeSemExtensao = nomeArquivo.replace(/\.[^/.]+$/, "");
  return nomeSemExtensao.replace(/^\d+/, "");
}
