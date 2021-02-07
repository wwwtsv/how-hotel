import { DefaultTheme } from 'styled-components';
import colours from './colours';

const theme: DefaultTheme = {
  main: {
    accent: colours.accentStrong,
    text: {
      light: colours.baseBlack,
    },
    input: {
      color: colours.baseWhite,
      borderColor: colours.input.faintWeak.shiftUp,
      background: colours.input.back.faintWeak.default,
      hover: {
        color: colours.baseBlack,
        background: colours.baseWhite,
      },
    },
  },
};

export default theme;
