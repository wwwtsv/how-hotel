import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      input: {
        color: string;
        borderColor: string;
        background: string;
      };
    };
  }
}
