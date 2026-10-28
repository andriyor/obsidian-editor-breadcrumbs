export interface EBSettings {
  /** Show the folder chain before the file name. */
  showFolderPath: boolean;
  /** Show the file name crumb. */
  showFileName: boolean;
  /** Max characters per crumb before it is truncated with an ellipsis. */
  maxSegmentLength: number;
  /** Hide the bar entirely when the note has no headings. */
  hideWhenNoHeadings: boolean;
  /** In edit mode, follow the view anchor line instead of the cursor. */
  editFollowView: boolean;
  /** Vertical anchor in the editor viewport, in percent: 0 = top edge,
   *  50 = middle, 100 = bottom edge. Only used when `editFollowView` is on. */
  editAnchorPercent: number;
  /** Vertical anchor in the reading viewport, in percent: a heading becomes
   *  current once it crosses this line (0 = top edge, 50 = middle, 100 = bottom). */
  readingAnchorPercent: number;
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
  editFollowView: false,
  editAnchorPercent: 50,
  readingAnchorPercent: 50,
  showInReadingMode: true,
  showInTabHeader: false,
};

/** Clamp a stored or typed anchor percentage to 0–100, with a safe fallback. */
export function normalizePercent(value: unknown, fallback = 50): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return fallback;
  return Math.min(100, Math.max(0, Math.round(value)));
}
