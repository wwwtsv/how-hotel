import styled from 'styled-components';

const Loading = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-top: 4px solid;
  border-right: 4px solid;
  border-bottom: 4px solid;
  border-left: 4px solid;
  border-top-color: ${(props) => props.theme.accent};
  border-right-color: ${(props) => props.theme.accent};
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: spin infinite linear 1s;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
