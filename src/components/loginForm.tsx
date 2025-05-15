"use client";
import Link from "next/link";
import { SocialAuth } from "./SocialAuth";

export const LoginForm = () => {
  return (
    <div className="flex flex-col w-full h-full p-6 text-center rounded-xl bg-gradient-to-b from-slate-200 to-slate-400">
      <h3 className="mb-3 text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
        Sign In
      </h3>
      <p className="mb-4 text-gray-800 ">Enter your email and password</p>
      <SocialAuth />

      <form method="post" className="flex flex-col h-full text-center">
        <div className="flex items-center mb-3 mt-4">
          <hr className="border-grey-900 grow" />
        </div>
        <label htmlFor="email" className="mb-2 text-sm text-start text-black ">
          Email
        </label>
        <input
          id="email"
          placeholder="email@codeExel.com"
          className="flex items-center w-full bg-white placeholder:text-black px-5 py-3 mr-2 mb-2 text-sm font-medium outline-none placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
        />
        <label
          htmlFor="password"
          className="mb-2 text-sm text-start text-black "
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter a password"
          className="flex items-center w-full px-5 py-3 mr-2   text-sm font-medium outline-none focus:bg-grey-400 mb-4 placeholder:text-grey-700 bg-white text-black  rounded-md "
        />
        <Link href={"/home"} className="bg-black w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white md:w-96 rounded-md transition duration-300 hover:bg-slate-800 focus:ring-4 focus:ring-blue-100">
          Sign In
        </Link>
        <div className="flex justify-around">
          <Link
            href="/forgetPassword"
            className="text-sm leading-relaxed text-cyan-900"
          >
            Forget Password?
          </Link>{" "}
          <Link
            href="/register"
            className="text-sm leading-relaxed text-cyan-900"
          >
            you don't have and account?
          </Link>
        </div>
      </form>
    </div>
  );
};
