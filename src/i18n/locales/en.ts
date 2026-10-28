import type { TranslationStrings } from '../types';

export const en: TranslationStrings = {
  showFolderPath: {
    name: 'Show folder path',
    desc: 'Show the folder chain (Folder › Subfolder) before the file name.',
  },
  showFileName: {
    name: 'Show file name',
    desc: 'Show the current file name as a crumb.',
  },
  maxSegmentLength: {
    name: 'Max characters per crumb',
    desc: 'Longer names are truncated with an ellipsis (…).',
    errorMin: 'Enter a number of at least 1.',
  },
  editFollowView: {
    name: 'Follow view anchor in edit mode',
    desc: 'Off: the trail follows the cursor, as before. On: it follows the line at the edit-mode anchor below, so scrolling without clicking also updates the trail.',
  },
  editAnchorPercent: {
    name: 'Edit-mode anchor (%)',
    desc: 'Where in the editor the trail switches headings: 0 = top edge, 50 = middle, 100 = bottom edge. Only used when "Follow view anchor in edit mode" is on.',
    errorRange: 'Enter a whole number from 0 to 100.',
  },
  readingAnchorPercent: {
    name: 'Reading-mode anchor (%)',
    desc: 'Where in the reading view a heading becomes current: 0 = top edge, 50 = middle, 100 = bottom edge.',
    errorRange: 'Enter a whole number from 0 to 100.',
  },
  showInReadingMode: {
    name: 'Show in reading mode',
    desc: 'Also show the breadcrumb bar in reading (preview) mode, following the scroll position.',
  },
  showInTabHeader: {
    name: 'Show heading trail in the tab header',
    desc: 'Render the heading breadcrumbs inside the native tab title bar, right after the folder/file path (Obsidian 1.14+ header). Folder and file crumbs are omitted there because the native path already shows them.',
  },
  hideWhenNoHeadings: {
    name: 'Hide when there are no headings',
    desc: 'Hide the bar completely for notes without any headings.',
  },
};
