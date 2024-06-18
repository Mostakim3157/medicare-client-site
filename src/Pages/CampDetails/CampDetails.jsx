import { BiShoppingBag } from "react-icons/bi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
const CampDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [camp, setCamp] = useState();
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues:{
      confirmation: "pending",
      paymentStatus: "unpaid"
    }
  });
 

  const { displayName, email } = user;
  const {
    campName,
    image,
    campFees,
    dateTime,
    location,
    healthcareProfessionalName,
    participantCount,
    description,
    _id,
  } = camp || {};

  React.useEffect(() => {
    setValue('confirmation', 'pending');
    setValue('paymentStatus', 'unpaid');
  }, [setValue]);


  useEffect(() => {
    const res = async () => {
      try {
        const data = await axiosSecure.get(`/allCamp/${id}`);
        setCamp(data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    res();
  }, [axiosSecure, id]);


  const onSubmit = async (data) => {
    const submitData = {
      campName,
      campFees,
      location,
      healthcareProfessionalName,
      participantCount,
      participantName: user.displayName,
      age: data.age,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      emergencyContact: data.emergencyContact,
      newId: _id,
      paymentStatus: data.paymentStatus,
      confirmation: data.confirmation,
      email: user.email
    };

    // console.log(data.paymentStatus);
    // console.log(data.confirmation);

    try {
      const { data } = await axios.post(
        `https://b9-a12-server-lovat.vercel.app/allJoinedCamp/${_id}`,
        submitData
      );
      console.log(data);
      if (data.addResult.insertedId && data.updateResult.modifiedCount) {
        // console.log("done");
        reset();
        window.location.reload()
      }
    } catch (err) {
      console.log(err);
    }

    
  };

  return (
    <section>
      <div
        className="mt-6
  "
      >
        <div className="card  bg-base-100 rounded-lg">
          <figure className="relative">
            <img className="rounded-lg h-96" src={image} alt="Shoes" />
          </figure>

          <div className="card-body  text">
            <p className=" text-gray-500  py-2 mb-4 ">{description}</p>
            <hr className="border-dashed border-[1.5px]" />

            <h2 className="text-3xl mt-4 font-semibold text-black">
              {campName}
            </h2>
            <p className="flex items-center gap-2"> Location: {location}</p>

            <div className="flex md:flex-row flex-col md:gap-64 gap-12 mt-4 mb-2 ">
              <div>
                <p className="flex items-center gap-2 my-3">
                  <span className="font-semibold">
                    Healthcare Professional:
                  </span>{" "}
                  {healthcareProfessionalName}
                </p>
                <p className="flex items-center gap-2 my-3">
                  <span className="font-semibold">Location:</span> Health
                  Center, Cedar Grove
                </p>
                <p className="flex items-center gap-2 my-3">
                  <span className="font-semibold">Camp Fees: </span>${campFees}
                </p>
                <p className="flex items-center gap-2 my-3">
                  <span className="font-semibold">Participant Count: </span>
                  {participantCount}
                </p>
                <p className="flex items-center gap-2 my-3">
                  <span className="font-semibold">Date and Time: </span>{" "}
                  {dateTime}
                </p>
              </div>
            </div>
            <hr className="border-dashed border-[1.5px]" />

            {user ? (
              <button
                className="btn mt-6 border-2 w-1/2 bg-[#4D83DE] text-white flex items-center gap-2"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <BiShoppingBag className="text-lg mb-[3px]"></BiShoppingBag>
                Join Now
              </button>
            ) : (
              <button
                disabled
                className="btn mt-6 border-2 w-1/2 bg-[#4D83DE] text-white flex items-center gap-2"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <BiShoppingBag className="text-lg mb-[3px]"></BiShoppingBag>
                Join Now
              </button>
            )}

            {/* join now section */}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-2 gap-8"
                  method="dialog"
                >
                  {/* Camp fees */}
                  <div>
                    <label
                      htmlFor="Camp Fees"
                      className="block text-sm text-gray-500 dark:text-gray-300"
                    >
                      Camp Fees
                    </label>
                    <input
                      name="Camp Fees"
                      type="number"
                      disabled
                      defaultValue={campFees}
                      {...register("campFees")}
                      placeholder=""
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Camp  Name */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Camp name
                    </label>
                    <input
                      //   value={"displayName"}
                      name="Camp Name"
                      type="text"
                      disabled
                      defaultValue={campName}
                      {...register("campName")}
                      placeholder=""
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="Camp Fees"
                      className="block text-sm text-gray-500 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      disabled
                      defaultValue={email}
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Location  Name */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Location name
                    </label>
                    <input
                      disabled
                      defaultValue={location}
                      name="location"
                      type="text"
                      {...register("location")}
                      placeholder=""
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/*  Healthcare Professional Name  Name */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Healthcare Professional name
                    </label>
                    <input
                      defaultValue={healthcareProfessionalName}
                      name=" Healthcare Professional Name"
                      disabled
                      type="text"
                      {...register("healthcareProfessionalName")}
                      placeholder=""
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Participant  Name */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Participant name
                    </label>
                    <input
                      defaultValue={displayName}
                      name="Participant Name"
                      type="text"
                      disabled
                      {...register("participantName")}
                      placeholder=""
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Age  Name */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Age
                    </label>
                    <input
                      //   value={"displayName"}
                      name="Age Name"
                      type="number"
                      {...register("age")}
                      placeholder="Age"
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Phone Number  */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      //   value={"displayName"}
                      name="Phone Number Name"
                      type="number"
                      {...register("phoneNumber")}
                      placeholder="Phone Number"
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Gender
                    </label>
                    <select
                      {...register("gender")}
                      name="gender"
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
            rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
            focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
            focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
            dark:focus:border-blue-300"
                    >
                      <option value="" disabled selected>
                        Select your gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Emergency Contact
                    </label>
                    <input
                     
                      name="Emergency Contact "
                      type="number"
                      {...register("emergencyContact")}
                      placeholder="Emergency Contact "
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>
                  {/* Payment Status */}
                  <div className="hidden">
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Payment Status
                    </label>
                    <input
                     disabled
                      type="text"
                      {...register("paymentStatus")}
                      placeholder="Payment Status "
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                  dark:focus:border-blue-300"
                    />
                  </div>
                  {/* Confirmation */}
                  <div className="hidden">
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      Confirmation
                    </label>
                    <input
                     
                      disabled
                      name="Confirmation "
                      type="text"
                      {...register("confirmation")}
                      placeholder="Confirmation "
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
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampDetails;
