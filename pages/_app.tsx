import App from 'next/app';
import { withHydrate } from 'effector-next';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../ui/theme';
import GlobalStyles from '../ui/global-styles';
import '@models/init';

class MyApp extends App {
  state = {
    theme: lightTheme,
  };

  componentDidMount() {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersColorScheme.matches) {
      this.setState((prevState) => ({
        ...prevState,
        theme: darkTheme,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        theme: lightTheme,
      }));
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

const enhance = withHydrate();

export default enhance(MyApp);
