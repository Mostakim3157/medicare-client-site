import { FaEdit } from "react-icons/fa";
import Title from "../../../Components/Title";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const ParticipantProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  const { register, handleSubmit, setValue } = useForm();


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

  const onSubmit = async (data) => {
    console.log(data);
    const updateData = {name: data?.name}

    try {
          const res = await axios.put(
            `https://b9-a12-server-lovat.vercel.app/user/${data.newId}`,
            updateData
          );
          toast.success("Successfully Updated ");
          console.log(res);
          window.location.reload()
        } catch (err) {
          console.error(err);
        }
  }

  const handleEditClick = (data) => {
    setValue("newId", data._id);
    setValue("name", data.name);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <section>
      <Title title={"Organizer profile"}></Title>

      {userData?.map((data, id) => (
        <div key={id} className="flex justify-center">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56 object-contain"
              src={data.image}
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block mb-4 text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                {data?.name}
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200 ">
                <span className="font-semibold">Contact details:</span> <br />{data?.email}
              </span>
            </div>
            <div className="mx-auto text-center mb-8">
              <button
                className="btn text-green-500 mt-4 btn-outline"
                onClick={() => handleEditClick(data)}
              >
                <FaEdit className="text-green-500"></FaEdit> Update{" "}
              </button>
            </div>

            {/* Modal starts*/}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="text-center"
                  method="dialog"
                >
                  <div className="mb-4 hidden">
                    <label className="hidden text-sm text-gray-500 dark:text-gray-300">
                      User ID
                    </label>
                    <input
                      name="newId"
                      type="text"
                      {...register("newId")}
                      placeholder=""
                      disabled
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                      rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                      focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                      focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                      dark:focus:border-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                      User Name
                    </label>
                    <input
                      name="name"
                      {...register("name")}
                      type="text"
                      placeholder=""
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                      rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                      focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                      focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                      dark:focus:border-blue-300"
                    />
                  </div>

                  {/* Join */}
                  <button
                    className="btn col-span-2 mt-4 bg-[#4D83DE] text-white w-1/2 mx-auto"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ParticipantProfile;