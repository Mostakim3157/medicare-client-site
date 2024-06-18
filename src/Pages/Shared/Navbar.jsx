import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import mediLogo from "../../assets/med-logo.png";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://b9-a12-server-lovat.vercel.app/user/${user?.email}`
        );
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user?.email]);

  console.log(userData);

  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("Successfully logged out");
      })
      .catch();
  };

  const list = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold " : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="/availableCamps"
        >
          Available Camps
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="navbar bg-base-100 mt-4 relative  z-40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {list}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          <div className="flex items-center">
            <div>
              <img src={mediLogo} className="w-8" alt="" />
            </div>
            <div>
              {" "}
              Medi<span className="text-[#4D83DE]">Care</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div>
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="btn m-1">
                  <img
                    src={user?.photoURL}
                    className="w-8 rounded-full"
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{user?.displayName || "User name not found"}</a>
                  </li>
                  <li>
                    <Link
                      to={
                        "/dashboard/participantProfile" ||
                        "/dashboard/organizerProfile"
                      }
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      onClick={handleLogOut}
                      className="btn  bg-[#4D83DE] text-white "
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login" className="btn  bg-[#4D83DE] text-white ">
              Join US
            </Link>
          </>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Navbar;
