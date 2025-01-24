import { getIconForLanguage } from "../../../utils/icons/iconsUtils";
import ProfileRepositoriesStats from "./profile-repositories-stats/ProfileRepositoriesStats";

type ProfileRepositoriesProps = {
  profileRepos: any;
  searchRepos: any;
};

const ProfileRepositories = ({
  profileRepos,
  searchRepos,
}: ProfileRepositoriesProps) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 border-gray-200 gap-4">
      {profileRepos.map((repo: any) => {
        const languageData = repo.language
          ? getIconForLanguage(repo.language)
          : null;

        return (
          <div className="flex justify-between gap-4 p-6 border rounded">
            <div className="flex flex-col justify-between">
              <h4 className="text-xl font-semibold tracking-tight">
                {repo.name}
              </h4>
              <p className="text-sm">{repo.description}</p>
              <ul className="flex text-xs mt-6 text-gray-500">
                {languageData && (
                  <li className="mr-4 flex items-center">
                    <languageData.icon
                      className="mr-1"
                      style={{ height: "14px", width: "14px" }}
                      color={languageData.color}
                    />
                    <strong>{repo.language}</strong>
                  </li>
                )}
                <li className="">{repo.updated_at}</li>
              </ul>
            </div>
            <ProfileRepositoriesStats repository={repo} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileRepositories;

// name;
// html_url;
// updated_at;
// language;
// forks_count;
// open_issues_count;
// description;
