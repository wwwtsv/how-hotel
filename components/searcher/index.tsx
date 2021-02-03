import React from 'react';
import BaseInput from '@base-components/search-input';
import styled from 'styled-components';

const SearchInput = styled(BaseInput)`
  padding: 8px 12px;
  width: 24vw;
  height: 40px;
  transition: background-color 0.2s ease;
  outline: none;
  font-size: 24px;
  &:focus {
    background: ${(props) => props.theme.main.input.hover.background};
    color: ${(props) => props.theme.main.input.hover.color};
  }
`;

const Searcher = () => {
  return <SearchInput />;
};

export default Searcher;
