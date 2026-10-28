import type { TranslationStrings } from '../types';

export const de: TranslationStrings = {
  showFolderPath: {
    name: 'Ordnerpfad anzeigen',
    desc: 'Die Ordnerhierarchie (Ordner › Unterordner) vor dem Dateinamen anzeigen.',
  },
  showFileName: {
    name: 'Dateinamen anzeigen',
    desc: 'Den aktuellen Dateinamen als Breadcrumb anzeigen.',
  },
  maxSegmentLength: {
    name: 'Maximale Zeichenanzahl pro Breadcrumb',
    desc: 'Längere Namen werden mit Auslassungspunkten (…) gekürzt.',
    errorMin: 'Geben Sie eine Zahl von mindestens 1 ein.',
  },
  editFollowView: {
    name: 'Im Bearbeitungsmodus dem Ansichtsanker folgen',
    desc: 'Aus: Die Breadcrumbs folgen wie gewohnt dem Cursor. Ein: Sie folgen der Ankerlinie unten, sodass auch Scrollen ohne Klicken die Breadcrumbs aktualisiert.',
  },
  editAnchorPercent: {
    name: 'Anker im Bearbeitungsmodus (%)',
    desc: 'Vertikale Position im Editor, an der die Überschrift wechselt: 0 = oberer Rand, 50 = Mitte, 100 = unterer Rand. Nur aktiv, wenn „Im Bearbeitungsmodus dem Ansichtsanker folgen“ eingeschaltet ist.',
    errorRange: 'Geben Sie eine ganze Zahl von 0 bis 100 ein.',
  },
  readingAnchorPercent: {
    name: 'Anker im Lesemodus (%)',
    desc: 'Vertikale Position im Lesemodus, an der eine Überschrift aktiv wird: 0 = oberer Rand, 50 = Mitte, 100 = unterer Rand.',
    errorRange: 'Geben Sie eine ganze Zahl von 0 bis 100 ein.',
  },
  showInReadingMode: {
    name: 'Im Lesemodus anzeigen',
    desc: 'Die Breadcrumb-Leiste auch im Lesemodus (Vorschau) anzeigen und der Scrollposition folgen.',
  },
  showInTabHeader: {
    name: 'Überschriftspfad in der Tableiste anzeigen',
    desc: 'Die Überschrift-Breadcrumbs direkt in der nativen Tab-Titelleiste nach dem Ordner-/Dateipfad anzeigen (Obsidian 1.14+). Ordner- und Dateinamen werden dort weggelassen, da sie bereits nativ angezeigt werden.',
  },
  hideWhenNoHeadings: {
    name: 'Ausblenden, wenn keine Überschriften vorhanden sind',
    desc: 'Die Leiste bei Notizen ohne jegliche Überschriften vollständig ausblenden.',
  },
};
