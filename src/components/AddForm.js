import React from 'react';
import PropTypes from 'prop-types';

class AddForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputName: '',
            inputEmail: '',
            inputPhone: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState(function () {

        });
    }

    render() {
        return (
            <div className="row add-form">
                <form>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="inputName">Full name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
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
        )
    }
}

AddForm.PropTypes = {
    fullname: PropTypes.string.isRequired,
}

export default AddForm;
