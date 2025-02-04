// src/components/Header.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <header className={theme}>
      <h1>Mitt CV</h1>
      <button onClick={toggleTheme}>Byt tema</button>
    </header>
  );
};

export default Header;