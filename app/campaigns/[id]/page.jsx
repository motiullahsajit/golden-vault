"use client";
import { useState } from "react";
import Navigation from "../../../components/Navigation/Navigation";
import Footer from "../../../components/Footer/Footer";
// import { useRouter } from "next/router";

export default function Details() {
  const campaignDetails = {
    id: 1,
    title: "Software Engineering Mastery",
    thumbnail: "/software-engineering-thumbnail.jpg",
    mentor: {
      name: "John Doe",
      avatar: "/john-doe-avatar.jpg",
    },
    access: true, // Change to false if student doesn't have access
    content: {
      roadmap: "Roadmap content here",
      resources: "Resources content here",
      challenges: "Challenges content here",
      leaderboard: "Leaderboard content here",
    },
  };

  // const router = useRouter();
  const [activeTab, setActiveTab] = useState("roadmap");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const joinNow = () => {
    // Logic for joining the campaign
    console.log("Join Now clicked");
    // router.push("/join-campaign");
  };
  return (
    <>
      <Navigation />
      <main className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="md:w-1/2">
            <img
              src={campaignDetails.thumbnail}
              alt={campaignDetails.title}
              className="w-full rounded-lg shadow-lg mb-4"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-bold mb-4">{campaignDetails.title}</h1>
            <div className="flex items-center mb-4">
              <img
                src={campaignDetails.mentor.avatar}
                alt={campaignDetails.mentor.name}
                className="h-8 w-8 rounded-full mr-2 object-cover"
              />
              <p className="text-gray-700">{campaignDetails.mentor.name}</p>
            </div>
            {!campaignDetails.access && (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4"
                onClick={joinNow}
              >
                Join Now
              </button>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex mb-4">
            {Object.keys(campaignDetails.content).map((tab) => (
              <button
                key={tab}
                className={`mr-4 px-4 py-2 rounded-full focus:outline-none ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div>
            {activeTab === "roadmap" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Roadmap</h2>
                <p>{campaignDetails.content.roadmap}</p>
              </div>
            )}
            {activeTab === "resources" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Resources</h2>
                <p>{campaignDetails.content.resources}</p>
              </div>
            )}
            {activeTab === "challenges" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Challenges</h2>
                <p>{campaignDetails.content.challenges}</p>
              </div>
            )}
            {activeTab === "leaderboard" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
                <p>{campaignDetails.content.leaderboard}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
