import type { TranslationStrings } from '../types';

export const ptBR: TranslationStrings = {
  showFolderPath: {
    name: 'Mostrar caminho da pasta',
    desc: 'Mostrar a hierarquia de pastas (Pasta › Subpasta) antes do nome do arquivo.',
  },
  showFileName: {
    name: 'Mostrar nome do arquivo',
    desc: 'Mostrar o nome do arquivo atual como um item de navegação.',
  },
  maxSegmentLength: {
    name: 'Limite de caracteres por item',
    desc: 'Nomes mais longos são truncados com reticências (…).',
    errorMin: 'Insira um número maior ou igual a 1.',
  },
  editFollowView: {
    name: 'Seguir âncora de visualização no modo de edição',
    desc: 'Desativado: a navegação segue o cursor, como antes. Ativado: segue a linha de ancoragem de edição abaixo, permitindo atualizar ao rolar mesmo sem clicar.',
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
    desc: 'Também exibir a barra de navegação no modo de leitura (visualização), acompanhando a rolagem.',
  },
  showInTabHeader: {
    name: 'Mostrar trilha de cabeçalhos no cabeçalho da aba',
    desc: 'Exibir os cabeçalhos diretamente na barra de título da aba nativa, logo após o caminho da pasta/arquivo (cabeçalho do Obsidian 1.14+). Pastas e arquivos são omitidos ali porque o caminho nativo já os exibe.',
  },
  hideWhenNoHeadings: {
    name: 'Ocultar quando não houver cabeçalhos',
    desc: 'Ocultar completamente a barra em notas que não possuem nenhum cabeçalho.',
  },
};
