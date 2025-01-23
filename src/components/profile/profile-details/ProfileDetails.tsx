type ProfileDetailsProps = {
  profile: any;
};

const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <div>{profile.followers}</div>
        <div>Followers</div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <div>{profile.following}</div>
        <div>Following</div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <div>{profile.public_repos}</div>
        <div>Repositories</div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <div>{profile.public_gists}</div>
        <div>Gists</div>
      </div>
    </div>
  );
};

export default ProfileDetails;
