import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [RegisterError, setRegisterError] = useState(null)
    const auth = getAuth(app);

    const handleregister = (e) => {
        e.preventDefault()
        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, photoURL);

        if (password.length < 6) {
            setRegisterError('Password is less than 6')
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('password has to be one capital letter')
        }
        if (!/[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
            setRegisterError('password has to be one special character')
        }
        createUser(email,password)
        .then(result=>{
            form.reset()
            // console.log(result.user)
            updateProfile(auth.currentUser, {
                displayName:name, photoURL: photoURL
              }).then((result) => {
                // Profile updated!
                console.log(result)
                // ...
              }).catch((error) => {
               console.error(error);
              });
              console.log(result.user)
              console.log('registered')
        })
        .catch(error=>{
            console.error(error);
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleregister} className="card-body">
                        <div className="text-center mx-auto lg:text-left">
                            <h1 className="text-4xl font-semibold">Registration Form!!</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photoURL" placeholder="https://photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Register</button>
                        </div>
                        {
                            RegisterError && <p className='text-red-700 font-semibold'>{RegisterError}</p>
                        }
                        <p className='text-xs md:text-base font-semibold flex justify-between'>Do you have any account? <Link to='/login'><span className=' hover:border-b-2 border-blue-500 '> Login here!!</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;