"use client";
import { Charts } from "@/components/chart";
import { Dashboard } from "@/components/dashboard";
import { NavBar } from "@/components/navBar";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full">
        <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded-lg ">
          <Charts />
        </div>
        <Dashboard />
      </div>
    </div>
  );
}
