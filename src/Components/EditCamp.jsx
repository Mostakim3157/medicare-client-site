import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";

const EditCamp = () => {
  const { register, handleSubmit } = useForm();
  const id = useParams();
  const navigate = useNavigate()
  // console.log(id.id);

  const onSubmit = async (data) => {
    const participant = parseInt(data.participantCount);
    const campPrice = parseInt(data.campFees);
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
      const res = await axios.put(
        `https://b9-a12-server-lovat.vercel.app/allCamp/${id.id}`,
        campItem
      );
      toast.success("Successfully Updated ");
      console.log(res);
      navigate(-1)
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
  );
};

export default EditCamp;
