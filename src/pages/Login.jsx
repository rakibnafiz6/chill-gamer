import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";


const Login = () => {
    const {signInUser, googleLogin} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const handleSignIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Login user',
                icon: 'success',
                confirmButtonText: 'OK'
              })
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

    const handleGoogle = ()=>{
        googleLogin(provider)
        .then(result =>{
            console.log(result);
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
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered input-accent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered input-accent" required />
                        </div>
                        <div className="form-control mt-6">
                          <button onClick={handleGoogle} className="btn btn-accent mb-2"><FcGoogle /> Login With Google</button>
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