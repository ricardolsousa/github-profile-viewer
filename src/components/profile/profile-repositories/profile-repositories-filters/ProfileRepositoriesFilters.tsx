import { useState } from "react";

const ProfileRepositoriesFilters = () => {
  const [searchRepos, setSearchRepos] = useState<string>("");

  return (
    <div className="flex mb-4">
      <div>
        <input
          type="text"
          onChange={(e) => setSearchRepos(e.target.value)}
          value={searchRepos}
          className="rounded border border-gray-200 py-2 px-3"
          placeholder="Search repository..."
        />
      </div>
    </div>
  );
};

export default ProfileRepositoriesFilters;
