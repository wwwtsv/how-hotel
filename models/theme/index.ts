import { createEvent, createStore } from 'effector-next';
import { darkTheme, lightTheme } from '../../ui/theme';

const setLightTheme = createEvent();
const setDarkTheme = createEvent();

const $theme = createStore(lightTheme)
  .on(setLightTheme, () => lightTheme)
  .on(setDarkTheme, () => darkTheme);

export { setLightTheme, setDarkTheme, $theme };
