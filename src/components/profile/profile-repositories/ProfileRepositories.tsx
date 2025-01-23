import { VscStarEmpty } from "react-icons/vsc";
import { VscIssues } from "react-icons/vsc";
import { VscRepoForked } from "react-icons/vsc";
import { getIconForLanguage } from "../../../utils/icons/iconsUtils";

type ProfileRepositoriesProps = {
  profileRepos: any;
};

const ProfileRepositories = ({ profileRepos }: ProfileRepositoriesProps) => {
  if (!profileRepos) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-2 border-gray-200 gap-4">
      {profileRepos.length &&
        profileRepos.map((repo: any) => {
          const languageData = repo.language
            ? getIconForLanguage(repo.language)
            : null;

          return (
            <div className="flex justify-between gap-4 p-6 border">
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
              <ul className="flex flex-col justify-between pl-4 border-l border-gray-300 text-gray-500">
                <li className="flex items-center text-sm">
                  <VscStarEmpty
                    style={{ height: "18px", width: "18px" }}
                    className="mr-1"
                  />
                  <strong className="mr-1">{repo.stargazers_count}</strong>
                  <span>Stars</span>
                </li>
                <li className="flex items-center text-sm">
                  <VscRepoForked
                    style={{ height: "18px", width: "18px" }}
                    className="mr-1"
                  />
                  <strong className="mr-1">{repo.forks_count}</strong>
                  <span>Forks</span>
                </li>
                <li className="flex items-center text-sm">
                  <VscIssues
                    style={{ height: "18px", width: "18px" }}
                    className="mr-1"
                  />
                  <strong className="mr-1">{repo.open_issues_count}</strong>
                  <span>Issues</span>
                </li>
              </ul>
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
