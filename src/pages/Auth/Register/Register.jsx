import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import SocialLogin from '../../../components/social_login/SocialLogin';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {

    const { createUserWithEmail, updateUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegistration = (data) => {

        const profileImage = data.photo[0];

        createUserWithEmail(data.email, data.password)
            .then(() => {
                // store the image in form data
                const formData = new FormData();
                formData.append('image', profileImage);

                // send photo to database and get url
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                console.log('user created in the database', res.data);
                            })

                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        updateUser(userProfile)
                            .then(res => {
                                console.log('user profile updated done', res);
                                navigate(location?.state || '/');
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    });

            })
            .catch(err => console.log(err))
    }

    return (
        <div className='md:w-3/5 mx-5 flex flex-col md:ml-40'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary mb-15 text-center'>Register Your Account</h1>

            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    <label className="label">Name</label>
                    <input
                        type="txt"
                        className="input w-full mb-3"
                        placeholder="Name"
                        {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}

                    {/* Photo Image Field */}
                    <label className="label">Photo</label>
                    <input
                        type="file"
                        className="file-input w-full mb-3"
                        placeholder="your photo"
                        {...register('photo', { required: true })}
                    />
                    {errors.photo?.type === 'required' && <p className='text-red-500'>Photo is required</p>}

                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        {...register('email', { required: true })}
                    />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

                    <label className="label mt-3">Password</label>
                    <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/
                        })}
                    />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should at least 6 character</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least 1 uppercase character, 1 lowercase, 1 digit</p>}

                    <a className="link link-hover">Forgot password?</a>

                    <button className="btn btn-neutral mt-4">Register</button>
                    <p>Already have an account? <Link to='/login' state={location?.state} className='text-blue-700'>login</Link> </p>

                </fieldset>
            </form>

            <SocialLogin />
        </div>
    );
};

export default Register;