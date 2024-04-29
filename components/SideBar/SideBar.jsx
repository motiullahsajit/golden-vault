import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Golden Vault</h1>
        <ul>
          <li className="mb-4">
            <Link
              className="block hover:text-gray-400 transition duration-300 ease-in-out"
              href="/dashboard/students"
            >
              Students
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="block hover:text-gray-400 transition duration-300 ease-in-out"
              href="/dashboard/mentors"
            >
              Mentors
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="block hover:text-gray-400 transition duration-300 ease-in-out"
              href="/dashboard/campaigns"
            >
              Campaigns
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="block hover:text-gray-400 transition duration-300 ease-in-out"
              href="/dashboard/campaign-access"
            >
              Campaign Access
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
