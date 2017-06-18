import React from 'react';

class TableList extends React.Component {

    render() {
        var participants = [
                {
                    name: 'John Doe',
                    email: 'john@doe.com',
                    phone: '111111'
                },
                {
                    name: 'Gorge Cloney',
                    email: 'gorge@cloney.com',
                    phone: '222222'
                }
        ];

        return (
            <div className="row table-list">
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
                                        <td>{par.name}</td>
                                        <td>{par.email}</td>
                                        <td>{par.phone}</td>
                                        <td>
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
                    </tbody>
                </table>
            </div>
        )
    }
}

//module.exports = TableList;
export default TableList;
