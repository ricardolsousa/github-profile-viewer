import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { getUser, getUserRepos } from "../../services/github-api/githubAPI";
import ProfileDetails from "../../components/profile/profile-details/ProfileDetails";
import ProfileRepositories from "../../components/profile/profile-repositories/ProfileRepositories";
import ProfileRepositoriesFilters from "../../components/profile/profile-repositories/profile-repositories-filters/ProfileRepositoriesFilters";
import ProfileRepositoriesCounter from "../../components/profile/profile-repositories/profile-repositories-counter/ProfileRepositoriesCounter";
import ProfileAvatar from "../../components/profile/profile-avatar/ProfileAvatar";

const ProfilePage = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState<any>();
  const [profileRepos, setProfileRepos] = useState<any>();
  const [searchRepos, setSearchRepos] = useState<string>("");
  const [filters, setFilters] = useState<string>("created_at");

  useEffect(() => {
    const fetchUser = async () => {
      if (username) {
        try {
          const profileData = await getUser(username);
          if (profileData) {
            setProfile(profileData);

            const profileRepositories = await getUserRepos(username);
            if (profileRepositories) {
              setProfileRepos(profileRepositories);
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    };

    fetchUser();
  }, [username]);

  const profileFilteredRepos = useMemo(() => {
    return profileRepos
      ?.filter((repository: any) => repository.name.includes(searchRepos))
      .sort((a: any, b: any) =>
        ["stargazers_count", "forks_count", "open_issues_count"].includes(
          filters
        )
          ? b[filters] - a[filters]
          : a[filters]?.localeCompare(b[filters])
      );
  }, [profileRepos, searchRepos, filters]);

  if (!profile || !profileRepos) {
    return <></>;
  }

  return (
    <div className="lg:mx-32 md:mx-1 sm:mx-1 xs:mx-1 lg:px-6 px-4 py-8 flex flex-col gap-4">
      <div className="w-full bg-white rounded flex flex-col items-center justify-center gap-4 p-4">
        <ProfileAvatar profile={profile} />
        <ProfileDetails profile={profile} />
      </div>

      <div className="rounded bg-white p-6">
        <ProfileRepositoriesCounter
          repositoriesCounter={profileFilteredRepos.length}
        />
        <ProfileRepositoriesFilters
          searchRepos={searchRepos}
          setSearchRepos={setSearchRepos}
          filters={filters}
          setFilters={setFilters}
        />
        <ProfileRepositories profileRepos={profileFilteredRepos} />
      </div>
    </div>
  );
};

export default ProfilePage;
