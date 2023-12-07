import React from 'react';
import Header from './Header';
import Profile from './Profile';
// import the provider
import { UserProvider } from '../context/user';
import { ThemeContext, ThemeProvider } from '../context/theme';

function App() {
  const { theme } = ThemeProvider(ThemeContext);
  return (
    <main className={theme}>
      <ThemeProvider>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </ThemeProvider>
    </main>

  );
}

export default App;