import { VscStarEmpty } from "react-icons/vsc";
import { VscIssues } from "react-icons/vsc";
import { VscRepoForked } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

type ProfileRepositoriesProps = {
  profileRepos: any;
};

const ProfileRepositories = ({ profileRepos }: ProfileRepositoriesProps) => {
  if (!profileRepos) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {profileRepos.length &&
        profileRepos.map((repo: any) => (
          <div className="rounded bg-white flex justify-between gap-4 p-6">
            <div className="flex flex-col justify-between">
              <h4 className="text-xl font-semibold tracking-tight">
                {repo.name}
              </h4>
              <p className="text-sm">{repo.description}</p>
              <ul className="flex text-xs mt-6 text-gray-500">
                <li className="mr-4 flex items-center">
                  <SiTypescript className="mr-1" color="rgb(49, 120, 198)" />
                  <strong>{repo.language}</strong>
                </li>
                <li className="">{repo.updated_at}</li>
              </ul>
            </div>
            <ul className="flex flex-col justify-between pl-4 border-l border-gray-300 text-gray-500">
              <li className="flex items-center text-sm">
                <VscStarEmpty width={18} height={18} className="mr-1" />
                <strong className="mr-1">{repo.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li className="flex items-center text-sm">
                <VscRepoForked width={18} height={18} className="mr-1" />
                <strong className="mr-1">{repo.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li className="flex items-center text-sm">
                <VscIssues width={18} height={18} className="mr-1" />
                <strong className="mr-1">{repo.open_issues_count}</strong>
                <span>Issues</span>
              </li>
            </ul>
          </div>
        ))}
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
