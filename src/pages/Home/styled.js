import styled from 'styled-components';

// Material UI
import Typography from '@material-ui/core/Typography';

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 345px);
  justify-content: space-evenly;
`;

export const StyledTypography = styled(Typography)`
  grid-column: 1 / -1;
  margin-top: 20px;
  text-align: center;
`;
