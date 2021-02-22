import { FC, FormEvent } from 'react';
import BaseInput from '@base-components/search-input';
import styled from 'styled-components';
import ThemeSwitcher from '@components/theme-switcher';

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

const Content = styled.div`
  display: grid;
  grid: auto-flow 1fr / auto-flor 1fr;
`;

const Searcher: FC<Props> = ({ onInput }) => {
  return (
    <Content>
      <SearchInput onInput={onInput} />
      <ThemeSwitcher />
    </Content>
  );
};

export default Searcher;
