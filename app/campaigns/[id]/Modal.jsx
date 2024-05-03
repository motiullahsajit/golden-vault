const Modal = ({ isOpen, onClose }) => {
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
          <h2 className="text-2xl font-bold mb-4">Join Now</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bkash" className="block font-semibold mb-1">
                bKash Number
              </label>
              <input
                type="text"
                id="bkash"
                name="bkash"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your bKash Number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="transactionId"
                className="block font-semibold mb-1"
              >
                Transaction ID
              </label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Transaction ID"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
