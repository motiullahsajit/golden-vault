"use client";
import React, { useState } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import Modal from "./Modal";
import CampaignCard from "./CampaignCard";

export default function Campaigns() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Campaign 1",
      thumbnail:
        "https://study.com/cimages/videopreview/videopreview-full/b5kit2d03m.jpg",
      mentor: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/50",
      },
    },
    {
      id: 2,
      title: "Campaign 2",
      thumbnail:
        "https://study.com/cimages/videopreview/videopreview-full/b5kit2d03m.jpg",
      mentor: {
        name: "Jane Doe",
        avatar: "https://via.placeholder.com/50",
      },
    },
    {
      id: 3,
      title: "Campaign 3",
      thumbnail:
        "https://study.com/cimages/videopreview/videopreview-full/b5kit2d03m.jpg",
      mentor: {
        name: "Alice",
        avatar: "https://via.placeholder.com/50",
      },
    },
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
  };

  return (
    <main className="flex">
      <SideBar />
      <section className="w-full p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <div>
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              onClick={openModal}
            >
              Create Campaign
            </button>
          </div>
        </div>

        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedCampaign={selectedCampaign}
          setCampaigns={setCampaigns}
        />
      </section>
    </main>
  );
}
