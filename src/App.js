import { BrowserRouter, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import CategoryItem from './pages/CategoryItem';
import Details from './pages/Details';
import Home from './pages/Home';
import React from 'react';
import Shop from './pages/Shop';
import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/user/User';
import PageNotFound from './pages/PageNotFound';

import ProtectedRoutes from './protected/ProtectedRouted';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
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
export const LocalContext = React.createContext();
function App() {
  const { t } = useTranslation();

  return (
    <>
      <LocalContext.Provider value={[t]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/details/:pid" element={<Details />} />
            <Route path="/category/:catId" element={<CategoryItem />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/user/:uId" element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalContext.Provider>
    </>
  );
}

export default App;
