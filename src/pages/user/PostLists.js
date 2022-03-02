import React from 'react';
import axios from 'axios';
import {
  AddButton,
  Head,
  Header,
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
} from './User.styles';
import { handleDelete, handleDetail } from './UserControl';

const PostLists = ({
  items,
  user,
  hold,
  setHold,
  setRefreshKey,
  toast,
  navigate,
  setAddForm,
}) => {
  return (
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
                <PostDesc>
                  {item.description.length > 30
                    ? item.description.slice(0, 200) + '...'
                    : item.description}
                </PostDesc>
                <PostType>{item.categoryId.title}</PostType>
                <PostButtonGroup>
                  <PostVisible vkey={item.state}>
                    {item.state ? 'Approved' : 'Pending'}
                  </PostVisible>
                  <PostButton
                    color="#09aeae"
                    onClick={() => handleDetail(item._id, navigate)}
                  >
                    Detail
                  </PostButton>
                  <PostButton color="#044cd0">Update</PostButton>
                  <PostButton
                    color="#d72503"
                    onClick={() =>
                      handleDelete(
                        item._id,
                        user,
                        setHold,
                        axios,
                        setRefreshKey,
                        toast
                      )
                    }
                    disabled={hold}
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
  );
};

export default PostLists;
