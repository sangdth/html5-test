import React, {
  useCallback,
  useState,
} from 'react';
import faker from 'faker';

import {
  Header,
  Editor,
  Table,
} from './components';

import styles from './App.module.scss';

// Generate fake data
const fakeData = Array.from({ length: 20 }, () => ({
  id: faker.random.uuid(),
  fullName: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(2),
}));

// Make simple context to mimic the delete action
// because in real life we should not let the Table
// has onEdit and onRemove props, it should be dumb
export const AppContext = React.createContext({});

const App = () => {
  const [data, setData] = useState(fakeData);

  const handleSubmitNew = useCallback((newObj) => {
    setData([newObj, ...data]);
  }, [data]);

  return (
    <AppContext.Provider value={{ setData }}>
      <div className={styles.Container}>
        <Header />

        <div className={styles.Content}>
          <h2>List of participants</h2>

          <Editor
            isNew
            onSubmit={handleSubmitNew}
          />

          <Table data={data} />

        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
