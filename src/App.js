import React from 'react';

import {
  Header,
  Editor,
  Table,
} from './components';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.Container}>
    <Header />

    <div className={styles.Content}>
      <h2>List of participants</h2>

      <Editor isNew />
      <Table />
    </div>
  </div>
);

export default App;
