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
          <div className="rounded bg-white flex justify-center gap-4 p-4">
            <div className="flex flex-col justify-between">
              <h1>{repo.name}</h1>
              <h3>{repo.description}</h3>
              <div className="flex gap-4">
                icon
                <h4>{repo.language}</h4>
                <h4>{repo.updated_at}</h4>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-1">
                icon
                <strong>{repo.stargazers_count}</strong>
                <span>Start</span>
              </div>
              <div className="flex gap-1">
                icon
                <strong>{repo.forks_count}</strong>
                <span>Forks</span>
              </div>
              <div className="flex gap-1">
                icon
                <strong>{repo.open_issues_count}</strong>
                <span>Issues</span>
              </div>
            </div>
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
