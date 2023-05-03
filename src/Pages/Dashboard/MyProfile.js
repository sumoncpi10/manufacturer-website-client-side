import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyProfile = () => {
    // const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [dbUser, setDbUser] = useState([]);
    const [token, setToken] = useState('');
    useEffect(() => {
        if (user) {
            fetch(`https://manufacturer-website-lea9.onrender.com/user/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setDbUser(data);

                });

        }

    }, [user]);
    const handleUpdateUser = (e) => {
        e.preventDefault();
        console.log(e);

        const email = user?.email;
        const displayName = e.target.displayName.value;
        const address = e.target.address.value;
        const phoneNumber = e.target.phoneNumber.value;
        const photoURL = e.target.photoURL.value;

        const UpdatedUser = { email, displayName, address, phoneNumber, photoURL };

        // send data to the server
        if (email) {
            fetch(`https://manufacturer-website-lea9.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(UpdatedUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('Data Inside Token', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                    toast("User Update Successfully!");
                    // e.target.reset();
                })
        }

    }
    const nameChange = (e) => {
        // console.log(e.target.value);
        const { displayName, ...rest } = dbUser;
        const newName = e.target.value;
        const newProduct = { displayName: newName, ...rest };
        setDbUser(newProduct);
    }
    const addressChange = (e) => {
        const { address, ...rest } = dbUser;
        const newAddress = e.target.value;
        const newProduct = { address: newAddress, ...rest };
        setDbUser(newProduct);
    }
    const phoneNumber = (e) => {
        const { phoneNumber, ...rest } = dbUser;
        const newPhone = e.target.value;
        const newProduct = { phoneNumber: newPhone, ...rest };
        setDbUser(newProduct);
    }
    const imgChange = (e) => {
        const { photoURL, ...rest } = dbUser;
        const newImg = e.target.value;
        const newProduct = { photoURL: newImg, ...rest };
        setDbUser(newProduct);
    }

    return (
        <div className=''>
            <h1 className='text-center text-4xl text-primary'>Update Profile</h1>
            <form onSubmit={handleUpdateUser} className='flex flex-col items-center  '>

                <div className="form-control w-full max-w-xs ">
                    <img src={dbUser?.photoURL} alt="" srcset="" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input
                        type="text" name='displayName'
                        placeholder="User Name"
                        onChange={nameChange}
                        value={dbUser?.displayName || (!dbUser.displayName && user.displayName)}
                        className="input input-bordered w-full max-w-xs"
                    // {...register("displayName", {
                    //     required: {
                    //         value: true,
                    //         message: 'User Name is Required'
                    //     }
                    // })}
                    />
                    <label className="label">
                        {/* {errors.displayName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.displayName.message}</span>} */}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        value={dbUser?.email}
                        disabled
                        className="input input-bordered w-full max-w-xs"
                    // {...register("email", {

                    // })}
                    />
                    <label className="label">
                        {/* {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                        {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address </span>
                    </label>
                    <textarea
                        type="text"
                        name='address'
                        placeholder="Address"
                        onChange={addressChange}
                        value={dbUser?.address}
                        className="input input-bordered w-full max-w-xs"
                    // {...register("address", {
                    //     required: {
                    //         value: true,
                    //         message: 'Address Required'
                    //     }
                    // })}
                    />
                    <label className="label">
                        {/* {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>} */}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="number" name='phoneNumber'
                        placeholder="Phone"
                        onChange={phoneNumber}
                        value={dbUser?.phoneNumber || (!dbUser.phoneNumber && user.phoneNumber)}
                        className="input input-bordered w-full max-w-xs"
                    // {...register("phoneNumber", {
                    //     required: {
                    //         value: true,
                    //         message: 'phone is Required'
                    //     }
                    // })}
                    />
                    <label className="label">
                        {/* {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>} */}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text" name='photoURL'
                        placeholder="Photo URL"
                        onChange={imgChange}
                        value={dbUser?.photoURL || (!dbUser.photoURL && user.photoURL)}
                        className="input input-bordered w-full max-w-xs"
                    // {...register("photoURL", {
                    //     required: {
                    //         value: true,
                    //         message: 'Photo URL Required'
                    //     }
                    // })}
                    />
                    <label className="label">
                        {/* {errors.photoURL?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photoURL.message}</span>} */}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Update" />
            </form>

        </div >
    );
};

export default MyProfile;