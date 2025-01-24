import SelectionInput from "../../../utils/selection-input/SelectionInput";

type ProfileRepositoriesFiltersProps = {
  searchRepos: string;
  setSearchRepos: (search: string) => void;
  filters: string;
  setFilters: (field: string) => void;
};

const filtersList = [
  {
    label: "Created",
    value: "created_at",
  },
  {
    label: "Updated",
    value: "updated_at",
  },
  {
    label: "Pushed",
    value: "pushed",
  },
  {
    label: "Name",
    value: "full_name",
  },
  {
    label: "Stars",
    value: "stargazers_count",
  },
  {
    label: "Forks",
    value: "forks_count",
  },
  {
    label: "Issues",
    value: "open_issues_count",
  },
];

const ProfileRepositoriesFilters = ({
  searchRepos,
  setSearchRepos,
  filters,
  setFilters,
}: ProfileRepositoriesFiltersProps) => {
  return (
    <div className="flex my-4 justify-between">
      <div>
        <input
          type="text"
          onChange={(e) => setSearchRepos(e.target.value)}
          value={searchRepos}
          className="rounded border border-gray-200 py-1 px-2"
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
