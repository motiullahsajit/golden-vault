// Campaigns.jsx

import CampaignCard from "../../components/CampaignCard/CampaignCard";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      title: "Software Engineering Mastery",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRur-0_9Wumj4TgFnI57BFCOO2YJMrPLage216Uj7wYZQ&s",
      mentor: {
        name: "John Doe",
        avatar: "/john-doe-avatar.jpg",
      },
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      thumbnail:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
      mentor: {
        name: "Jane Smith",
        avatar: "/jane-smith-avatar.jpg",
      },
    },
    // Add more campaigns as needed
  ];
  return (
    <>
      <Navigation />
      <main className="bg-gray-100 pt-10 pb-10">
        <div className="container mx-auto py-8 max-w-7xl">
          <div>
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
