import { useEffect, useState } from "react";
import Title from "../../../Components/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaStar } from "react-icons/fa";

const FeedBackHome = () => {
  const { user } = useAuth();
  const [feedback, setFeedback] = useState();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await axiosSecure.get(`/feedback`);
        setFeedback(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    res();
  }, [axiosSecure, user?.email]);

  console.log(feedback);
  return (
    <section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <Title title={"Clients review"}></Title>
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {feedback?.map((feed, id) => (
              <div
                key={id}
                className="p-8 border  rounded-lg dark:border-gray-700 flex flex-col justify-between"
              >
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                {feed?.feedback}
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src={feed?.image}
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                    {feed?.email}
                    </h1>
                    <span className="text-sm text-gray-500 flex gap-2 items-center">
                      Rating: {feed.rating} <FaStar className="text-yellow-400"></FaStar>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </section>
  );
};

export default FeedBackHome;
