import type { TranslationStrings } from '../types';

export const zhTW: TranslationStrings = {
  showFolderPath: {
    name: '顯示資料夾路徑',
    desc: '在檔案名稱前顯示資料夾層級（資料夾 › 子資料夾）。',
  },
  showFileName: {
    name: '顯示檔案名稱',
    desc: '在麵包屑導航中顯示目前檔案名稱。',
  },
  maxSegmentLength: {
    name: '每個麵包屑節點的最大字元數',
    desc: '超過長度的名稱將被截斷並以省略號（…）顯示。',
    errorMin: '請輸入不小於 1 的數字。',
  },
  editFollowView: {
    name: '編輯模式下跟隨檢視錨點',
    desc: '關閉：麵包屑跟隨游標。開啟：麵包屑跟隨下方設定的編輯錨點所在行，無需點擊游標，僅滾動頁面即可更新麵包屑。',
  },
  editAnchorPercent: {
    name: '編輯模式錨點位置 (%)',
    desc: '在編輯器視區中切換標題的垂直位置：0 = 頂部，50 = 中間，100 = 底部。僅在啟用「編輯模式下跟隨檢視錨點」時生效。',
    errorRange: '請輸入 0 到 100 之間的整數。',
  },
  readingAnchorPercent: {
    name: '閱讀模式錨點位置 (%)',
    desc: '在閱讀視區中標題生效的垂直位置：0 = 頂部，50 = 中間，100 = 底部。',
    errorRange: '請輸入 0 到 100 之間的整數。',
  },
  showInReadingMode: {
    name: '在閱讀模式中顯示',
    desc: '在閱讀（預覽）模式下也顯示麵包屑列，並隨滾動位置更新。',
  },
  showInTabHeader: {
    name: '在分頁標題列中顯示標題軌跡',
    desc: '將標題麵包屑渲染在原生分頁標題列中（緊隨資料夾/檔案路徑之後，需 Obsidian 1.14+）。由於原生路徑已顯示資料夾與檔案，因此此處會略過它們。',
  },
  hideWhenNoHeadings: {
    name: '無標題時隱藏',
    desc: '對於沒有任何標題的筆記，完全隱藏麵包屑列。',
  },
};
