import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getUser } from "../../services/github-api/githubAPI";
import { BsGithub } from "react-icons/bs";
import ProfileDetails from "../../components/profile/profile-details/ProfileDetails";
import ProfileRepositories from "../../components/profile/profile-repositories/ProfileRepositories";

const ProfilePage = () => {
  const { profile } = useParams();
  const [userProfile, setUserProfile] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      if (profile) {
        try {
          const userProfileData = await getUser(profile);
          if (userProfileData) {
            setUserProfile(userProfileData);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };

    fetchUser();
  }, [profile]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-40 px-10 py-8 flex flex-col gap-4">
      <div className="w-full bg-white rounded flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div>
            <img
              src={userProfile.avatar_url}
              width={150}
              height={150}
              alt=""
              className="rounded-full"
            />
          </div>
          <Link to={userProfile.html_url} className="flex gap-1 items-center">
            <BsGithub />
            <h1>{userProfile.login}</h1>
          </Link>
        </div>
        <ProfileDetails profile={userProfile} />
      </div>
      <div className="w-full bg-white rounded flex flex-col items-center justify-center gap-4 p-4">
        <ProfileRepositories profile={userProfile} />
      </div>
      <div>{JSON.stringify(userProfile, null, 2)}</div>
    </div>
  );
};

export default ProfilePage;
