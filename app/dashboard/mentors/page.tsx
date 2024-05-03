"use client";
import React, { useState } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";

const mentorsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    qualification: "Ph.D. in Computer Science",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    qualification: "Master's in Engineering",
    avatar: "https://via.placeholder.com/50",
  },
];

const Mentors = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const openConfirmModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setSelectedMentor(null);
    setIsConfirmModalOpen(false);
  };

  const handleDeleteConfirmed = () => {
    console.log("Deleting mentor:", selectedMentor);
    setIsConfirmModalOpen(false);
  };

  return (
    <main className="flex">
      <SideBar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Mentors</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Avatar</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Qualification</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mentorsData.map((mentor) => (
              <tr key={mentor.id}>
                <td className="border px-4 py-2">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border px-4 py-2">{mentor.name}</td>
                <td className="border px-4 py-2">{mentor.email}</td>
                <td className="border px-4 py-2">{mentor.qualification}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => openConfirmModal(mentor)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        onConfirm={handleDeleteConfirmed}
      />
    </main>
  );
};

export default Mentors;
