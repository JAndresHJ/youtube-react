import styled from 'styled-components';

// Material UI
import Typography from '@material-ui/core/Typography';

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)`
  flex: 0 0 100%;
  margin-top: 20px;
  text-align: center;
`;
