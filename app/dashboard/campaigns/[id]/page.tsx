"use client";
import { useState } from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import ModuleCard from "./ModuleCard";
import Modal from "./Modal";

const modules = [
  {
    id: 1,
    name: "Module 1",
    thumbnail: "https://dummyimage.com/300x200/000/fff",
  },
  {
    id: 2,
    name: "Module 2",
    thumbnail: "https://dummyimage.com/300x200/000/fff",
  },
  {
    id: 3,
    name: "Module 3",
    thumbnail: "https://dummyimage.com/300x200/000/fff",
  },
];

export default function CampaignDetails({ campaign }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex">
      <SideBar />
      <section className="w-full max-w-screen-xl mx-auto p-6">
        <div className="flex items-center justify-center">
          <img
            src="https://study.com/cimages/videopreview/videopreview-full/b5kit2d03m.jpg"
            alt="Campaign Thumbnail"
            style={{ height: "300px" }}
            className="w-full max-w-screen-lg mb-6"
          />
        </div>
        <div className="flex w-full justify-between mt-4">
          <div>
            <h1 className="text-3xl font-bold mb-4">fsdfsdfsdf</h1>
            <p className="text-lg">sdfsdfjksdjfklsdjfk</p>
          </div>
          <div>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded"
              onClick={openModal}
            >
              Create Module
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} isUpdate={false} />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mt-4 mb-4">Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
