"use client";
import CreateModule from "../../components/CreateModule/CreateModule";
import SideBar from "../../components/SideBar/SideBar";

export default function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </div>
  );
}
