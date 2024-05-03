"use client";
import React, { useState } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";

const studentsData = [
  {
    id: 1,
    name: "John Doe",
    department: "Computer Science",
    email: "email@example.com",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Engineering",
    email: "email@example.com",
    avatar: "https://via.placeholder.com/50",
  },
];

const Students = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openConfirmModal = (student) => {
    setSelectedStudent(student);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setSelectedStudent(null);
    setIsConfirmModalOpen(false);
  };

  const handleDeleteConfirmed = () => {
    console.log("Deleting student:", selectedStudent);
    setIsConfirmModalOpen(false);
  };

  return (
    <main className="flex">
      <SideBar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Avatar</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.department}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => openConfirmModal(student)}
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

export default Students;
