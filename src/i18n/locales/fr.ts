import type { TranslationStrings } from '../types';

export const fr: TranslationStrings = {
  showFolderPath: {
    name: 'Afficher le chemin du dossier',
    desc: 'Afficher la hiérarchie des dossiers (Dossier › Sous-dossier) avant le nom du fichier.',
  },
  showFileName: {
    name: 'Afficher le nom du fichier',
    desc: 'Afficher le nom du fichier actuel dans le fil d\'Ariane.',
  },
  maxSegmentLength: {
    name: 'Nombre maximal de caractères par élément',
    desc: 'Les noms plus longs sont tronqués avec des points de suspension (…).',
    errorMin: 'Veuillez saisir un nombre supérieur ou égal à 1.',
  },
  editFollowView: {
    name: 'Suivre l\'ancrage de la vue en mode édition',
    desc: 'Désactivé : le fil suit le curseur, comme auparavant. Activé : il suit la ligne définie par l\'ancrage ci-dessous, de sorte que le défilement sans clic met également à jour le fil.',
  },
  editAnchorPercent: {
    name: 'Ancrage en mode édition (%)',
    desc: 'Position dans l\'éditeur où le fil change de titre : 0 = bord supérieur, 50 = milieu, 100 = bord inférieur. Utilisé uniquement lorsque « Suivre l\'ancrage de la vue en mode édition » est activé.',
    errorRange: 'Veuillez saisir un nombre entier compris entre 0 et 100.',
  },
  readingAnchorPercent: {
    name: 'Ancrage en mode lecture (%)',
    desc: 'Position dans la vue lecture où un titre devient actif : 0 = bord supérieur, 50 = milieu, 100 = bord inférieur.',
    errorRange: 'Veuillez saisir un nombre entier compris entre 0 et 100.',
  },
  showInReadingMode: {
    name: 'Afficher en mode lecture',
    desc: 'Afficher également la barre de fil d\'Ariane en mode lecture (aperçu), en suivant la position de défilement.',
  },
  showInTabHeader: {
    name: 'Afficher le fil des titres dans l\'en-tête de l\'onglet',
    desc: 'Afficher le fil d\'Ariane des titres dans la barre de titre native de l\'onglet, juste après le chemin du dossier/fichier (en-tête Obsidian 1.14+). Les dossiers et fichiers y sont omis car le chemin natif les affiche déjà.',
  },
  hideWhenNoHeadings: {
    name: 'Masquer lorsqu\'il n\'y a pas de titres',
    desc: 'Masquer complètement la barre pour les notes ne contenant aucun titre.',
  },
};
