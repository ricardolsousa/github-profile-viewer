import { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleGetUser = async () => {
    navigate(`/${username}`);
  };

  return (
    <div className="lg:mx-32 md:mx-1 sm:mx-1 xs:mx-1 lg:px-6 px-4 py-8 flex flex-col gap-4 justify-center items-center">
      <strong className="text-3xl">GitHub Profile Viewer</strong>
      <div className="mt-6 flex items-center">
        <input
          type="text"
          style={{ minWidth: "256px" }}
          className="rounded border border-gray-200 py-2 px-3 bg-gray-600 text-base bg-white mr-6"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={async () => await handleGetUser()}
          className="inline-flex w-full justify-center rounded bg-blue-600 py-2 px-3 text-base font-semibold text-white shadow-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;
