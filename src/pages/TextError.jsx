import React from 'react';
import styled from 'styled-components';
const Error = styled.div`
  color: red;
  font-weight: 600;
`;
const TextError = (props) => {
  return <Error>{props.children}</Error>;
};

export default TextError;
