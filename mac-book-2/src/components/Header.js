import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Nav>
      <NavWrapper>
        <Brand href="#home">MacBook革新</Brand>
        <NavMenu>
          <NavItem href="#home">ホーム</NavItem>
          <NavItem href="#growth">成長の軌跡</NavItem>
          <NavItem href="#comparison">スペック比較</NavItem>
          <NavItem href="#investment">投資価値</NavItem>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: rgba(10, 25, 47, 0.9);
  backdrop-filter: blur(10px);
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Brand = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  list-style: none;
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  margin-left: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;
