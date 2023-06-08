import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    
      const handleGoogleLogin = () => {};
    
      return (
        <div className=" min-h-screen pt-20 bg-teal">
          <h1 className="text-5xl font-bold text-center pt-8 text-white">Register now!</h1>
          <div className="hero">
            <div className="hero-content">
              <div className="rounded-md flex-shrink-0 shadow-2xl lg:w-[650px] bg-base-100">
                <div className="card-body">
                  <div className="form-control mt-6">
                    <button className="button-outline">Google Login</button>
                  </div>
                  <div className="divider mt-5 mb-2">OR</div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="name"
                        placeholder="Name"
                        {...register("name")}
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirm")}
                        required
                        className="input input-bordered"
                      />
                    </div>
                    {/* {
                      error && <p>{error}</p>
                    } */}
                    </div>
                    <div className="form-control mt-6">
                      <input type="submit" className="button" />
                    </div>
                  </form>
                  <p className="text-sm mt-2 ml-1">
                    Already have an account? Please{" "}
                    <Link to="/login" className="text-teal font-semibold">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Register;