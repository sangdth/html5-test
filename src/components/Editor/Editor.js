import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import faker from 'faker';

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
  // const [focused, setFocused] = useState('');

  // return true if invalid
  const validate = useCallback((key) => {
    const value = formData[key];
    if (value.length === 0) {
      return false;
    }

    switch (key) {
      case 'fullName':
        return value.length < 3;
      case 'email':
        return !/\S+@\S+\.\S+/.test(value);
      case 'phone':
        return !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(value);
      default:
        return false;
    }
  }, [formData]);

  const isDisabled = useMemo(
    () => ['fullName', 'email', 'phone'].some((k) => validate(k) || !formData[k]),
    [validate, formData],
  );


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
      onSubmit({
        ...formData,
        id: isNew ? faker.random.uuid() : formData.id,
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
      });
    },
    [formData, onSubmit, isNew],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={c(styles.formControl, {
            [styles.error]: validate('fullName'),
          })}
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleSetData}
        />

        <input
          type="text"
          className={c(styles.formControl, {
            [styles.error]: validate('email'),
          })}
          id="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleSetData}
        />

        <input
          type="text"
          className={c(styles.formControl, {
            [styles.error]: validate('phone'),
          })}
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
            className={c(styles.btn, styles.cancel)}
            onClick={onCancel}
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={isDisabled}
          className={c(
            styles.btn,
            isNew ? styles.add : styles.save,
            { [styles.disabled]: isDisabled },
          )}
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
