import { BiBook } from "react-icons/bi";

import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { data: camp = [] } = useQuery({
    queryKey: ["allCampByHigh"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allCampByHigh");
      return res.data;
    },
  });

  return (
    <section>
      <div className="grid md:gap-8 gap-12 md:grid-cols-2  lg:grid-cols-3">
        {camp?.slice(0, 6).map((cam, id) => (
          <div
            key={id}
            className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover object-center w-full h-56"
              src={cam.image}
              alt="avatar"
            />

            <div className="flex items-center px-6 py-3 bg-[#4D83DE]">
              <BiBook className="text-white text-lg"></BiBook>

              <h1 className="mx-3 text-lg font-semibold text-white">
                {cam.healthcareProfessionalName}
              </h1>
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {cam.campName}
                  </h1>

                  <p className="py-2 text-gray-700 dark:text-gray-400">
                    {cam.location}
                  </p>
                  <p className="py-2 text-gray-700 dark:text-gray-400">
                    Camp Fees: ${cam.campFees}
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
      <div className="text-center my-8">
        <Link to="/availableCamps" className="btn bg-[#4D83DE] text-white ">
          See all camps
        </Link>
      </div>
    </section>
  );
};

export default PopularCamps;
