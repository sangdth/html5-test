import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import Editor from '../Editor';
import { AppContext } from '../../App';
import styles from './Table.module.scss';

const Table = (props) => {
  const { data } = props;
  const [participants, setParticipants] = useState(data);
  const [edit, setEdit] = useState('');

  const { setData } = useContext(AppContext);

  useEffect(() => {
    if (data) {
      setParticipants(data);
    }
  }, [data]);

  const remove = useCallback((id) => {
    const foundIndex = participants.findIndex((o) => o.id === id);
    if (foundIndex > -1) {
      const tmp = Array.from(participants);
      tmp.splice(foundIndex, 1);
      // setParticipants(tmp);
      setData(tmp);
    }
  }, [participants, setData]);

  const handleUpdate = useCallback((updated) => {
    const foundIndex = participants.findIndex((o) => o.id === updated.id);
    if (foundIndex > -1) {
      const tmp = Array.from(participants);
      tmp.splice(foundIndex, 1, updated);
      setParticipants(tmp);
    }
    setEdit('');
  }, [participants]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.thead}>
        <div className={c(styles.th, styles.fullName)}>Full Name</div>
        <div className={c(styles.th, styles.email)}>Email</div>
        <div className={c(styles.th, styles.phone)}>Phone</div>
        <div className={c(styles.th, styles.blank)}>&nbsp;</div>
      </div>

      <div className={styles.tbody}>
        {participants.map((p) => {
          if (p.id === edit) {
            return (
              <div key={p.id} className={styles.row}>
                <Editor
                  key="editorrr"
                  data={p}
                  onCancel={() => setEdit('')}
                  onSubmit={handleUpdate}
                />
              </div>
            );
          }
          return (
            <div key={p.id} className={styles.row}>
              <div className={c(styles.cell, styles.fullName)}>
                {p.fullName}
              </div>
              <div className={c(styles.cell, styles.email)}>
                {p.email}
              </div>
              <div className={c(styles.cell, styles.phone)}>
                {p.phone}
              </div>
              <div className={styles.cell}>
                <button
                  type="button"
                  className={c(styles.btn, styles.edit)}
                  onClick={() => setEdit(p.id)}
                >
                  <i className="material-icons">edit</i>
                </button>
                <button
                  type="button"
                  className={c(styles.btn, styles.delete)}
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

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
};

export default Table;
