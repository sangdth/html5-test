import React, {
  useCallback,
  useState,
} from 'react';
import faker from 'faker';

import Editor from '../Editor';
import styles from './Table.module.scss';

// Generate fake data
const participants = Array.from({ length: 20 }, () => ({
  id: faker.random.uuid(),
  fullName: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
}));

const Table = () => {
  const [edit, setEdit] = useState('');

  const remove = useCallback(() => {
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.thead}>
        <div className={[styles.th, styles.fullName].join(' ')}>Full Name</div>
        <div className={[styles.th, styles.email].join(' ')}>Email</div>
        <div className={[styles.th, styles.phone].join(' ')}>Phone</div>
        <div className={[styles.th, styles.blank].join(' ')}>&nbsp;</div>
      </div>

      <div className={styles.tbody}>
        {participants.map((p) => {
          if (p.id === edit) {
            return (
              <div key={p.id} className={styles.row}>
                <Editor key="editorrr" data={p} />
              </div>
            );
          }
          return (
            <div key={p.id} className={styles.row}>
              <div className={[styles.cell, styles.fullName].join(' ')}>
                {p.fullName}
              </div>
              <div className={[styles.cell, styles.email].join(' ')}>
                {p.email}
              </div>
              <div className={[styles.cell, styles.phone].join(' ')}>
                {p.phone}
              </div>
              <div className={styles.cell}>
                <button
                  type="button"
                  className={[styles.btn, styles.edit].join(' ')}
                  onClick={() => setEdit(p.id)}
                >
                  <i className="material-icons">edit</i>
                </button>
                <button
                  type="button"
                  className={[styles.btn, styles.delete].join(' ')}
                  onClick={() => remove(p.id)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
