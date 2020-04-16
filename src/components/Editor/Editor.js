import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import styles from './Editor.module.scss';

const Editor = (props) => {
  const {
    data,
    isNew,
    onCancel,
    onSubmit,
  } = props;

  const initialData = useMemo(() => {
    if (data && Object.keys(data).length > 0) {
      return data;
    }
    return {
      fullName: '',
      email: '',
      phone: '',
    };
  }, [data]);

  const [formData, setFormData] = useState(initialData);

  const handleSetData = useCallback(
    (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    },
    [formData],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
      });
    },
    [],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={styles.formControl}
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleSetData}
        />

        <input
          type="text"
          className={styles.formControl}
          id="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleSetData}
        />

        <input
          type="text"
          className={styles.formControl}
          id="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleSetData}
        />
      </div>

      <div className={styles.actions}>
        {!isNew && (
          <button
            type="button"
            className={styles.btn}
            onClick={onCancel}
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          className={[
            styles.btn,
            isNew ? styles.add : styles.save,
          ].join(' ')}
          onClick={handleSubmit}
        >
          {isNew ? 'Add new' : 'Save'}
        </button>
      </div>
    </div>
  );
};

Editor.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  isNew: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

Editor.defaultProps = {
  data: undefined,
  isNew: false,
  onCancel: () => {},
  onSubmit: () => {},
};

export default Editor;
