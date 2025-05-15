"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validation/registerValidate";

import { z } from "zod";
import Link from "next/link";
export type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex flex-col w-full h-full p-10 text-center rounded-xl bg-gradient-to-b from-slate-200 to-slate-400">
      <h3 className="mb-3 text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
        Register
      </h3>
      <p className="mb-4 text-gray-800">Create your account below</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 text-start"
      >
        <label htmlFor="fullName" className="text-sm text-black">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Khattab fayyad"
          {...register("fullName")}
          className="w-full px-5 py-3 text-sm font-medium outline-none bg-white text-black rounded-md"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm">{errors.fullName.message}</p>
        )}

        <label htmlFor="phone" className="text-sm text-black">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="0788*****"
          {...register("phone")}
          className="w-full px-5 py-3 text-sm font-medium outline-none bg-white text-black rounded-md"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm">{errors.phone.message}</p>
        )}
        <label htmlFor="email" className="text-sm text-black">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="email@codeExel.com"
          {...register("email")}
          className="w-full px-5 py-3 text-sm font-medium outline-none bg-white text-black rounded-md"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}

        <label htmlFor="idNumber" className="text-sm text-black">
          Internal ID Number
        </label>
        <input
          id="idNumber"
          type="text"
          placeholder="3200000000"
          {...register("idNumber")}
          className="w-full px-5 py-3 text-sm font-medium outline-none bg-white text-black rounded-md"
        />
        {errors.idNumber && (
          <p className="text-red-600 text-sm">{errors.idNumber.message}</p>
        )}

        <button className="bg-black w-full px-6 py-4 text-sm font-bold text-white rounded-md transition duration-300 hover:bg-slate-800 focus:ring-4 focus:ring-blue-100">
          Register
        </button>
      </form>
    </div>
  );
};
