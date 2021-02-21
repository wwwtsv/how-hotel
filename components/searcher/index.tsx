import React, { FC, FormEvent } from 'react';
import BaseInput from '@base-components/search-input';
import styled from 'styled-components';
import Switcher from '@base-components/switcher';

const SearchInput = styled(BaseInput)`
  padding: 8px 12px;
  width: 34vw;
  height: 50px;
  transition: background-color 0.2s ease;
  outline: none;
  font-size: 24px;
`;

interface Props {
  onInput: (e: FormEvent<HTMLInputElement>) => void;
}

const Searcher: FC<Props> = ({ onInput }) => {
  return (
    <div>
      <SearchInput onInput={onInput} />
      <Switcher />
    </div>
  );
};

export default Searcher;
