import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
    return (
       <div>
        <nav className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
        </nav>
       
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered input-accent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered input-accent" required />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-accent mb-2"><FcGoogle /> Login With Google</button>
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-2">you have a new users please! <Link to='/register' className="text-red-600">Register</Link></p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Login;