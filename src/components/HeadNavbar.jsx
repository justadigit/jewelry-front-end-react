import {
  ExpandMore,
  Facebook,
  LinkedIn,
  Mail,
  Person,
  Pinterest,
  Twitter,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;
const Head = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  font-size: 14px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Email = styled.div`
  display: flex;
  padding-right: 25px;
  border-right: 1px solid gray;
`;
const MailIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
  & > * {
    font-size: 18px !important;
  }
`;
const Header = styled.div`
  margin-left: 25px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  & > * {
    font-size: 18px !important;
  }
`;
const Language = styled.div`
  font-size: 13px;
  padding: 0 15px;
  display: flex;
  border-left: 1px solid gray;
`;
const LanguageIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;

  & > * {
    font-size: 18px !important;
  }
`;
const Auth = styled.div`
  padding: 0 15px;
  display: flex;
  border-left: 1px solid gray;
`;
const PersonIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;

  & > * {
    font-size: 18px !important;
  }
`;
const HeadNavbar = () => {
  return (
    <Container>
      <Head>
        <Left>
          <Email>
            <MailIcon>
              <Mail />
            </MailIcon>
            hello@client.com
          </Email>
          <Header>Free Shipping for all Order of $99</Header>
        </Left>
        <Right>
          <Social>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Twitter />
            </SocialIcon>
            <SocialIcon>
              <LinkedIn />
            </SocialIcon>
            <SocialIcon>
              <Pinterest />
            </SocialIcon>
          </Social>
          <Language>
            English
            <LanguageIcon>
              <ExpandMore />
            </LanguageIcon>
          </Language>
          <Auth>
            <PersonIcon>
              <Person />
            </PersonIcon>
            Login
          </Auth>
        </Right>
      </Head>
    </Container>
  );
};

export default HeadNavbar;
