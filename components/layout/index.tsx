import { FC } from 'react';
import Container from '@base-components/container';
import styled from 'styled-components';

const Styled = styled.div`
  background: ${(props) => props.theme.background};
`;

const Layout: FC = ({ children }) => {
  return (
    <Styled>
      <Container>{children}</Container>
    </Styled>
  );
};

export default Layout;
