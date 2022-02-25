import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

//User Profile ---------
export const UserCard = styled.div`
  height: 400px;
  background-color: white;
  padding: 40px;
  margin: 20px;
  border-radius: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
`;
export const UserInfo = styled.div`
  border-bottom: 1px solid gray;
  padding: 20px 0px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InfoLabel = styled.span`
  flex: 2;
  font-weight: 600;
`;
export const InfoValue = styled.span`
  flex: 3;
  font-weight: 600;
`;
export const Update = styled.button`
  background-color: gold;
  font-weight: 600;
  width: 50%;
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
//Posts -------------------
export const Posts = styled.div`
  flex: 4;
  background-color: white;
  padding: 40px;
  margin: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Header = styled.h1`
  margin-bottom: 20px;
`;
export const AddButton = styled.button`
  background-color: gold;
  padding: 5px 10px;
  line-height: 25px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export const PostsTable = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Post = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #000; ;
`;
export const PostInfo = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;
export const PostDate = styled.span`
  font-size: 13px;
  color: lightgray;
  font-weight: 600;
  margin: 5px 0;
`;
export const PostTitle = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const PostDesc = styled.div`
  font-size: 15px;
  padding: 15px;
`;
export const PostType = styled.span`
  background-color: lightblue;
  font-size: 13px;
  font-weight: 600;
  width: 18%;
  padding: 4px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const PostImgCover = styled.div`
  flex: 1;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PostImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
`;
export const PostCategory = styled.div``;
export const PostButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const PostVisible = styled.span`
  background: ${(props) => (props.vkey ? '#1fae51' : '#ffdf00')};
  color: white;
  font-size: 8px;
  font-weight: 600;
  padding: 3px 5px;
  margin: 2px 5px;
  border-radius: 15px;
`;
export const PostButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : '')};
  color: white;
  border: none;
  padding: 5px 15px;
  margin: 2px 7px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
`;

//for add new post form
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  height: 20px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const TextArea = styled.textarea`
  flex: 1;
  height: 20px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const File = styled.input`
  flex: 1;
  height: 20px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Select = styled.select`
  flex: 1;
  height: 20px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Option = styled.option``;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  &:disabled {
    cursor: not-allowed;
    background-color: #eec800;
    color: gray;
  }
  margin-top: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: gold;
  color: black;
  font-weight: bold;
`;
