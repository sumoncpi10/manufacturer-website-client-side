import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile lg:px-24 lg:py-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 pb-7'>Welcome to <span className='text-blue-500 text-2xl'>{user?.displayName}'s</span> Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side lg:py-12">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add A Review</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {/* <li><Link to="/dashboard/users">All Users</Link></li> */}
                    {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                    {admin && <li><Link to="/dashboard/manageOrder">Manage Orders</Link></li>}
                </ul>
            </div>
        </div >
    );
};

export default Dashboard;