type ProfileDetailsProps = {
  profile: any;
};

const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <strong>{profile.followers}</strong>
        <div className="text-sm">Followers</div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <strong>{profile.following}</strong>
        <div className="text-sm">Following</div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <strong>{profile.public_repos}</strong>
        <div className="text-sm">Repositories</div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
        <strong>{profile.public_gists}</strong>
        <div className="text-sm">Gists</div>
      </div>
    </div>
  );
};

export default ProfileDetails;
