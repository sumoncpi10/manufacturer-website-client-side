import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, handleRemoveUser }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Successfully made an admin`);
                }

            })
    }



    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <button className="btn btn-xs btn-primary text-center">Admin</button>}</td>
            <td><button onClick={() => handleRemoveUser(user)} className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;