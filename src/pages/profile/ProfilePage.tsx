import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getUser, getUserRepos } from "../../services/github-api/githubAPI";
import { BsGithub } from "react-icons/bs";
import ProfileDetails from "../../components/profile/profile-details/ProfileDetails";
import ProfileRepositories from "../../components/profile/profile-repositories/ProfileRepositories";

const ProfilePage = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState<any>();
  const [profileRepos, setProfileRepos] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      if (username) {
        try {
          const profileData = await getUser(username);
          if (profileData) {
            setProfile(profileData);

            const profileReposData = await getUserRepos(username);
            if (profileReposData) {
              setProfileRepos(profileReposData);
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    };

    fetchUser();
  }, [username]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-40 px-10 py-8 flex flex-col gap-4">
      <div className="w-full bg-white rounded flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div>
            <img
              src={profile.avatar_url}
              width={150}
              height={150}
              alt=""
              className="rounded-full"
            />
          </div>
          <Link to={profile.html_url} className="flex gap-1 items-center">
            <BsGithub />
            <h1>{profile.login}</h1>
          </Link>
        </div>
        <ProfileDetails profile={profile} />
      </div>
      <ProfileRepositories profileRepos={profileRepos} />
    </div>
  );
};

export default ProfilePage;
