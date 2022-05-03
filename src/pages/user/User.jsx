import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from './User.styles';
import UserNav from './UserNav';

import { toast, ToastContainer } from 'react-toastify';
import EachUser from './EachUser';
import AddPostModel from './AddPostModel';
import { handleLogout } from './UserControl';
import PostLists from './PostLists';
// let headers = new Headers();
// headers.append('Content-Type', 'application/json');
// headers.append('Access-Control-Allow-Origin', '*');
// headers.append('Accept', 'application/json');
// axios.defaults.headers.common[
//   'Authorization'
// ] = `Bearer ${process.env.REACT_APP_API_KEY}`;
// headers.append('Authorization', `Bearer ${process.env.REACT_APP_API_KEY}`);
// const api = sessionStorage.getItem('token');
// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${api}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const User = () => {
  const { uId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
      window.history.go(1);
    };
    const suserId = sessionStorage.getItem('userId');
    // console.log(`${process.env.REACT_APP_API_KEY}`);
    // console.log(process.env.REACT_APP_KEY);
    //console.log(sessionStorage.getItem('token'));
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + sessionStorage.getItem('token');
    // Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    if (suserId === uId) {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/user/${uId}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      }).then((response) => {
        console.log(response.data);
        setUser(response.data.info);
        setItems(response.data.items);
        setCategories(response.data.categories);
      });
    } else {
      navigate('');
    }
  }, [refreshKey]);

  //for modal
  const [addForm, setAddForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateUserForm, setUpdateUserForm] = useState(false);
  return (
    <>
      <ToastContainer position="top-center" />
      <UserNav logout={() => handleLogout(navigate)} />

      <Container>
        <EachUser
          user={user}
          items={items}
          setUpdateUserForm={setUpdateUserForm}
          toast={toast}
        />
        <PostLists
          items={items}
          user={user}
          hold={hold}
          setHold={setHold}
          navigate={navigate}
          setRefreshKey={setRefreshKey}
          toast={toast}
          setAddForm={setAddForm}
        />
        {/* for adding new post (modal form) */}
        <AddPostModel
          user={user}
          categories={categories}
          addForm={addForm}
          setAddForm={setAddForm}
          toast={toast}
          setRefreshKey={setRefreshKey}
        />

        <Modal show={updateUserForm} onHide={() => setUpdateUserForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Info</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default User;
