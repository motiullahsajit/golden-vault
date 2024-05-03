const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg p-6">
        <p className="text-lg mb-4">Are you sure you want to proceed?</p>
        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="bg-gray-800 text-white px-4 py-2 rounded mr-2"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
