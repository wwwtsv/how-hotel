import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-size: 26px;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.main.text.light};
`;
const TitleH2 = styled.h1`
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.main.text.light};
`;
const TitleH3 = styled.h1`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.main.text.light};
`;

export { TitleH1, TitleH2, TitleH3 };
