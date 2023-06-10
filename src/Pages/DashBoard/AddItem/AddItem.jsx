import React from 'react';
import './AddItem.css'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const image_hosting_token = import.meta.env.VITE_imgae_Upload_Token;

const AddItem = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const photo_hosting_Url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(photo_hosting_Url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const photoUrl = imgData.data.display_url
                    console.log(photoUrl)
                    const { instructorName, name, email, price, courseTime, availableSeat, importance, details, status } = data;
                    const newClass = { instructorName, name, email, price: parseFloat(price), courseTime, availableSeat, importance, details, status, image: photoUrl }
                    console.log(newClass)
                    fetch('http://localhost:5000/class', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: 'success!',
                                    text: 'Your class Added Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Congratulations'
                                })
                            }
                        })
                }
            })
    };
    console.log(errors)
    console.log(image_hosting_token)
    return (
        <div className=''>
            <Helmet>
                <title>Add Your IteaMm</title>
            </Helmet>
            <h2 className='addItemHeader'>You Can Add Your Course From Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-8 my-4 '>
                    <div >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="Instructor Name" name='instructorName'
                                {...register("instructorName", { required: true, maxLength: 200 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Instructor email" defaultValue={user?.email} name='email'
                                {...register("email", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Price</span>
                            </label>
                            <input type="number" placeholder="Only Number" name='price'
                                {...register("price", { required: true })}

                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Duration</span>
                            </label>
                            <input type="text" placeholder="Time" name='courseTime'

                                {...register("courseTime", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats</span>
                            </label>
                            <input type="number" placeholder="Only Number" name='availableSeat'
                                {...register("availableSeat", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Name</span>
                            </label>
                            <input type="text" placeholder="Name of Course" name='name'
                                {...register("name", { required: true, maxLength: 300 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Image</span>
                            </label>
                            <input type="file" placeholder="Photo Url" name='image'
                                {...register("image", { required: true })}
                                className="file-input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Why This Course</span>
                            </label>
                            <input type="text" placeholder="Type Short Note" name='importance'
                                {...register("importance", { required: true, maxLength: 500 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Details About This Course</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name='details'
                                {...register("details", { required: true, maxLength: 1000 })}
                                placeholder="Bio"></textarea>
                            {/* <input type="text" className='input input-bordered w-full max-w-xs' placeholder='Write Details' name='datails'
                                {...register("details", { required: true })}
                            /> */}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text" defaultValue="pending"
                                {...register("status", { required: true })}
                                className="input input-bordered w-full max-w-xs hidden" />
                        </div>

                    </div>
                </div>
                <input className='btn mt-2 btn_add_item' type="submit" value="Add Iteam" />
            </form>
        </div>
    );
};

export default AddItem;