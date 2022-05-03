import React from 'react';
import { Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import axios from 'axios';
import { ErrorMessage, Form, Formik } from 'formik';
import TextError from '../TextError';
import {
  Button,
  ButtonGroup,
  File,
  Input,
  InputGroup,
  Option,
  Select,
  TextArea,
} from './User.styles';
const AddPostModel = ({
  user,
  categories,
  addForm,
  setAddForm,
  toast,
  setRefreshKey,
}) => {
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
  //form formik and validation
  const onSubmit = (values, onSubmitProps) => {
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
      url: `${process.env.REACT_APP_API_ENDPOINT}/api/post`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
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

  return (
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
                <Button disabled={!formik.isValid || formik.isSubmitting}>
                  Add Post
                </Button>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AddPostModel;
