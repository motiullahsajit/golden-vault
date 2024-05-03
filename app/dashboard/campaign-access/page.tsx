"use client";
import React, { useState } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";

const campaignAccessData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    campaignName: "Summer Internship Program",
    bkashNumber: "017XXXXXXXX",
    transactionId: "123456",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    campaignName: "Winter Hackathon",
    bkashNumber: "018XXXXXXXX",
    transactionId: "789012",
  },
];

const CampaignAccess = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState(null);

  const openConfirmModal = (access) => {
    setSelectedAccess(access);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setSelectedAccess(null);
    setIsConfirmModalOpen(false);
  };

  const handleApprove = () => {
    console.log("Approving access:", selectedAccess);
    setIsConfirmModalOpen(false);
  };

  const handleReject = () => {
    console.log("Rejecting access:", selectedAccess);
    setIsConfirmModalOpen(false);
  };

  return (
    <main className="flex">
      <SideBar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Campaign Access</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Campaign Name</th>
              <th className="px-4 py-2">Bkash Number</th>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaignAccessData.map((access) => (
              <tr key={access.id}>
                <td className="border px-4 py-2">{access.name}</td>
                <td className="border px-4 py-2">{access.email}</td>
                <td className="border px-4 py-2">{access.campaignName}</td>
                <td className="border px-4 py-2">{access.bkashNumber}</td>
                <td className="border px-4 py-2">{access.transactionId}</td>
                <td className="border px-4 py-2 flex justify-center space-x-2">
                  <button
                    onClick={() => openConfirmModal(access)}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded focus:outline-none mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => openConfirmModal(access)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
                  >
                    Reject
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
        onConfirm={handleApprove}
      />
    </main>
  );
};

export default CampaignAccess;
