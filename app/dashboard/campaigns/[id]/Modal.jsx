import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, isUpdate }) => {
  const [moduleName, setModuleName] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [challengeInput, setChallengeInput] = useState("");
  const [resources, setResources] = useState([]);
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceLink, setResourceLink] = useState("");

  const handleAddChallenge = () => {
    if (challengeInput.trim() !== "") {
      setChallenges([...challenges, challengeInput]);
      setChallengeInput("");
    }
  };

  const handleRemoveChallenge = (index) => {
    const updatedChallenges = [...challenges];
    updatedChallenges.splice(index, 1);
    setChallenges(updatedChallenges);
  };

  const handleAddResource = () => {
    if (resourceTitle.trim() !== "" && resourceLink.trim() !== "") {
      setResources([
        ...resources,
        { title: resourceTitle, link: resourceLink },
      ]);
      setResourceTitle("");
      setResourceLink("");
    }
  };

  const handleRemoveResource = (index) => {
    const updatedResources = [...resources];
    updatedResources.splice(index, 1);
    setResources(updatedResources);
  };

  const handleRoadmapChange = (e) => {
    setRoadmap(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            {isUpdate ? "Update Module" : "Create Module"}
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Module Name */}
            <div className="mb-4">
              <label htmlFor="moduleName" className="block mb-1">
                Module Name
              </label>
              <input
                type="text"
                id="moduleName"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Thumbnail Image */}
            <div className="mb-4">
              <label htmlFor="thumbnail" className="block mb-1">
                Thumbnail Image
              </label>
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* Display thumbnail image */}
            </div>
            {/* Roadmap Image */}
            <div className="mb-4">
              <label htmlFor="roadmap" className="block mb-1">
                Roadmap Image
              </label>
              <input
                type="file"
                id="roadmap"
                accept="image/*"
                onChange={handleRoadmapChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* Display roadmap image */}
            </div>
            {/* Challenges */}
            <div className="mb-4">
              <label className="block mb-1">Challenges</label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  value={challengeInput}
                  onChange={(e) => setChallengeInput(e.target.value)}
                  className="w-full p-2 border rounded mr-2"
                />
                <button
                  type="button"
                  onClick={handleAddChallenge}
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
              <div className="mb-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md p-4 rounded-lg flex justify-between"
                    >
                      <div>
                        <p className="font-bold">{`Challenge ${index + 1}`}</p>
                        <p>{challenge}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveChallenge(index)}
                        className="text-red-500 font-semibold"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Resources */}
            <div className="mb-4">
              <label className="block mb-1">Resources</label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={resourceTitle}
                  onChange={(e) => setResourceTitle(e.target.value)}
                  className="w-1/2 p-2 border rounded mr-2"
                />
                <input
                  type="text"
                  placeholder="Link"
                  value={resourceLink}
                  onChange={(e) => setResourceLink(e.target.value)}
                  className="w-1/2 p-2 border rounded mr-2"
                />
                <button
                  type="button"
                  onClick={handleAddResource}
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
              <div className="mb-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md p-4 rounded-lg flex justify-between"
                    >
                      <div>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold hover:underline"
                        >
                          {resource.title}
                        </a>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveResource(index)}
                        className="text-red-500 font-semibold"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded w-full"
            >
              {isUpdate ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
