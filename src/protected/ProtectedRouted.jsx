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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (sessionStorage.length > 0) {
      setUserId(sessionStorage.userId);
      setLoading(false);
    }
    setLoading(false);
  }, []);
  // console.log(userId);

  if (loading) {
    return 'Loading...';
  } else {
    return userId !== null ? <Outlet /> : <Navigate to="/login" />;
  }
  //return 'hello';
};

export default ProtectedRoutes;
