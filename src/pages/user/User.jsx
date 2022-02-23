import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import JADE from '../../images/jade.png';
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
} from './User.styles';
const User = () => {
  const { uId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const suserId = sessionStorage.getItem('userId');
    if (suserId === uId) {
      setLoading(true);
      axios
        .get(`https://jewelry-third-step.herokuapp.com/api/user/${uId}`)
        .then((response) => {
          setUser(response.data.info);
          setItems(response.data.items);
          setLoading(false);
        });
    } else {
      navigate('/*');
    }
  }, [uId]);

  //for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return loading ? (
    'Loading...'
  ) : (
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
        <Update>Update Info</Update>
      </UserCard>

      <Posts>
        <Head>
          <Header>All Your Posts</Header>
          <AddButton onClick={handleShow}>
            <big>+</big> Add New Post
          </AddButton>
        </Head>
        <PostsTable>
          <Post>
            <PostInfo>
              <PostDate>Feb 10,2022</PostDate>
              <PostTitle>Jade Ruby Diamond</PostTitle>
              <PostDesc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                expedita commodi ea dolor cupiditate deleniti eum eius modi
                quae? Quasi eos nam mollitia quam aspernatur non quaerat porro
                temporibus minima . . .
              </PostDesc>
              <PostType>Jade</PostType>
              <PostButtonGroup>
                <PostVisible vkey="approve">Approved</PostVisible>
                <PostButton color="#09aeae">Detail</PostButton>
                <PostButton color="#044cd0">Update</PostButton>
                <PostButton color="#d72503">Delete</PostButton>
              </PostButtonGroup>
            </PostInfo>
            <PostImgCover>
              <PostImage src={JADE} />
            </PostImgCover>
          </Post>
          <Post>
            <PostInfo>
              <PostDate>Feb 10,2022</PostDate>
              <PostTitle>Jade Ruby Diamond</PostTitle>
              <PostDesc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                expedita commodi ea dolor cupiditate deleniti eum eius modi
                quae? Quasi eos nam mollitia quam aspernatur non quaerat porro
                temporibus minima . . .
              </PostDesc>
              <PostType>Jade</PostType>
              <PostButtonGroup>
                <PostVisible vkey="approve">Approved</PostVisible>
                <PostButton color="#09aeae">Detail</PostButton>
                <PostButton color="#044cd0">Update</PostButton>
                <PostButton color="#d72503">Delete</PostButton>
              </PostButtonGroup>
            </PostInfo>
            <PostImgCover>
              <PostImage src={JADE} />
            </PostImgCover>
          </Post>
          <Post>
            <PostInfo>
              <PostDate>Feb 10,2022</PostDate>
              <PostTitle>Jade Ruby Diamond</PostTitle>
              <PostDesc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                expedita commodi ea dolor cupiditate deleniti eum eius modi
                quae? Quasi eos nam mollitia quam aspernatur non quaerat porro
                temporibus minima . . .
              </PostDesc>
              <PostType>Jade</PostType>
              <PostButtonGroup>
                <PostVisible vkey="approve">Approved</PostVisible>
                <PostButton color="#09aeae">Detail</PostButton>
                <PostButton color="#044cd0">Update</PostButton>
                <PostButton color="#d72503">Delete</PostButton>
              </PostButtonGroup>
            </PostInfo>
            <PostImgCover>
              <PostImage src={JADE} />
            </PostImgCover>
          </Post>
        </PostsTable>
      </Posts>

      {/* for adding new post (modal form) */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default User;
