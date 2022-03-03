import styled from 'styled-components';
export const Container = styled.div`
  width: 60vw;
  margin: 10px auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  margin-bottom: 10px;
`;
export const ImageCover = styled.div`
  flex: 1;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ebebeb;
`;
export const DetailsWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin-top: 0;
`;
export const Price = styled.span`
  margin: 20px 0;
  font-size: 20px;
  color: red;
  font-weight: 600;
`;
export const Weight = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 50%;
  margin: 10px 0;
  display: flex;
`;
export const ItemTitle = styled.span`
  flex: 3;
`;
export const ItemValue = styled.span`
  flex: 2;
`;
export const Description = styled.div`
  margin: 20px 0;
  margin-top: 40px;
  text-align: justify;
  line-height: 25px;
`;
export const Avail = styled.span`
  font-size: 18px;
  font-weight: 600;
  width: 50%;
  margin: 10px 0;
  display: flex;
`;
export const ButtonWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  align-items: center;
  width: 60%;
`;
export const Button = styled.button`
  padding: 10px;
  flex: 6;
  margin-right: 20px;
  background: #4aa5ff;
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.79);
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const Icon = styled.span`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center !important;
  padding: 3px;
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  & > * {
    font-size: 40px !important;
    color: #787878;
  }
`;
//-------------Comment---------------------
export const CommentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
`;
export const CommentTitle = styled.span`
  & > * {
    color: black;
    margin-right: 5px;
  }
  display: flex;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 10px;
  color: gray;
`;
export const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 5px 0;
  -webkit-box-shadow: 5px 5px 11px -8px rgba(0, 0, 0, 0.18);
  box-shadow: 5px 5px 11px -8px rgba(0, 0, 0, 0.18);
`;
export const CommentName = styled.span`
  color: #6ba3fd;
  font-weight: 600;
`;
export const CommentText = styled.span`
  margin-left: 10px;
  font-weight: 600;
`;
export const CommentTime = styled.span`
  & > * {
    margin-left: 5px;
    color: gray;
    font-weight: 600;
  }
  display: flex;
  align-items: center;
  justify-content: right;
  color: gray;
  font-size: 12px;
  font-weight: 600;
`;
export const CommentBox = styled.div`
  margin-top: 10px;
  padding: 10px 5px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const CommentInput = styled.textarea`
  display: flex;
  flex: 11;
  margin-right: 10px;
  padding-left: 10px;
`;
export const CommentButton = styled.button`
  &:disabled {
    background: #6ab5ff;
    cursor: not-allowed;
  }
  & > * {
    color: white;
    font-size: 16px !important;
  }
  cursor: pointer;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  flex: 1;
  border: none;
  border-radius: 5px;
  background: #007efd;
`;
export const CommentDelete = styled.button`
  & > * {
    color: lightgray;
  }
  background: none;
  height: 30px;
  display: ${(props) =>
    props.commenterId === sessionStorage.userId ? 'flex' : 'none'};
  align-items: center;
  border: none;
  cursor: pointer;
  & > *:hover {
    color: #fd4053;
  }
`;
