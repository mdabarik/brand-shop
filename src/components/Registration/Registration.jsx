import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


const Registration = () => {

    const [errorMessage, setErrorMessage] = useState("");

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        console.log(name, email, password);
    }

    const handleGoogleSignedIn = () => {
        console.log('google sign in clicked');
    }

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center py-10 space-y-2">
                <h2 className="text-2xl font-semibold">Register now</h2>
                <p className="text-sm pb-5">Provide details information to create your account</p>
                <form onSubmit={handleRegistration} className="w-[60%]">
                    {
                        errorMessage == "" ? "" :
                            <div className="alert alert-error flex items-center justify-center">
                                <span>Error: {errorMessage}</span>
                            </div>
                    }
                    <div className="form-control">
                        <label htmlFor="username" className="label">Name</label>
                        <input required type="text" name="name" id="username" placeholder="name" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label">Email</label>
                        <input required type="email" name="email" id="email" placeholder="Email" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className="label">Password</label>
                        <input required type="password" name="password" id="password" placeholder="Password" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="photo-url" className="label">Photo URL</label>
                        <input required type="text" name="photo" id="photo-url" placeholder="Photo URL" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-full w-full text-white bg-[orange] hover:bg-[#ffb731] hover:border-[orange] border-[orange] normal-case text-lg mt-3" value="Create Accouont" />
                    </div>
                    <div className='text-center pt-3'>
                        Already have an account? <Link className='underline text-[orange]' to="/login">Login Now</Link>
                    </div>
                </form>
                <div onClick={handleGoogleSignedIn} className="flex min-w-[280px] hover:cursor-pointer flex-row items-center justify-center rounded-full border-[1px] p-1 px-5 py-2 mt-4 bg-[#9CA3AF95]">
                    <FcGoogle className="text-4xl"></FcGoogle>
                    <span className="ml-3">Sign in with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Registration;