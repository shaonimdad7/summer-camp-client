import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import useClass from '../../customhokk/useClass';

const AllClassesShow = ({ singleClass }) => {
    const { _id, name, image, importance, price, rating, availableSeat, instructorName } = singleClass;
    const { user } = useContext(AuthContext);
    const [, refetch] = useClass();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartClassItem = {
                classId: _id,
                name,
                image,
                importance,
                price,
                rating,
                availableSeat,
                instructorName,
                email: user.email
            };

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartClassItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Your class added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    Swal.fire({
                        position: 'middle',
                        icon: 'error',
                        title: 'An error occurred while adding the class',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In Now!'
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <div className="card class_width w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Class" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <hr />
                    <h3 className="font-semibold text-orange-800">
                        Instructor Name: <span className="text-black">{instructorName}</span>
                    </h3>
                    <p>{importance}</p>
                    <div className="card-actions flex items-center justify-between">
                        <div>
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        </div>
                        <div className="">
                            <p className="price_custom">$ {price}</p>
                        </div>
                    </div>
                    <h3 className="font-semibold text-orange-800">
                        Available Seats: <span className="text-black">{availableSeat}</span>
                    </h3>
                    <button onClick={handleAddToCart} className="btn mt-5 btn_showClass">
                        ADD TO Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesShow;
