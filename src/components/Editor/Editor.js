import React, {
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import styles from './Editor.module.scss';

const Editor = (props) => {
  const {
    data,
    isNew,
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
  }, []);

  const [formData, setFormDate] = useState(initialData);

  return (
    <div className={styles.EditorWrapper}>
      <form>
        <div className="col-md-3">
          <div className="form-group">
            <label className="sr-only" htmlFor="inputName">Full name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label className="sr-only" htmlFor="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email address" />
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label className="sr-only" htmlFor="inputPhone">Phone number</label>
            <input type="number" className="form-control" id="inputPhone" placeholder="Phone number" />
          </div>
        </div>

        <div className="col-md-2">
          <button type="submit" className="btn btn-primary btn-add-new pull-right">Add new</button>
        </div>
      </form>
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
};

Editor.defaultProps = {
  data: undefined,
  isNew: false,
};

export default Editor;
