import React, { useState } from "react";
import ConfirmModal from "../../../../components/ConfirmModal/ConfirmModal";
import Modal from "./Modal";

const ModuleCard = ({ module }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleDeleteConfirmed = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={module.thumbnail}
        alt={module.name}
        className="w-full h-40 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{module.name}</h3>
        <button
          onClick={openUpdateModal}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none mr-4"
        >
          Update
        </button>
        <button
          onClick={openConfirmModal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
        >
          Delete
        </button>
      </div>
      {/* Render the ConfirmModal component */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        onConfirm={handleDeleteConfirmed}
      />
      {/* Render the Update Modal component */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        isUpdate={true}
      />
    </div>
  );
};

export default ModuleCard;
