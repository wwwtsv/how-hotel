import styled from 'styled-components';

const BaseInput = styled.input`
  color: ${(props) => props.theme.color};
  background: transparent;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
`;

export default BaseInput;
