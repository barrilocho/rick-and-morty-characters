import { useContext } from 'react';
import './../App.css';
import ThemeContext from './../context/ThemeContext';

const Header = () => {
  let { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    console.log(theme, 'aqui tema');
    setTheme(theme);
  }

  return (
    <div className="Header">
      <h1 className="title">Rick and Morty Characters</h1>
      <button type="button" onClick={handleClick}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
      {/* <button type="button" onClick={() => {setTheme(!darkMode) }}>{theme == 'dark' ? 'Dark Mode' : 'Light Mode'}</button> */}
    </div>
  );
}

export default Header;