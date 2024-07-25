import styled from "styled-components";

const GrowthSection = () => {
  return (
    <Section>
      <Title data-aos="fade-up">6年間の成長の軌跡</Title>
      <Timeline>
        <TimelineItem data-aos="fade-right">
          <TimelineContent>
            <h3>2018年: 最初のMacBook Pro</h3>
            <p>プログラミングの基礎を学び始める</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos="fade-left">
          <TimelineContent>
            <h3>2020年: C++マスター</h3>
            <p>複雑なアルゴリズムの実装が可能に</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos="fade-right">
          <TimelineContent>
            <h3>2022年: 研究開始</h3>
            <p>大規模データ処理の必要性を実感</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos="fade-left">
          <TimelineContent>
            <h3>2024年: 自己研鑽の成果</h3>
            <p>このプレゼンテーションサイトを自力で作成</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Section>
  );
};

const Section = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(45deg, #007bff, #6f42c1, #e83e8c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border: 4px solid ${({ theme }) => theme.colors.primary};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(even) {
    left: 50%;
  }

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even)::after {
    left: -16px;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

export default GrowthSection;
