import { Link } from "react-router";
import ProfileRepositoriesStats from "./profile-repositories-stats/ProfileRepositoriesStats";
import ProfileRepositoriesLanguage from "./profile-repositories-language/ProfileRepositoriesLanguage";

type ProfileRepositoriesProps = {
  profileRepos: any;
};

const ProfileRepositories = ({ profileRepos }: ProfileRepositoriesProps) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 border-gray-200 gap-4">
      {profileRepos.map((repo: any) => (
        <div className="flex justify-between gap-4 p-6 border rounded">
          <div className="flex flex-col justify-between">
            <Link to={repo?.html_url} className="flex gap-1 items-center">
              <h4 className="text-xl font-semibold tracking-tight">
                {repo.name}
              </h4>
            </Link>
            <p className="text-sm">{repo.description}</p>
            <ul className="flex text-xs mt-6 text-gray-500">
              <ProfileRepositoriesLanguage language={repo.language} />
              <li className="">{repo.updated_at}</li>
            </ul>
          </div>
          <ProfileRepositoriesStats repository={repo} />
        </div>
      ))}
    </div>
  );
};

export default ProfileRepositories;
