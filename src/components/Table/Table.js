import React, {
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

  console.log({ participants, edit });

  return (
    <div className={styles.wrapper}>
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Adress</th>
            <th>Phone Number</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {participants.map((p) => {
            if (p.id === edit) {
              return 'editor';
            }
            return (
              <tr key={p.id}>
                <td className="col-md-3">{p.fullName}</td>
                <td className="col-md-4">{p.email}</td>
                <td className="col-md-3">{p.phone}</td>
                <td className="col-md-2">
                  <button
                    type="button"
                    className="btn btn-default btn-tiny"
                    aria-label="Left Align"
                    onClick={() => setEdit(p.id)}
                  >
                    <i className="material-icons">edit</i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-default btn-tiny"
                    aria-label="Left Align"
                  >
                    <i className="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
