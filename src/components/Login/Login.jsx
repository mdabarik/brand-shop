import { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GlobalContext } from '../../providers/Provider';
import Swal from 'sweetalert2';


const Login = () => {

    const {
        user,
        loading,
        registerUser,
        loginNormal,
        signInWithGoogle,
        logOut,
        setUser
    } = useContext(GlobalContext);

    const [errorMessage, setErrorMessage] = useState("");
    // const navigate = useNavigate();
    if (user != null) {
        return <Navigate to="/" />
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        setErrorMessage("");
        loginNormal(email, password)
            .then(userCredential => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log In successfull.',
                    showConfirmButton: false,
                    timer: 1500
                })

                // loggedin successfull
                const curUser = userCredential.user;
                setUser(curUser)
            })
            .catch(() => {
                setErrorMessage("Wrong Email or Password");
            })
    }

    const handleGoogleSignedIn = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Google Sign In Successfull.',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                const error = err.code;
                setErrorMessage(error);
            })
    }

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center py-10 space-y-2">
                <h2 className="text-2xl font-semibold">Login now</h2>
                <p className="text-sm pb-5">Provide details information to login</p>
                <form onSubmit={handleLogin} className="w-[60%]">

                    <div className="form-control">
                        <label htmlFor="email" className="label">Email</label>
                        <input required type="email" name="email" id="email" placeholder="Email" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className="label">Photo URL</label>
                        <input required type="password" name="password" id="password" placeholder="Password" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-full w-full text-white bg-[orange] hover:bg-[#ffb731] hover:border-[orange] border-[orange] normal-case text-lg mt-3" value="Login Now" />
                    </div>
                    <div className='text-center pt-3'>
                        New here, create an account? <Link className='underline text-[orange]' to="/registration">Register Now</Link>
                    </div>
                </form>
                {
                    errorMessage == "" ? "" :
                        <div className=" bg-[#ff000014] text-red-400 py-3 rounded-full flex items-center justify-center w-[60%]">
                            <span>{errorMessage}</span>
                        </div>
                }
                <div onClick={handleGoogleSignedIn} className="flex min-w-[280px] hover:cursor-pointer flex-row items-center justify-center rounded-full border-[1px] p-1 px-5 py-2 mt-4 bg-[#9CA3AF95]">
                    <FcGoogle className="text-4xl"></FcGoogle>
                    <span className="ml-3">Sign in with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;