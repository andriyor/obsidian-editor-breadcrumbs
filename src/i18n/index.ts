import { getLanguage } from 'obsidian';
import type { TranslationStrings } from './types';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { zhTW } from './locales/zh-tw';
import { ja } from './locales/ja';
import { ko } from './locales/ko';
import { uk } from './locales/uk';
import { ru } from './locales/ru';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { pt } from './locales/pt';
import { ptBR } from './locales/pt-br';
import { es } from './locales/es';
import { ar } from './locales/ar';

export function getAppLanguage(): string {
  try {
    if (typeof getLanguage === 'function') {
      const lang = getLanguage();
      if (lang) return lang;
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = window.localStorage.getItem('language');
      if (lang) return lang;
    }
  } catch {
    // defensive fallback
  }
  return 'en';
}

export function t(langCode?: string): TranslationStrings {
  const code = (langCode || getAppLanguage()).toLowerCase();

  if (code.startsWith('zh')) {
    if (code.includes('tw') || code.includes('hk') || code.includes('hant')) {
      return zhTW;
    }
    return zh;
  }
  if (code.startsWith('ja')) return ja;
  if (code.startsWith('ko')) return ko;
  if (code.startsWith('uk')) return uk;
  if (code.startsWith('ru')) return ru;
  if (code.startsWith('fr')) return fr;
  if (code.startsWith('de')) return de;
  if (code.startsWith('pt')) {
    if (code.includes('br')) return ptBR;
    return pt;
  }
  if (code.startsWith('es')) return es;
  if (code.startsWith('ar')) return ar;

  return en;
}

export * from './types';
