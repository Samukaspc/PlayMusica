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

    for (let j = i; j <= indiceUltimoEsquerda; j++) {
      const arquivoEsquerda = arquivoEsquerdaDados[j];
      const nomeSemExtensao = obterNomeBase(arquivoEsquerda.name);
      const nomeArquivoEsquerda = `${nomeSemExtensao}.mp3`;
      resultado.push(new File([arquivoEsquerda], nomeArquivoEsquerda));
    }

    const ultimoNomeBaseEsquerda = obterNomeBase(arquivoEsquerdaDados[indiceUltimoEsquerda].name);
    const nomeDireitaPadrao = `${ultimoNomeBaseEsquerda}_1.mp3`;

    for (let k = 0; k < arquivoDireitaDados.length; k++) {
      resultado.push(new File([arquivoDireitaDados[k]], nomeDireitaPadrao));
    }
  }

  console.log("resultado2", resultado);
  return resultado;
}

function obterNomeBase(nomeArquivo: string): string {
  // Remover números do início do nome do arquivo e extensão duplicada
  return nomeArquivo.replace(/^\d+/, "").replace(/\.mp3$/, "");
}
