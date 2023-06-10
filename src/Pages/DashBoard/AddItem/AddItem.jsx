import React from 'react';
import './AddItem.css'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form'

const image_hosting_token = import.meta.env.VITE_imgae_Upload_Token

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const photo_hosting_Url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(photo_hosting_Url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
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
                            <input type="text" placeholder="Instructor Name" name='instructorName'
                                {...register("instructorName", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Instructor email" name='email'
                                {...register("email", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Price</span>
                            </label>
                            <input type="number" placeholder="Only Number" name='price'
                                {...register("price", { required: true, maxLength: 120 })}

                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Duration</span>
                            </label>
                            <input type="text" placeholder="Time" name='courseTime'

                                {...register("courseTime", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats</span>
                            </label>
                            <input type="number" placeholder="Only Number" name='availableSeat'
                                {...register("availableSeat", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Name</span>
                            </label>
                            <input type="text" placeholder="Name of Course" name='name'
                                {...register("name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Course Image</span>
                            </label>
                            <input type="file" placeholder="Photo Url" name='image'
                                {...register("image", { required: true, maxLength: 120 })}
                                className="file-input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Why This Course</span>
                            </label>
                            <input type="text" placeholder="Type Short Note" name='importance'
                                {...register("importance", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Details About This Course</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name='details'
                                {...register("details", { required: true, maxLength: 120 })}
                                placeholder="Bio"></textarea>
                        </div>
                    </div>
                </div>
                <input className='btn mt-2' type="submit" value="Add Iteam" />
            </form>
        </div>
    );
};

export default AddItem;