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
// has onEdit and onRemove props, table should be dumb
export const AppContext = React.createContext({});

const App = () => {
  const [data, setData] = useState(fakeData);

  const handleSubmitNew = useCallback((newObj) => {
    setData([newObj, ...data]);
  }, [data]);

  const sortData = useCallback((key, order) => {
    const tmp = Array.from(data);
    tmp.sort((a, b) => {
      let tmpA = a;
      let tmpB = b;
      if (order === 'desc') {
        tmpA = b;
        tmpB = a;
      }
      const valueA = tmpA[key].toLowerCase();
      const valueB = tmpB[key].toLowerCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    setData(tmp);
  }, [data]);

  return (
    <AppContext.Provider value={{ setData, sortData }}>
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
