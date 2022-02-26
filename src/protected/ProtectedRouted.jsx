import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// const auth = sessionStorage.getItem('userId');
// const useAuth = (auth) => {
//   if (auth) {
//     return true;
//   } else {
//     return false;
//   }
// };
// Array instead of object

const ProtectedRoutes = () => {
  //const isAuth = useAuth(auth);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    setUserId(sessionStorage.getItem('userId'));
  }, []);
  // console.log(userId);

  return userId ? <Outlet /> : <Navigate to="/login" />;
  //return 'hello';
};

export default ProtectedRoutes;
