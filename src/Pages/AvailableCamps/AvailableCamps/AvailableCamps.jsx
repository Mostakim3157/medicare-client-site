import { useEffect, useState } from "react";

import { CiBoxList } from "react-icons/ci";
import { FaListAlt } from "react-icons/fa";
import { FaKitMedical } from "react-icons/fa6";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Title from "../../../Components/Title";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AvailableCamps = () => {
  //   const col = true;
  //   const view = true;
  const axiosSecure = useAxiosSecure();
  const [view, setView] = useState(true);
  // const [camp, setCamp] = useState();
  // console.log(camp);
  const handleToggle = (e) => {
    e.preventDefault();
    setView(true);
  };
  const handleToggle1 = (e) => {
    e.preventDefault();
    setView(false);
  };



  const { data: camp = []} = useQuery({
    queryKey: ["allCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allCamp");
      return res.data;
    },
  });

  return (
    <section>
      <Title title={"Available Camps"}></Title>

      <div className="mx-auto w-24 h-12 justify-center mb-8 flex gap-2 text-2xl bg-gray-200 p-2 rounded-lg text-black">
        <button onClick={handleToggle}>
          {!view ? <IoGridOutline /> : <IoGrid />}
        </button>
        <button onClick={handleToggle1}>
          {view ? <CiBoxList /> : <FaListAlt />}
        </button>
      </div>

      <div
        className={`grid ${
          !view ? "lg:grid-cols-3" : "lg:grid-cols-2"
        }  md:grid-cols-2 gap-12 `}
      >
        {camp?.map((cam, id) => (
          <div
            key={id}
            className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover object-center w-full h-56"
              src={cam.image}
              alt="avatar"
            />

            <div className="flex items-center px-6 py-3 bg-[#4D83DE]">
              <FaKitMedical className="text-white text-lg"></FaKitMedical>

              <h1 className="mx-3 text-lg font-semibold text-white">
              {cam.healthcareProfessionalName}
              </h1>
            </div>

            <div className="px-6 py-4">
              <p className="py-2 text-gray-500 dark:text-gray-400">
               {cam?.description?.slice(0, 150)}
              </p>
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {cam.campName}
                  </h1>

                  <p className="py-2 text-gray-700 dark:text-gray-400">
                  {cam.location}
                  </p>
                  <p className="py-2 text-gray-700 dark:text-gray-400">
                  Participants: {cam.participantCount}
                  </p>

                  <p className="py-2 text-gray-700 dark:text-gray-400">
                  Date: {cam.dateTime}
                  </p>
                </div>
                <div>
                  <Link to={`/campDetails/${cam._id}`}>
                    <button className="btn bg-[#4D83DE] text-white ">
                      Details
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}

       
      </div>
    </section>
  );
};

export default AvailableCamps;
