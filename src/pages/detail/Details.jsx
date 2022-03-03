import { DeleteForever, FavoriteBorder, Send } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Moment from 'react-moment';
import 'moment-timezone';
import { LocalContext } from '../../App';
import Category from '../../components/Category';
import HeadNavbar from '../../components/HeadNavbar';
import Navbar from '../../components/Navbar';
import './Details.css';
import {
  Avail,
  Button,
  ButtonWrapper,
  Comment,
  CommentBox,
  CommentButton,
  CommentContainer,
  CommentDelete,
  CommentInput,
  CommentName,
  CommentText,
  CommentTime,
  CommentTitle,
  Container,
  Description,
  DetailsWrapper,
  Icon,
  ImageCover,
  ItemTitle,
  ItemValue,
  Price,
  Title,
  Weight,
  Wrapper,
} from './Details.styles';
import { toast, ToastContainer } from 'react-toastify';
import { handleComment, handleDelete } from './DetailControls';

const Details = () => {
  let { pid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState();
  const [commentInput, setCommentInput] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const [hold, setHold] = useState(false);
  const { t } = useContext(LocalContext);
  useEffect(() => {
    axios
      .get('https://jewelry-third-step.herokuapp.com/api/post/' + pid)
      .then((response) => {
        console.log(response.data.comments);
        setProduct(response.data.post);
        setComments(response.data.comments);
        setLoading(false);
      });
  }, [pid, refreshKey]);

  return (
    <>
      <HeadNavbar />
      <Navbar />
      <Category />
      <ToastContainer position="top-center" />
      {loading ? (
        'Loading....'
      ) : (
        <Container>
          <Wrapper>
            {/* <Image
              src={`https://jewelry-second-step.herokuapp.com/` + product.image}
            /> */}
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
                    src={
                      `https://jewelry-third-step.herokuapp.com/` +
                      product.image
                    }
                    alt=""
                  />
                </div>
                {product.relatedImg.map((relatedImg, key) => (
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
              <Title>{product.title}</Title>
              <Price>{product.price} MMK</Price>
              <Description>{product.description}</Description>
              <Weight>
                <ItemTitle>{t('weight')}</ItemTitle>{' '}
                <ItemValue>0.3 Caret</ItemValue>
              </Weight>
              <Avail>
                <ItemTitle>{t('available')}</ItemTitle>{' '}
                <ItemValue>Available</ItemValue>
              </Avail>
              <ButtonWrapper>
                <Button>
                  <a href="tel:+959774070583">{t('contact_to_buy')}</a>
                </Button>
                <Icon>
                  <FavoriteBorder />
                </Icon>
              </ButtonWrapper>
            </DetailsWrapper>
          </Wrapper>
          <CommentContainer>
            <CommentTitle>
              <span>({comments.length})</span> Comments
            </CommentTitle>
            {comments.map((comment) => {
              return (
                <Comment key={comment._id}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                      <CommentName>{comment.name} </CommentName>
                      <CommentTime>
                        <Moment fromNow>{comment.updatedAt}</Moment>
                      </CommentTime>
                    </div>
                    <CommentText>{comment.comment}</CommentText>
                  </div>
                  <CommentDelete
                    commenterId={comment.userId}
                    onClick={() =>
                      handleDelete(
                        comment.userId,
                        comment._id,
                        setRefreshKey,
                        setHold,
                        toast
                      )
                    }
                  >
                    <DeleteForever />
                  </CommentDelete>
                </Comment>
              );
            })}
            <CommentBox>
              <CommentInput
                placeholder="Enter your comment . . ."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              ></CommentInput>
              <CommentButton
                onClick={() =>
                  handleComment(
                    commentInput,
                    setCommentInput,
                    pid,
                    setHold,
                    setRefreshKey,
                    toast
                  )
                }
                disabled={commentInput.length < 1 || hold}
              >
                <Send />
              </CommentButton>
            </CommentBox>
          </CommentContainer>
        </Container>
      )}
    </>
  );
};

export default Details;
