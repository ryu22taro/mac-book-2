import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 原口龍太郎. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: rgba(10, 25, 47, 0.9);
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

export default Footer;
