"use client";
import CreateModule from "../../components/CreateModule/CreateModule";
import SideBar from "../../components/SideBar/SideBar";

export default function Dashboard() {
  return (
    <main className="flex">
      <SideBar />
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </main>
  );
}
