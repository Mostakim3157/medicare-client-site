import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user, loading} = <UseAuth></UseAuth>()

    const [isAdmin,isAdminLoading] = useAdmin()

     if (loading || isAdminLoading) {
    return <span className="loading loading-dots loading-md"></span>;
  }

//   console.log(user);
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}}replace></Navigate>;
};


export default AdminRoute;