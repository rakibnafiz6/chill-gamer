import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [ratingUsers, setRatingUsers] = useState([]);

    // useEffect( ()=>{
    //     fetch(`http://localhost:5000/gamers/${user.email}`)
    //     .then(res => res.json())
    //     .then(data => setRatingUsers(data))
    // },[user]);

    return (
        <div>
           <h2>My Reviews {ratingUsers.length}</h2>
           
        </div>
    );
};

export default MyReviews;