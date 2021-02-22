import Switcher from '@base-components/switcher';
import { setDarkTheme, setLightTheme } from '@models/theme';
import { ChangeEvent } from 'react';
import { useEvent } from 'effector-react';

const ThemeSwitcher = () => {
  const darkThemeHandler = useEvent(setDarkTheme);
  const lightThemeHandler = useEvent(setLightTheme);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.checked ? darkThemeHandler() : lightThemeHandler();
  };

  return <Switcher onChange={handleChange} />;
};

export default ThemeSwitcher;
