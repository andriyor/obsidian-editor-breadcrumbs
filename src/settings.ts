export interface EBSettings {
  /** Show the folder chain before the file name. */
  showFolderPath: boolean;
  /** Show the file name crumb. */
  showFileName: boolean;
  /** Max characters per crumb before it is truncated with an ellipsis. */
  maxSegmentLength: number;
  /** Hide the bar entirely when the note has no headings. */
  hideWhenNoHeadings: boolean;
  /** In edit mode, follow the scroll position (center line) instead of the cursor. */
  editFollowScroll: boolean;
  /** Show the bar in reading (preview) mode too. */
  showInReadingMode: boolean;
  /** Render the heading trail inside the native tab header (after the file
   *  path) instead of the dedicated bar above the content. */
  showInTabHeader: boolean;
}

export const defaultSettings: EBSettings = {
  showFolderPath: true,
  showFileName: true,
  maxSegmentLength: 20,
  hideWhenNoHeadings: false,
  editFollowScroll: false,
  showInReadingMode: true,
  showInTabHeader: false,
};
