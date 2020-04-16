import React from 'react';

const Table = () => {

        return (
            <div className="table-list">
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
                        {
                            participants.map(function (par, index) {
                                return (
                                    <tr key={index}>
                                        <td className="col-md-3">{par.name}</td>
                                        <td className="col-md-4">{par.email}</td>
                                        <td className="col-md-3">{par.phone}</td>
                                        <td className="col-md-2">
                                            <button type="button" className="btn btn-default btn-tiny" aria-label="Left Align">
                                                <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                                            </button>
                                            <button type="button" className="btn btn-default btn-tiny" aria-label="Left Align">
                                                <span className="glyphicon glyphicon-trash" aria-hidden="true" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td className="col-md-3"><input type="text" className="form-control" id="inputName" placeholder="Gorge" /></td>
                            <td className="col-md-4"><input type="text" className="form-control" id="inputEmail" placeholder="gorge@gmail.com" /></td>
                            <td className="col-md-3"><input type="text" className="form-control" id="inputPhone" placeholder="333333333" /></td>
                            <td className="col-md-2"><button type="submit" className="btn btn-primary btn-cancel pull-left">Cancel</button> <button type="submit" className="btn btn-primary btn-save pull-right">Save</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
  );
};

export default Table;
