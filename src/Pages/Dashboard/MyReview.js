import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = (e) => {
        // e.preventDefault();
        console.log(e);
        const category = e.category;
        const productName = e.productName;
        const reviewedBy = user?.displayName;
        const userImg = user?.photoURL;
        const reviewDetails = e.detail;

        // console.log(name, email, password);
        const review = { category, productName, reviewDetails, reviewedBy, userImg };
        // send data to the server 
        fetch('https://manufacturer-website-lea9.onrender.com/reviewAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);

                toast("Review Add Successfully!");
                reset();
            })
    }

    return (
        <div className=''>
            <h1 className='text-center text-4xl text-primary'>Add A Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>

                    </label>
                    <select className="select select-bordered"
                        {...register("category", {
                            required: {
                                value: true,
                                message: 'Select Category Required'
                            }
                        })}>

                        <option value='hand'>Hand Tools</option>
                        <option value='cutting'>Cutting Tools</option>
                        <option value='industrial'>Industrial Tools</option>
                        <option value='precision'>Precision Tools</option>
                    </select>
                    <label className="label">
                        {/* <span className="label-text-alt">Alt label</span> */}
                        {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors.category.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text" name='name'
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("productName", {
                            required: {
                                value: true,
                                message: 'Product Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.productName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productName.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review Details </span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Review Details" name='detail'
                        className="input input-bordered w-full max-w-xs"
                        {...register("detail", {
                            required: {
                                value: true,
                                message: 'Details Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.detail?.type === 'required' && <span className="label-text-alt text-red-500">{errors.detail.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>

        </div >
    );
};

export default MyReview;