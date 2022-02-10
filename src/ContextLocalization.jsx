import React from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'mm',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'querystring',
        'localStorage',
        'sessionStorage',
        'path',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  });
const LocalContext = React.createContext();
export function ContextTranslation({ children }) {
  const { t } = useTranslation();
  return <LocalContext.Provider value={t}>{children}</LocalContext.Provider>;
}
