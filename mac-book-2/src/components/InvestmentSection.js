import styled from "styled-components";

const InvestmentSection = () => {
  return (
    <Section>
      <Title data-aos="fade-up">投資としての価値</Title>
      <InvestmentCards>
        <Card data-aos="flip-left">
          <Icon className="fas fa-money-bill-wave"></Icon>
          <CardTitle>月々の投資額</CardTitle>
          <CardText>
            学生・教職員価格を利用し、月々
            <span className="highlight">5,827円</span>の36回払いで購入可能。
          </CardText>
        </Card>
        <Card data-aos="flip-right">
          <Icon className="fas fa-chart-line"></Icon>
          <CardTitle>長期的な価値</CardTitle>
          <CardText>
            前回の投資で6年間使用し、C++スキルを獲得。今回の投資でさらなる成長が期待できます。
          </CardText>
        </Card>
      </InvestmentCards>
      <InvestmentHighlight data-aos="zoom-in">
        <p>
          1日あたり約<span className="highlight">194円</span>
          の投資で、研究効率を劇的に向上させ、あなたの可能性を最大限に引き出します！
        </p>
      </InvestmentHighlight>
      <FinalMessage data-aos="fade-up">
        <p>
          お父さん、これが私の次のステップです。新しいM3 MacBook
          Airで、さらに高みを目指します。ご支援をお願いします。
        </p>
      </FinalMessage>
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

const InvestmentCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
  flex: 1;
  min-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.i`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1.2rem;

  .highlight {
    color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
`;

const InvestmentHighlight = styled.div`
  background-color: rgba(255, 193, 7, 0.2);
  color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`;

const FinalMessage = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export default InvestmentSection;
