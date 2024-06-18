import { useForm } from "react-hook-form";
import Title from "../../../Components/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
// import axios from "axios";

const AddCamp = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const participant = parseInt(data.participantCount)
    const campPrice = parseInt(data.campFees)
    const campItem = {
      campName: data.campName,
      image: data.image,
      campFees: campPrice,
      dateTime: data.dateTime,
      location: data.location,
      healthcareProfessionalName: data.healthcareProfessionalName,
      participantCount: participant,
      description: data.description,
    };

    try {
      const { data } = await axiosSecure.post(
        "https://b9-a12-server-lovat.vercel.app/allCamp",
        campItem
      );
      // console.log(data);
      if (data.insertedId) {
        console.log("done");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Camp added successfully.`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <section>
      <Title title={"Add a medical camp"}></Title>
      
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-8"
          method="dialog"
        >
          {/* Camp  Name */}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              Camp name
            </label>
            <input
              {...register("campName")}
              name="campName"
              required
              type="text"
              placeholder="campName"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* image*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              image
            </label>
            <input
              //   value={"displayName"}
              name="image"
              {...register("image")}
              required
              type="text"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* campFees*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              campFees
            </label>
            <input
              //   value={"displayName"}
              name="campFees"
              {...register("campFees")}
              required
              type="number"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* dateTime*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              dateTime
            </label>
            <input
              {...register("dateTime")}
              name="dateTime"
              required
              type="date"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* location*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              location
            </label>
            <input
              //   value={"displayName"}
              name="location"
              {...register("location")}
              required
              type="text"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* healthcareProfessionalName*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              healthcareProfessionalName
            </label>
            <input
              {...register("healthcareProfessionalName")}
              name="healthcareProfessionalName"
              required
              type="text"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* participantCount*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              participantCount
            </label>
            <input
              {...register("participantCount")}
              name="participantCount"
              required
              type="number"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* description*/}
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-300">
              description
            </label>
            <input
              {...register("description")}
              name="description"
              required
              type="text"
              placeholder="John Doe"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
            />
          </div>

          {/* Join */}
          <button className="btn col-span-2  bg-[#4D83DE] text-white w-1/2 mx-auto">
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default AddCamp;
