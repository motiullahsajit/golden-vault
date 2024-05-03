import React, { useState } from "react";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";

const CampaignCard = ({ campaign, onUpdate, onDelete }) => {
  const { title, thumbnail, mentor } = campaign;

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleDeleteConfirmed = () => {
    onDelete(campaign.id);
    setIsConfirmModalOpen(false);
  };

  const handleUpdate = () => {
    onUpdate(campaign);
  };

  const handleDelete = () => {
    openConfirmModal();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4 mb-4 flex">
      <div className="w-1/3">
        <img src={thumbnail} alt={title} className="h-72 w-full object-cover" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="sajit"
            className="h-8 w-8 rounded-full mr-2 object-cover"
          />
          <p className="text-gray-700">"Sajit"</p>
        </div>
        <div className="mt-4">
          <button
            onClick={handleUpdate}
            className="bg-gray-800 bg-gray-900 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        onConfirm={handleDeleteConfirmed}
      />
    </div>
  );
};

export default CampaignCard;
