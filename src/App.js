import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import styles from './components/styles/layout.module.css';
import Quote from './components/Quote';
import Home from './components/Home';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <h4 className={styles.navHeading}>Math Magicians</h4>
            <ul className={styles.navLinks}>
              <li className={styles.navLink}>
                <a href="/">Home</a>
              </li>
              <li className={styles.navLink}>
                <a href="/calculator">Calculator</a>
              </li>
              <li className={styles.navLink}>
                <a href="/quote">Quote</a>
              </li>
            </ul>
          </nav>
        </header>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
