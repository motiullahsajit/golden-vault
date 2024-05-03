import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, selectedCampaign, setCampaigns }) => {
  const [campaignName, setCampaignName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);

  useEffect(() => {
    if (selectedCampaign) {
      setCampaignName(selectedCampaign.title);
      setTagline(selectedCampaign.tagline || "");
      setDescription(selectedCampaign.description || "");
      setThumbnail(selectedCampaign.thumbnail || "");
    }
  }, [selectedCampaign]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCampaign) {
      const updatedCampaigns = campaigns.map((campaign) =>
        campaign.id === selectedCampaign.id
          ? {
              ...campaign,
              title: campaignName,
              tagline,
              description,
              thumbnail,
            }
          : campaign
      );
      setCampaigns(updatedCampaigns);
    } else {
      const newCampaign = {
        id: Date.now(),
        title: campaignName,
        tagline,
        description,
        thumbnail,
      };
      setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
    }
    onClose();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setThumbnail(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white w-full max-w-md p-6 rounded-lg">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
          >
            X
          </button>
          <h2 className="text-2xl font-bold mb-4">
            {selectedCampaign ? "Update Campaign" : "Create Campaign"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="campaignName"
                className="block font-semibold mb-1"
              >
                Campaign Name
              </label>
              <input
                type="text"
                id="campaignName"
                name="campaignName"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter campaign name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tagline" className="block font-semibold mb-1">
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter campaign tagline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-semibold mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter campaign description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="thumbnail" className="block font-semibold mb-1">
                Thumbnail Image
              </label>
              <input
                type="file"
                id="thumbnail"
                name="thumbnail"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {thumbnail && (
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="mt-2 h-24 w-auto rounded"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full"
            >
              {selectedCampaign ? "Update" : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
