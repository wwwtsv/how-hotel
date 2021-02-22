import App from 'next/app';
import { withHydrate } from 'effector-next';
import GlobalStyles from '../ui/global-styles';
import '@models/init';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

const enhance = withHydrate();

export default enhance(MyApp);
