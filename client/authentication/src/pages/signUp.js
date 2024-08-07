import React from "react";
import bgImg from "../assets/images/bgImg.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function signUp() {
    return (
      <div className="flex h-screen">
        <div className="flex flex-col justify-center w-1/2 border-gray-200 p-8">
          <div className="w-[60%] mx-auto">
            <div className="text-[32px] font-[600] ">Get Started Now</div>
            <div>
              <form>
                <div className="mb-4 mt-[30px]">
                  <div className="text-[14px] font-[600]">
                    <label>Name</label> <br />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="border border-gray-300 rounded-md px-[5px] py-[4px] w-full text-[12px] mt-[3px]"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[14px] font-[600]">
                    <label>Email Address</label> <br />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="border border-gray-300 rounded-md px-[5px] py-[4px] w-full text-[12px] mt-[3px]"
                    />
                  </div>
                </div>
                <div className="mb-4 mt-[20px]">
                  <div className="flex justify-between">
                    <div className="text-[14px] font-[600]">
                      <label>Password</label>
                    </div>
                    <div className="text-blue-600 cursor-pointer text-[10px] font-[600] ">
                      Forgot password?
                    </div>
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="border border-gray-300 rounded-md px-[5px] py-[4px] w-full text-[12px] mt-[3px]"
                    />
                  </div>
                </div>
                <div className="mb-4 mt-[20px] text-[9px] flex gap-[5px] font-[600]">
                  <input type="checkbox" /> I agree to the terms & policy
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-[#3A5B22] text-white w-full rounded-[10px] py-[2px]"
                  >
                    Signup
                  </button>
                </div>
              </form>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-2 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="flex justify-between mb-4 mt-[50px]">
                <div className="flex justify-center items-center gap-[10px] border-2 rounded-[10px] py-[2px] px-[15px] cursor-pointer text-[14px] font-[600]">
                  <FcGoogle /> Sign in with Google
                </div>
                <div className="flex justify-center items-center gap-[10px] border-2 rounded-[10px] py-[2px] px-[15px] cursor-pointer text-[14px] font-[600]">
                  <FaApple /> Sign in with Apple
                </div>
              </div>
              <div className="text-center text-[14px] font-[600] mt-[30px]">
                <span>Don’t have an account?</span>
                <span className="text-[#0F3DDE] cursor-pointer">
                  <Link to="/"> Sign in</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen overflow-hidden">
          <img
            src={bgImg}
            alt="bgImg"
            className="w-full h-full object-cover"
            style={{ borderRadius: "40px 0px 0px 40px" }}
          />
        </div>
      </div>
    );
}

export default signUp;
