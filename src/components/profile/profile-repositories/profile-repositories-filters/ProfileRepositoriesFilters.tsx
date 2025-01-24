import SelectionInput from "../../../utils/selection-input/SelectionInput";
import { filtersList } from "./profile-repositories-filters-types/ProfileRepositoriesFiltersTypes";
import "./styles.css";

type ProfileRepositoriesFiltersProps = {
  searchRepos: string;
  setSearchRepos: (search: string) => void;
  filters: string;
  setFilters: (field: string) => void;
};

const ProfileRepositoriesFilters = ({
  searchRepos,
  setSearchRepos,
  filters,
  setFilters,
}: ProfileRepositoriesFiltersProps) => {
  return (
    <div className="flex my-4 justify-between filters-container">
      <div>
        <input
          type="text"
          onChange={(e) => setSearchRepos(e.target.value)}
          value={searchRepos}
          className="rounded border border-gray-200 py-1 px-2 search-input"
          placeholder="Search repository..."
        />
      </div>

      <SelectionInput
        inlineLabel="Sort by: "
        value={filters}
        setValue={(option) => setFilters(option)}
        options={filtersList}
      />
    </div>
  );
};

export default ProfileRepositoriesFilters;
