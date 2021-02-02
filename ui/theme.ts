import colours from './colours';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  main: {
    input: {
      color: colours.baseWhite,
      borderColor: colours.input.faintWeak.default,
      background: colours.input.back.faintWeak.default,
    },
  },
};

export default theme;
