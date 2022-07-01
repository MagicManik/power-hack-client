import React from 'react';

const Table = ({ bill }) => {

    return (

        <tbody>

            <tr>
                <th>{bill._id}</th>
                <td>{bill.name}</td>
                <td>{bill.email}</td>
                <td>{bill.phone}</td>
                <td>{bill.amount}</td>
            </tr>

        </tbody>
    );
};

export default Table;