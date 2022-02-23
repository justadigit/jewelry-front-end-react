import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//User Profile ---------
export const UserCard = styled.div`
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
  background-color: blue;
  flex: 4;
  align-items: center;
  justify-content: center;
`;
