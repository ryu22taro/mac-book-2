import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Section>
      <Content>
        <Title
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          革新的M3 MacBook Air
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          〜 6年間の成長と未来への革新的投資 〜
        </Subtitle>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

const Content = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
`;

export default HeroSection;
