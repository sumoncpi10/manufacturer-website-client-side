import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/user',
                {
                    method: 'GET',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            )
                .then(res => res.json())
                .then(data => {
                    setUsers(data);
                    console.log(data)
                });

        }
    }, [user]);
    // const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const handleRemoveUser = user => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        console.log(user)
        if (proceed) {
            fetch(`http://localhost:5000/user/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))

            const rest = users.filter(pd => pd._id !== user._id);
            // console.log(rest);
            setUsers(rest);
            // removeFromDb(product.id);
            toast(`Delete ${user.email} Successfully!!!`);
        }
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Users</th>
                            <th>Role</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                handleRemoveUser={handleRemoveUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;