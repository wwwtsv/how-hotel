import { DefaultTheme } from 'styled-components';
import colours from './colours';

export const lightTheme: DefaultTheme = {
  background: colours.baseWeak,
  color: colours.baseStrong,
  border: colours.faintStrong.default,
  accent: colours.accentStrong,
};

export const darkTheme: DefaultTheme = {
  background: colours.baseStrong,
  color: colours.baseWeak,
  border: colours.faintWeak.shiftUp,
  accent: colours.accentStrong,
};
