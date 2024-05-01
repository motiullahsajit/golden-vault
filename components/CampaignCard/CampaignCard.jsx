// CampaignCard.jsx

const CampaignCard = ({ campaign }) => {
  const { title, thumbnail, mentor } = campaign;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <img src={thumbnail} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex items-center">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="h-8 w-8 rounded-full mr-2 object-cover"
          />
          <p className="text-gray-700">{mentor.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
