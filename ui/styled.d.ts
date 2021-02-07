import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      accent: string;
      text: {
        light: string;
      };
      input: {
        color: string;
        borderColor: string;
        background: string;
        hover: {
          color: string;
          background: string;
        };
      };
    };
  }
}
