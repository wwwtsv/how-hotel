import App from 'next/app';
import { withHydrate } from 'effector-next';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

const enhance = withHydrate();

export default enhance(MyApp);
