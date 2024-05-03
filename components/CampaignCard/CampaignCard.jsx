// CampaignCard.jsx

const CampaignCard = ({ campaign }) => {
  const { title, thumbnail, mentor } = campaign;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4 mb-4 flex">
      <div className="w-1/3">
        <img src={thumbnail} alt={title} className="h-72 w-full object-cover" />
      </div>
      <div className="w-2/3 p-4">
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
