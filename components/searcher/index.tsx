import React, { FC, FormEvent } from 'react';
import BaseInput from '@base-components/search-input';
import styled from 'styled-components';

const SearchInput = styled(BaseInput)`
  padding: 8px 12px;
  width: 34vw;
  height: 50px;
  transition: background-color 0.2s ease;
  outline: none;
  font-size: 24px;
  &:focus {
    background: ${(props) => props.theme.main.input.hover.background};
    color: ${(props) => props.theme.main.input.hover.color};
  }
`;

interface Props {
  onInput: (e: FormEvent<HTMLInputElement>) => void;
}

const Searcher: FC<Props> = ({ onInput }) => {
  return <SearchInput onInput={onInput} />;
};

export default Searcher;
