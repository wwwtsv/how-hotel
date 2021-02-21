import styled from 'styled-components';
import { ChangeEventHandler, FC } from 'react';
import indents from '../../indents';

const SwitcherInput = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked ~ label {
    span {
      transform: translateX(48px);
    }
  }
`;

const SwitcherLabel = styled.label`
  padding: ${indents.xxs};
  position: relative;
  display: block;
  width: 80px;
  height: 30px;
  border-radius: 24px;
  border: 6px solid ${(props) => props.theme.border};
  cursor: pointer;
  overflow: hidden;
`;

const SwitcherControl = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  background: ${(props) => props.theme.accent};
  border-radius: 50%;
  transition: all, 0.2s ease;
`;

interface SwitcherProps {
  onChange: ChangeEventHandler;
}

const Switcher: FC<SwitcherProps> = ({ onChange }) => {
  return (
    <div style={{ position: 'relative' }}>
      <SwitcherInput onChange={onChange} type="checkbox" id="themeSwitch" />
      <SwitcherLabel htmlFor="themeSwitch">
        <SwitcherControl />
      </SwitcherLabel>
    </div>
  );
};

export default Switcher;
