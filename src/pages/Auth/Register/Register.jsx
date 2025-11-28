import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleRegistration = (data) => {
        // console.log('after register', data);
    }

    return (
        <div className='md:w-3/5 mx-5 flex flex-col md:ml-40'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary mb-15 text-center'>Register Your Account</h1>

            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        {...register('email', {required: true})}
                    />
                    {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}

                    <label className="label mt-3">Password</label>
                    <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        {...register('password', {required: true, minLength: 6})}
                    />
                    {errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>}
                    {errors.password?.type==='minLength' && <p className='text-red-500'>Password should at least 6 character</p>}

                    <a className="link link-hover">Forgot password?</a>

                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;