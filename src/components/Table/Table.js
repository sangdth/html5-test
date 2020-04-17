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
  const [sort, setSort] = useState([]);

  const { setData, sortData } = useContext(AppContext);

  useEffect(() => {
    if (data) {
      setParticipants(data);
    }
  }, [data]);

  const handleSort = useCallback((key) => {
    const order = (sort[0] !== key || sort[1] === 'desc') ? 'asc' : 'desc';
    setSort([key, order]);
    sortData(key, order);
  }, [sort, sortData]);

  const remove = useCallback((id) => {
    const foundIndex = participants.findIndex((o) => o.id === id);
    if (foundIndex > -1) {
      const tmp = Array.from(participants);
      tmp.splice(foundIndex, 1);
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

  const sortArrow = useCallback((key) => {
    if (!sort[0] || sort[0] !== key) {
      return '';
    }
    return sort[1] === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }, [sort]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.thead}>
        <div
          className={c(styles.th, styles.fullName)}
          role="presentation"
          onClick={() => handleSort('fullName')}
        >
          Full Name
          <i className="material-icons">
            {sortArrow('fullName')}
          </i>
        </div>
        <div
          className={c(styles.th, styles.email)}
          role="presentation"
          onClick={() => handleSort('email')}
        >
          Email
          <i className="material-icons">
            {sortArrow('email')}
          </i>
        </div>
        <div
          className={c(styles.th, styles.phone)}
          role="presentation"
          onClick={() => handleSort('phone')}
        >
          Phone
          <i className="material-icons">
            {sortArrow('phone')}
          </i>
        </div>

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
                {p.email.toLowerCase()}
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
