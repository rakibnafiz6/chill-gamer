import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
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