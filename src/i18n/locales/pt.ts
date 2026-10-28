import type { TranslationStrings } from '../types';

export const pt: TranslationStrings = {
  showFolderPath: {
    name: 'Mostrar caminho da pasta',
    desc: 'Mostrar a hierarquia de pastas (Pasta › Subpasta) antes do nome do ficheiro.',
  },
  showFileName: {
    name: 'Mostrar nome do ficheiro',
    desc: 'Mostrar o nome do ficheiro atual como um elemento de navegação.',
  },
  maxSegmentLength: {
    name: 'Limite de carateres por elemento',
    desc: 'Nomes mais longos são truncados com reticências (…).',
    errorMin: 'Insira um número maior ou igual a 1.',
  },
  editFollowView: {
    name: 'Seguir âncora de visualização no modo de edição',
    desc: 'Desativado: a navegação segue o cursor, como antes. Ativado: segue a linha da âncora de edição abaixo, permitindo atualizar ao deslocar mesmo sem clicar.',
  },
  editAnchorPercent: {
    name: 'Âncora do modo de edição (%)',
    desc: 'Posição vertical no editor onde o cabeçalho muda: 0 = topo, 50 = meio, 100 = base. Usado apenas quando "Seguir âncora de visualização no modo de edição" estiver ativado.',
    errorRange: 'Insira um número inteiro de 0 a 100.',
  },
  readingAnchorPercent: {
    name: 'Âncora do modo de leitura (%)',
    desc: 'Posição vertical no modo de leitura onde um cabeçalho se torna ativo: 0 = topo, 50 = meio, 100 = base.',
    errorRange: 'Insira um número inteiro de 0 a 100.',
  },
  showInReadingMode: {
    name: 'Mostrar no modo de leitura',
    desc: 'Também apresentar a barra de navegação no modo de leitura (pré-visualização), acompanhando o deslocamento.',
  },
  showInTabHeader: {
    name: 'Mostrar caminho de cabeçalhos no cabeçalho do separador',
    desc: 'Apresentar os cabeçalhos diretamente na barra de título do separador nativo, logo após o caminho da pasta/ficheiro (Obsidian 1.14+). Pastas e ficheiros são omitidos aí porque o caminho nativo já os apresenta.',
  },
  hideWhenNoHeadings: {
    name: 'Ocultar quando não houver cabeçalhos',
    desc: 'Ocultar completamente a barra em notas que não possuem qualquer cabeçalho.',
  },
};
