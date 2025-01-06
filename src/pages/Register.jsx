import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!regex.test(password)){
            Swal.fire({
                title: 'Error!',
                text: "Password must be at least 6 characters, contain at least one uppercase letter, and at least one lowercase letter.",
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return;
        }


        createUser(email, password)
        .then(result =>{
            Swal.fire({
                title: 'Success!',
                text: 'Successfully create user',
                icon: 'success',
                confirmButtonText: 'OK'
              })

        const profile = {
            displayName: name,
            photoURL: photo

        }
            updateUserProfile(profile)
            .then(()=>{
                // console.log('update profile')
            })
            .catch(error =>{
                // console.log(error.message);
            })
        navigate('/');
        })
        .catch(error =>{
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
              })
        })
    }

    return (
        <div>
             <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
            <Navbar></Navbar>
            </nav>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered input-accent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered input-accent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-url</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo-url" className="input input-bordered input-accent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered input-accent" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                        </form>
                        <p className="text-center mb-2 px-1">Already have an Account Please! <Link to='/login' className="text-red-600">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;