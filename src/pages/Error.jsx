import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center pt-40">
            <h2>Error</h2>
            <p>Page Not found</p>
            <p>404</p>
            <Link to='/' className="btn bg-neutral text-white">Go Back</Link>
        </div>
    );
};

export default Error;