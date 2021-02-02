import styled from 'styled-components';

const SearchInput = styled.div`
  color: ${(props) => props.theme.main.input.color};
  background: ${(props) => props.theme.main.input.background};
  border: 1px solid ${(props) => props.theme.main.input.background};
  border-radius: 8px;
`;

export default SearchInput;
