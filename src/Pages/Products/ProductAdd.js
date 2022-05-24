import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
const ProductAdd = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (e) => {
        // e.preventDefault();
        console.log(e);
        const category = e.category;
        const name = e.productName;
        const brand = e.brandName;
        const price = e.price;
        const quantity = e.quantity;
        const minquantity = e.minquantity;
        const img = e.imgURL;
        const description = e.description;
        const supplier = e.supplierName;
        // console.log(name, email, password);
        const product = { name, brand, price, quantity, minquantity, img, description, supplier, category };
        // send data to the server 
        fetch('http://localhost:5000/productAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);

                toast("Product Add Successfully!");
                reset();
            })
    }

    return (
        <div className=''>
            <h1 className='text-center text-4xl text-primary'>Add Your Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Category</span>

                    </label>
                    <select class="select select-bordered"
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
                    <label class="label">
                        {/* <span class="label-text-alt">Alt label</span> */}
                        {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors.category.message}</span>}
                    </label>
                </div>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image URL </span>
                    </label>
                    <select
                        {...register("category", {
                            required: {
                                value: true,
                                message: 'Select Required'
                            }
                        })}
                        type="text" name='category'

                        class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Tools Category?</option>
                        <option value='hand'>Hand Tools</option>
                        <option value='cutting'>Cutting Tools</option>
                        <option value='industrial'>Industrial Tools</option>
                        <option value='precision'>Precision Tools</option>

                    </select>
                    <label className="label">
                        {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors.category.message}</span>}
                    </label>
                </div> */}
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
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input
                        type="text" name='brand'
                        placeholder="Brand Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("brandName", {
                            required: {
                                value: true,
                                message: 'Brand Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.brandName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.brandName.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <input
                        type="text" name='supplier'
                        placeholder="Supplier Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("supplierName", {
                            required: {
                                value: true,
                                message: 'Supplier Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.supplierName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierName.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description </span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description Name" name='description'
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Unit Price </span>
                    </label>
                    <input
                        type="text" name='price'
                        placeholder="Unit Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Unit Price Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity </span>
                    </label>
                    <input
                        type="text" name='quantity'
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'quantity Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Min Order Quantity </span>
                    </label>
                    <input
                        type="text" name='quantity'
                        placeholder="Min Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minquantity", {
                            required: {
                                value: true,
                                message: 'Min quantity Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image URL </span>
                    </label>
                    <input
                        type="text" name='img'
                        placeholder="Image URL"
                        className="input input-bordered w-full max-w-xs"
                        {...register("imgURL", {
                            required: {
                                value: true,
                                message: 'Image URL Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.imgURL?.type === 'required' && <span className="label-text-alt text-red-500">{errors.imgURL.message}</span>}
                    </label>
                </div>





                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
            {/* 
            <form onSubmit={onSubmit}>
                <div class="d-flex flex-column justify-content-center mx-auto">
                    <div class="row mb-2">
                        <input type="text" name='name' class="form-control" placeholder="Product name" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='brand' class="form-control" placeholder="Brand name" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='supplier' class="form-control" placeholder="Supplier name" />
                    </div>
                    <div class="row mb-2">
                        <input type="textarea" name='description' class="form-control" placeholder="Description" />
                        <textarea type="text" name='description' class="form-control" placeholder="Description"></textarea>
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='price' class="form-control" placeholder="Unit Price" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='quantity' class="form-control" placeholder="Quantity" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='img' class="form-control" placeholder="Img Url" />
                    </div>
                </div>
                <button class="btn btn-primary m-3" type="submit">Add Product</button>
            </form>
             */}
        </div >
    );
};

export default ProductAdd;