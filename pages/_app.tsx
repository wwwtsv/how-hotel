import App from 'next/app';
import { withHydrate } from 'effector-next';

const enhance = withHydrate();

export default enhance(App);
