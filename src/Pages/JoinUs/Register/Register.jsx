import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../../../Components/SocialLogin";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [showPass, setShowPass] = useState(true);
  const { createUser, updateUserProfile, setUser, user } = useAuth();
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      console.log(result);
      await updateUserProfile(data.email, data.password);
      setUser({ ...user, photoURL: data.image, displayName: data.name });
      navigate("/");
      const userInfo = {
        name: data.name,
        email: data.email,
        image: data.image,
        role: ""
      };
      axios.post("https://b9-a12-server-lovat.vercel.app/user", userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("user added to the database");
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        }
      });
      setSuccess(toast.success("Successfully registered."));
    } catch (err) {
      toast.error(err?.message);
    }
  };



  return (
    <div className="w-1/2 mx-auto mt-12">
      <div className="hero-content flex-col ">
        <h3 className="text-3xl  font-bold">Register now </h3>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="image"
                {...register("image")}
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "password" : "text"}
                name="password"
                placeholder="password"
                {...register("password")}
                className="input input-bordered"
                required
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute text-xl top-[52px] right-4"
              >
                {showPass ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#4D83DE] text-white">Register</button>
            </div>
          </form>

          <SocialLogin></SocialLogin>
          <div className="mb-4"></div>
          <p className="text-center mb-8">
            Already have an account? Please{" "}
            <Link className="font-semibold" to="/login">
              <u>Login</u>
            </Link>
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Register;
