import styled from "styled-components";

const ComparisonSection = () => {
  return (
    <Section>
      <Title data-aos="fade-up">スペック比較</Title>
      <ComparisonWrapper>
        <Table data-aos="fade-up">
          <thead>
            <tr>
              <th>項目</th>
              <th>現在のMacBook Pro (2018)</th>
              <th>新M3 MacBook Air</th>
              <th>改善率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>プロセッサ</td>
              <td>クアッドコアIntel Core i7 (2.7 GHz)</td>
              <td>8コアCPU搭載Apple M3チップ</td>
              <td>
                <span className="improvement">コア数2倍</span>
              </td>
            </tr>
            <tr>
              <td>グラフィックス</td>
              <td>内蔵Intel Iris Plus Graphics</td>
              <td>10コアGPU</td>
              <td>
                <span className="improvement">大幅向上</span>
              </td>
            </tr>
            <tr>
              <td>メモリ</td>
              <td>16 GB</td>
              <td>16 GBユニファイドメモリ</td>
              <td>
                <span className="improvement">効率向上</span>
              </td>
            </tr>
            <tr>
              <td>ストレージ</td>
              <td>256 GB SSD</td>
              <td>512 GB SSD</td>
              <td>
                <span className="improvement">2倍</span>
              </td>
            </tr>
            <tr>
              <td>バッテリー寿命</td>
              <td>約10時間（新品時）</td>
              <td>最大18時間</td>
              <td>
                <span className="improvement">80%向上</span>
              </td>
            </tr>
          </tbody>
        </Table>
        <ChartWrapper data-aos="zoom-in">
          <canvas id="performance-chart"></canvas>
        </ChartWrapper>
      </ComparisonWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const ComparisonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th,
  td {
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: rgba(0, 123, 255, 0.2);
    color: ${({ theme }) => theme.colors.primary};
  }

  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .improvement {
    color: #28a745;
    font-weight: 700;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export default ComparisonSection;
