import Link from "next/link";

export default function ForgetPassword() {
  return (
    <div className="flex flex-col w-full h-full p-8  text-center rounded-xl bg-gradient-to-b from-slate-200 to-slate-400 ">
      <h3 className="mb-10 text-4xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent ">
        Reset Password
      </h3>
      <form method="post" className="flex flex-col h-full text-center">
        
        <label
          htmlFor="oldPassword"
          className="mb-2 text-sm text-start text-cyan-900 font-bold"
        >
          Old Password
        </label>
        <input
          id="oldPassword"
          type="password"
          placeholder="Enter your old password"
          className="flex items-center  w-full px-5 py-3 mb-5 mt-1 text-sm font-bold outline-none placeholder:text-grey-700 bg-white text-black rounded-md"
        />

        <label
          htmlFor="newPassword"
          className="mb-2 text-sm text-start text-black font-bold"
        >
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          className="flex items-center w-full px-5 py-3 mb-5 mt-1 text-sm font-medium outline-none placeholder:text-grey-700 bg-white text-black rounded-md"
        />

        <label
          htmlFor="confirmPassword"
          className="mb-2 text-sm text-start text-black font-bold"
        >
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          className=" items-center flex w-full px-5 py-3 mb-4 text-sm font-medium outline-none placeholder:text-grey-700 bg-white text-black rounded-md"
        />

        <button className="bg-black w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white md:w-96 rounded-md transition duration-300 hover:bg-slate-800 focus:ring-4 focus:ring-blue-100">
          Update Password
        </button>

        <Link href="/login" className="text-sm leading-relaxed text-cyan-900">
          Back to login
        </Link>
      </form>
    </div>
  );
}
