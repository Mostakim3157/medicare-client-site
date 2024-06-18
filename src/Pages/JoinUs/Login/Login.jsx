import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(true);

  const { singInUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"
// console.log(from);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const newForm = { email, password };
    console.log(form);

    singInUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        navigate(from , {replace: true})
      })
      .then((err) => {
        console.log(err);
      });
  };

  
  return (
    <div className="w-1/2 mx-auto mt-12">
      <div className="hero-content flex-col ">
        <h3 className="text-3xl  font-bold">Login Here</h3>
        <div className="card w-full shadow-2xl bg-base-100">
          <form
              onSubmit={handleLogin}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                className="input input-bordered"
                required
              />
              <label className="label"></label>
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute text-xl top-[52px] right-4"
              >
                {showPass ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#4D83DE] border-none text-white">
                Login
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="text-center mb-8 flex gap-1 flex-col lg:flex-row justify-center">
            Do not have an account?{" "}
            <span>
              {" "}
              Please{" "}
              <Link className="font-semibold" to="/register">
                <u>Register</u>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
