import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GlobalContext } from '../../providers/Provider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

// https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

const Registration = () => {
    const {
        user,
        loading,
        registerUser,
        loginNormal,
        signInWithGoogle,
        logOut
    } = useContext(GlobalContext);

    const [errorMessage, setErrorMessage] = useState("");
    if (user != null) {
        return <Navigate to="/" />
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const photo = form.photo.value.trim();

        setErrorMessage("");
        // validation
        if (password.length < 6) {
            setErrorMessage("Password must contains 6 or more characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contains at least 1 capital letter")
            return;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErrorMessage("Password must contain at least 1 special character")
            return;
        }

        registerUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account Created Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                })


                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                    reloadUserInfo: {
                        photoUrl: photo
                    }
                })

                logOut();
                loginNormal(email, password)
                    .then(userCred => {
                        console.log(userCred.user);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    setErrorMessage("Email already exists");
                } else {
                    setErrorMessage(error.code);
                }
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
                <h2 className="text-2xl font-semibold">Register now</h2>
                <p className="text-sm pb-5">Provide details information to create your account</p>
                <form onSubmit={handleRegistration} className="w-[90%] mx-auto md:w-[60%]">
                    <div className="form-control">
                        <label htmlFor="name" className="label">Name</label>
                        <input required type="text" name="name" id="name" placeholder="Name" className="input input-bordered  dark:text-black" />
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
                        <label className="cursor-pointer label flex justify-start items-center space-y-2 gap-4">
                            <input required type="checkbox" className="checkbox checkbox-warning" />
                            <span className="label-text text-sm underline">Accept terms and conditions</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-full w-full text-white bg-[orange] hover:bg-[#ffb731] hover:border-[orange] border-[orange] normal-case text-lg mt-3" value="Create Accouont" />
                    </div>
                    <div className='text-center pt-3'>
                        Already have an account? <Link className='underline text-[orange]' to="/login">Login Now</Link>
                    </div>
                </form>
                {
                    errorMessage == "" ? "" :
                        <div className="alert bg-[#ff00006f] flex items-center justify-center w-[60%]">
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

export default Registration;