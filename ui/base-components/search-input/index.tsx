import styled from 'styled-components';

const BaseInput = styled.input`
  color: ${(props) => props.theme.main.input.color};
  background: ${(props) => props.theme.main.input.background};
  border: 1px solid ${(props) => props.theme.main.input.borderColor};
  border-radius: 8px;
`;

export default BaseInput;
