import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../../../components/social_login/SocialLogin';

const Login = () => {

    const { loginWithEmail } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        loginWithEmail(data.email, data.password)
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return (
        <div className='md:w-3/5 mx-5 flex flex-col md:ml-40'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary mb-15 text-center'>Login Your Account</h1>

            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">

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
                        {...register('password', { required: true, minLength: 6 })}
                    />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should at least 6 character</p>}

                    <a className="link link-hover">Forgot password?</a>

                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    <p>Don't have an account? <Link to='/register' className='text-blue-700'>register</Link> </p>

                </fieldset>
            </form>

            <SocialLogin />
        </div>
    );
};

export default Login;