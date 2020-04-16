import React, { Component } from 'react';

import {
  Header,
  Editor,
} from './components';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.AppContainer}>
        <Header />

        <div className={styles.AppBody}>
          <h2>List of participants</h2>

          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
