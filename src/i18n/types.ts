export interface SettingStringItem {
  name: string;
  desc: string;
}

export interface SettingStringItemWithMin extends SettingStringItem {
  errorMin: string;
}

export interface SettingStringItemWithRange extends SettingStringItem {
  errorRange: string;
}

export interface TranslationStrings {
  showFolderPath: SettingStringItem;
  showFileName: SettingStringItem;
  maxSegmentLength: SettingStringItemWithMin;
  editFollowView: SettingStringItem;
  editAnchorPercent: SettingStringItemWithRange;
  readingAnchorPercent: SettingStringItemWithRange;
  showInReadingMode: SettingStringItem;
  showInTabHeader: SettingStringItem;
  hideWhenNoHeadings: SettingStringItem;
}
