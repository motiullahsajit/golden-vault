"use client";

import { useState } from "react";
import Image from "next/image";

const CreateModule = () => {
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

  const handleRoadmapChange = (e) => {
    setRoadmap(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to submit module data
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Module</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="container mx-auto">
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block mb-1">
              Thumbnail Image
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="border rounded"
            />
            {thumbnail && (
              <div className="mt-2">
                <Image
                  src={URL.createObjectURL(thumbnail)}
                  alt="Thumbnail"
                  layout="responsive"
                  width={200}
                  height={100}
                  className="rounded"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="roadmap" className="block mb-1">
              Roadmap Image
            </label>
            <input
              type="file"
              id="roadmap"
              accept="image/*"
              onChange={handleRoadmapChange}
              className="border rounded"
            />
            {roadmap && (
              <div className="mt-2">
                <Image
                  src={URL.createObjectURL(roadmap)}
                  alt="Roadmap"
                  layout="responsive"
                  width={600}
                  height={400}
                  className="rounded"
                />
              </div>
            )}
          </div>
        </div>
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Challenges</label>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                  <p className="font-bold">{`Challenge ${index + 1}`}</p>
                  <p>{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Resources</label>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    {resource.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateModule;
