"use client";
import { Charts } from "@/components/chart";
import { NavBar } from "@/components/navBar";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="">
        <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded-lg ">
          <Charts />
        </div>
      </div>
    </div>
  );
}
