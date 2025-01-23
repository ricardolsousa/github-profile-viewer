import { VscIssues, VscRepoForked, VscStarEmpty } from "react-icons/vsc";
import ProfileRepositoriesStatsCard from "./profile-repositories-stats-card/ProfileRepositoriesStatsCard";

type ProfileRepositoriesStatsProps = {
  repository: any;
};

const ProfileRepositoriesStats = ({
  repository,
}: ProfileRepositoriesStatsProps) => {
  return (
    <ul className="flex flex-col justify-between pl-4 border-l border-gray-300 text-gray-500">
      <ProfileRepositoriesStatsCard
        label="Stars"
        value={repository.stargazers_count}
        icon={
          <VscStarEmpty
            style={{ height: "18px", width: "18px" }}
            className="mr-1"
          />
        }
      />
      <ProfileRepositoriesStatsCard
        label="Forks"
        value={repository.forks_count}
        icon={
          <VscRepoForked
            style={{ height: "18px", width: "18px" }}
            className="mr-1"
          />
        }
      />
      <ProfileRepositoriesStatsCard
        label="Issues"
        value={repository.open_issues_count}
        icon={
          <VscIssues
            style={{ height: "18px", width: "18px" }}
            className="mr-1"
          />
        }
      />
    </ul>
  );
};

export default ProfileRepositoriesStats;
