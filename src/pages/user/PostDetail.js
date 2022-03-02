import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {
  Comment,
  CommentContainer,
  CommentName,
  CommentText,
  CommentTitle,
  Description,
  DetailContainer,
  DetailsWrapper,
  GoBack,
  Icon,
  ImageCover,
  ItemTitle,
  ItemValue,
  Price,
  Title,
  Weight,
  Wrapper,
} from './User.styles';

import { handleLogout } from './UserControl';
import UserNav from './UserNav';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  ArrowBack,
  KeyboardReturnOutlined,
  SubdirectoryArrowLeftOutlined,
} from '@material-ui/icons';

const PostDetail = () => {
  let navigate = useNavigate();
  const { pId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + sessionStorage.getItem('token');

  useEffect(() => {
    console.log('Hello');
    //let isSubscribed = true;
    //delcare the async data fetching function
    const fetchData = async () => {
      const response = await axios({
        method: 'get',
        url: `https://jewelry-third-step.herokuapp.com/api/user/post/${pId}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await response.data;
      console.log(json);
      setPost(json.post);
      setComments(json.comments);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, [pId]);

  return loading ? (
    'Loading...'
  ) : (
    <>
      <ToastContainer position="top-center" />
      <UserNav logout={() => handleLogout(navigate)} />

      <DetailContainer>
        <GoBack onClick={() => navigate(-1)}>
          <SubdirectoryArrowLeftOutlined />
          Profile
        </GoBack>
        <Wrapper>
          <ImageCover>
            <Carousel
              loop={true}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              infiniteLoop={true}
              width={'80%'}
              autoPlay={true}
              thumbWidth={'100%'}
            >
              <div className="rimage">
                <img
                  src={`https://jewelry-third-step.herokuapp.com/${post.image}`}
                  alt=""
                />
              </div>
              {post.relatedImg.map((relatedImg, key) => (
                <div className="rimage" key={key}>
                  <img
                    src={
                      `https://jewelry-third-step.herokuapp.com/` + relatedImg
                    }
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </ImageCover>
          <DetailsWrapper>
            <Title>{post.title}</Title>
            <Price>{post.price} MMK</Price>
            <Description>{post.description}</Description>
            <Weight>
              <ItemTitle>State</ItemTitle>
              <ItemValue>{post.state ? 'Approved' : 'Pending'}</ItemValue>
            </Weight>
            <Weight>
              <ItemTitle>Type</ItemTitle>
              <ItemValue>{post.state ? 'Approved' : 'Pending'}</ItemValue>
            </Weight>
          </DetailsWrapper>
        </Wrapper>
        <CommentContainer>
          <CommentTitle>
            <span>{comments.length}</span> Comments
          </CommentTitle>
          {comments.map((comment) => {
            return (
              <Comment>
                <CommentName>{comment.name}</CommentName>
                <CommentText>{comment.comment}</CommentText>
              </Comment>
            );
          })}
        </CommentContainer>
      </DetailContainer>
    </>
  );
};

export default PostDetail;
