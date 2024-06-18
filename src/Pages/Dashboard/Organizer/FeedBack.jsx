
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineRateReview } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const FeedBack = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
const {user} =useAuth()
  const onSubmit = async (data) => {
    const feedBack = {
      rating: data.rating,
      feedback: data.feedback,
      email: user?.email,
      image: user?.photoURL
    };

    try {
      const response = await axiosSecure.post(
        "https://b9-a12-server-lovat.vercel.app/feedBack",
        feedBack
      );

      if (response.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Feedback submitted successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setIsModalOpen(false); // Close the modal
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        <MdOutlineRateReview className="text-blue-500 text-xl" />
      </button>

      {isModalOpen && (
        <dialog
          id="my_modal_1"
          className="modal"
          open
          onClose={() => setIsModalOpen(false)}
        >
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              {/* Rating */}
              <div className="w-1/2 mx-auto mb-4">
                <label
                  htmlFor="Rating"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Rating
                </label>
                <input
                  name="Rating"
                  type="number"
                 min="1"
                 max="5"
                  {...register("rating")}
                  placeholder=""
                  className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                    rounded-lg border border-gray-200 bg-white px-5 text-gray-700 
                    focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                    focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                    dark:focus:border-blue-300 py-2"
                />
              </div>
              {/* Feed back */}
              <div className="mb-4">
                <label
                  htmlFor="Feed back"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Feed back
                </label>
                <input
                  name="Feed back"
                  type="text"
                  {...register("feedback")}
                  placeholder=""
                  className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                    rounded-lg border border-gray-200 bg-white px-5 text-gray-700 
                    focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                    focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                    dark:focus:border-blue-300 py-8"
                />
              </div>

              {/* Join */}
              <button
                type="submit"
                className="btn col-span-2 bg-[#4D83DE] text-white w-1/2 mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default FeedBack;

