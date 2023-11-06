import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return  <span className="loading loading-dots loading-lg flex mx-auto "></span>

    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname}  to='/login' replace></Navigate>
};

export default PrivateRoute;