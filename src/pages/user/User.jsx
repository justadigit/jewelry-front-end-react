import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AddButton,
  Container,
  Head,
  Header,
  InfoLabel,
  InfoValue,
  Post,
  PostButton,
  PostButtonGroup,
  PostDate,
  PostDesc,
  PostImage,
  PostImgCover,
  PostInfo,
  Posts,
  PostsTable,
  PostTitle,
  PostType,
  PostVisible,
  Update,
  UserCard,
  UserInfo,
  InputGroup,
  Input,
  ButtonGroup,
  Button,
  TextArea,
  File,
  Select,
  Option,
} from './User.styles';
import UserNav from './UserNav';
import { ErrorMessage, Form, Formik } from 'formik';
import TextError from '../TextError';
import { toast, ToastContainer } from 'react-toastify';
const User = () => {
  const { uId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const suserId = sessionStorage.getItem('userId');
    if (suserId === uId) {
      axios
        .get(`https://jewelry-third-step.herokuapp.com/api/user/${uId}`)
        .then((response) => {
          //console.log(response.data);
          setUser(response.data.info);
          setItems(response.data.items);
          setCategories(response.data.categories);
        });
    } else {
      navigate('/*');
    }
  }, [refreshKey]);

  //logout
  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    if (!sessionStorage.length > 0) {
      navigate('/');
    }
  };

  //for modal
  const [addForm, setAddForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);

  //form formik and validation
  const initialValues = {
    categoryId: ``,
    userId: `${user.userId}`,
    title: '',
    description: '',
    price: '',
    mainImage: '',
    relatedImage: '',
  };
  const validationSchema = Yup.object({
    categoryId: Yup.string().required('Required!'),
    title: Yup.string().required('Required!'),
    description: Yup.string().required('Required!'),
    price: Yup.number().required('Required!'),
    mainImage: Yup.mixed().required('Required!'),
    relatedImage: Yup.array()
      .min(4, 'Select at least 4 files')
      .required('Required'),
  });
  const onSubmit = async (values, onSubmitProps) => {
    //console.log('onSubmitPorps', onSubmitProps);
    onSubmitProps.setSubmitting(true);
    const formData = new FormData();
    formData.append('categoryId', values.categoryId);
    formData.append('userId', values.userId);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('image', values.mainImage);
    // formData.append('relatedImage', values.relatedImage);
    for (let i = 0; i < values.relatedImage.length; i++) {
      formData.append(`relatedImage`, values.relatedImage[i]);
    }
    // values.relatedImage.forEach((photo, index) => {
    //   formData.append(`relatedImage[${index}]`, values.relatedImage[index]);
    // });
    // console.log('formdata', formData.get('relatedImage'));
    // console.log('values', values);

    axios.defaults.headers.post['Accept'] = 'application/json';
    axios({
      method: 'post',
      url: 'https://jewelry-third-step.herokuapp.com/api/post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        //console.log('Success', response.data);
        if (response.data.error) {
          toast.error(response.data.message);
        } else {
          onSubmitProps.resetForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
          setRefreshKey((oldKey) => oldKey + 1);
          setAddForm(false);
          toast.success(response.data.message);
        }
        onSubmitProps.setSubmitting(false);
      })
      .cathc((err) => {
        toast.error('Something Wrong!Please Try Again!');
        onSubmitProps.setSubmitting(false);
      });
  };

  //Delete Request
  function handleDelete(postId) {
    axios({
      method: 'delete',
      url: `https://jewelry-third-step.herokuapp.com/api/post/${postId}/${user.userId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setRefreshKey((oldKey) => oldKey + 1);
        toast.success(response.data.message);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.success(err.message);
      });
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <UserNav logout={handleLogout} />

      <Container>
        <UserCard>
          <UserInfo>
            <InfoLabel>Name</InfoLabel>
            <InfoValue>{user.name}</InfoValue>
          </UserInfo>
          <UserInfo>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>{user.email}</InfoValue>
          </UserInfo>
          <UserInfo>
            <InfoLabel>Posts</InfoLabel>
            <InfoValue>{items.length}</InfoValue>
          </UserInfo>
          <Update onClick={() => setUpdateForm(true)}>Update Info</Update>
        </UserCard>

        <Posts>
          <Head>
            <Header>All Your Posts</Header>
            <AddButton onClick={() => setAddForm(true)}>
              <big>+</big> Add New Post
            </AddButton>
          </Head>
          {items.length === 0 ? (
            <h2
              style={{
                display: 'flex',
                alignItem: 'center',
                justifyContent: 'center',
                color: 'lightgray',
              }}
            >
              No Post!Create Something Special!
            </h2>
          ) : (
            <PostsTable>
              {items.map((item) => (
                <Post key={item._id}>
                  <PostInfo>
                    <PostDate>Feb 10,2022</PostDate>
                    <PostTitle>{item.title}</PostTitle>
                    <PostDesc>{item.description}</PostDesc>
                    <PostType>{item.categoryId.title}</PostType>
                    <PostButtonGroup>
                      <PostVisible vkey={item.state}>
                        {item.state ? 'Approved' : 'Pending'}
                      </PostVisible>
                      <PostButton color="#09aeae">Detail</PostButton>
                      <PostButton color="#044cd0">Update</PostButton>
                      <PostButton
                        color="#d72503"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </PostButton>
                    </PostButtonGroup>
                  </PostInfo>
                  <PostImgCover>
                    <PostImage
                      src={`https://jewelry-third-step.herokuapp.com/${item.image}`}
                    />
                  </PostImgCover>
                </Post>
              ))}
            </PostsTable>
          )}
        </Posts>

        {/* for adding new post (modal form) */}
        <Modal show={addForm} onHide={() => setAddForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form encType="multipart/form-data">
                  <InputGroup>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      value={formik.values.title}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <ErrorMessage name="title" component={TextError} />
                  </InputGroup>

                  <InputGroup>
                    <TextArea
                      name="description"
                      placeholder="Description"
                      value={formik.values.description}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <ErrorMessage name="description" component={TextError} />
                  </InputGroup>
                  <InputGroup>
                    <Input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Pirce"
                      value={formik.values.price}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <ErrorMessage name="price" component={TextError} />
                  </InputGroup>
                  <InputGroup>
                    <Select
                      id="categoryType"
                      name="categoryId"
                      value={formik.values.categoryId}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    >
                      <Option key={1} value="">
                        Select Type
                      </Option>
                      {categories.map((category) => (
                        <Option key={category._id} value={category._id}>
                          {category.title}
                        </Option>
                      ))}
                    </Select>
                    <ErrorMessage name="categoryId" component={TextError} />
                  </InputGroup>
                  <InputGroup>
                    <File
                      type="file"
                      id="mainImage"
                      name="mainImage"
                      placeholder="Chose Main Image"
                      onBlur={formik.handleBlur}
                      onChange={(event) =>
                        formik.setFieldValue('mainImage', event.target.files[0])
                      }
                    />
                    <ErrorMessage name="mainImage" component={TextError} />
                  </InputGroup>
                  <InputGroup>
                    <File
                      type="file"
                      id="relatedImage"
                      name="relatedImage"
                      onBlur={formik.handleBlur}
                      onChange={(event) =>
                        formik.setFieldValue(
                          'relatedImage',
                          Array.from(event.target.files)
                        )
                      }
                      multiple
                    />
                    <ErrorMessage name="relatedImage" component={TextError} />
                  </InputGroup>
                  <ButtonGroup>
                    <Button
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Add Post
                    </Button>
                  </ButtonGroup>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>

        <Modal show={updateForm} onHide={() => setUpdateForm(false)}>
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
