import colours from './colours';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  main: {
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
