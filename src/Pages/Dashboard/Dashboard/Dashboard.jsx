import {
  FaDollarSign,
  FaHome,
  FaLine,
  FaPlus,
  FaRegistered,
  FaToolbox,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/med-logo.png";
import { CgProfile } from "react-icons/cg";
import Footer from "../../Shared/Footer";
import { Toaster } from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [adminRole, setAdminRole] = useState(null);
  // console.log(adminRole);
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  // console.log(userData);
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

  // const admin = userData.role
  // console.log(admin);

  useEffect(() => {
    try {
      userData?.forEach((item) => {
        setAdminRole(item.role);
        // console.log(item.role);
      });
    } catch (err) {
      console.log(err);
    }
  }, [userData]);

  return (
    <section>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[30%] lg:w-[20%]">
          <aside className="flex md:flex-col md:h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <Link to="/">
              <div className="md:flex items-center text-2xl font-bold gap-1 hidden">
                <div className="">
                  <img src={logo} className="w-8" alt="" />
                </div>
                <div>
                  {" "}
                  Medi<span className="text-[#4D83DE]">Care</span>
                </div>
              </div>
            </Link>

            <div className="flex md:flex-col justify-between flex-1 mt-6 overflow-auto">
              <div className="flex md:flex-col">
                {adminRole === "admin" ? (
                  <>
                    {" "}
                    <Link
                      to="/dashboard/organizerProfile"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <CgProfile></CgProfile>

                      <span className="mx-4 font-medium">Profile</span>
                    </Link>
                    <Link
                      to="/dashboard/addCamp"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaPlus></FaPlus>

                      <span className="mx-4 font-medium">Add a Camp</span>
                    </Link>
                    <Link
                      to="/dashboard/manageCamp"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaToolbox></FaToolbox>

                      <span className="mx-4 font-medium">Manage Camp</span>
                    </Link>
                    <Link
                      to="/dashboard/manageRegCamp"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaRegistered></FaRegistered>
                      <span className="mx-4 font-medium"> Registered Camp</span>
                    </Link>{" "}
                  </>
                ) : (
                  <>
                    <Link
                      to="/dashboard/participantProfile"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <CgProfile></CgProfile>

                      <span className="mx-4 font-medium">Profile</span>
                    </Link>
                    <Link
                      to="/dashboard/analytics"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaLine></FaLine>

                      <span className="mx-4 font-medium">Analytics</span>
                    </Link>
                    <Link
                      to="/dashboard/registeredCampByPar"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaToolbox></FaToolbox>

                      <span className="mx-4 font-medium">Registered Camp</span>
                    </Link>
                    <Link
                      to="/dashboard/paymentHistory"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaDollarSign></FaDollarSign>
                      <span className="mx-4 font-medium"> Payment History</span>
                    </Link>
                  </>
                )}

                <hr className="my-6 border-gray-200 dark:border-gray-600" />

                <Link
                  to="/"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <FaHome></FaHome>

                  <span className="mx-4 font-medium">Home</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
        <div className="m-8 md:w-[60%]">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>

      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Dashboard;
