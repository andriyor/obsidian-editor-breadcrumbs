import type { TranslationStrings } from '../types';

export const zh: TranslationStrings = {
  showFolderPath: {
    name: '显示文件夹路径',
    desc: '在文件名之前显示文件夹层级（文件夹 › 子文件夹）。',
  },
  showFileName: {
    name: '显示文件名',
    desc: '在面包屑中显示当前文件名。',
  },
  maxSegmentLength: {
    name: '每个面包屑的最大字符数',
    desc: '超出长度的名称将截断并显示省略号（…）。',
    errorMin: '请输入不小于 1 的数字。',
  },
  editFollowView: {
    name: '编辑模式下跟随视图锚点',
    desc: '关闭：面包屑跟随光标移动。开启：面包屑跟随下方设定的编辑锚点所在行，无需点击光标，仅滚动页面即可更新面包屑。',
  },
  editAnchorPercent: {
    name: '编辑模式锚点位置 (%)',
    desc: '在编辑器视口中切换标题的垂直位置：0 = 顶部，50 = 中间，100 = 底部。仅在开启“编辑模式下跟随视图锚点”时生效。',
    errorRange: '请输入 0 到 100 之间的整数。',
  },
  readingAnchorPercent: {
    name: '阅读模式锚点位置 (%)',
    desc: '在阅读视口中标题生效的垂直位置：0 = 顶部，50 = 中间，100 = 底部。',
    errorRange: '请输入 0 到 100 之间的整数。',
  },
  showInReadingMode: {
    name: '在阅读模式中显示',
    desc: '在阅读（预览）模式下也显示面包屑栏，并根据滚动位置更新。',
  },
  showInTabHeader: {
    name: '在标签页标题栏中显示标题轨迹',
    desc: '将标题面包屑渲染在原生标签页标题栏中（紧跟文件夹/文件路径之后，需 Obsidian 1.14+）。此时会省略文件夹和文件面包屑，因为原生路径已包含它们。',
  },
  hideWhenNoHeadings: {
    name: '无标题时隐藏',
    desc: '对于没有任何标题的笔记，完全隐藏面包屑栏。',
  },
};
