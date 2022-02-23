import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  InfoLabel,
  InfoValue,
  Posts,
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

      <Posts>{user.email}</Posts>
    </Container>
  );
};

export default User;
