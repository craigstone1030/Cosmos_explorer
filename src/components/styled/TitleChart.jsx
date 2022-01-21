import styled from 'styled-components';
import TitleMinor from './TitleMinor';

const TitleChart = styled(TitleMinor).attrs({ as: 'h3' })`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.black};
  margin-bottom: 0;
`;

export default TitleChart;
