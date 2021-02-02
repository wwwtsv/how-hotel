import App from 'next/app';
import { withHydrate } from 'effector-next';
import { ThemeProvider } from 'styled-components';
import theme from '../ui/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

const enhance = withHydrate();

export default enhance(MyApp);
