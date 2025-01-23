import ProfileDetailsCard from "./profile-details-card/ProfileDetailsCard";

type ProfileDetailsProps = {
  profile: any;
};

const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      <ProfileDetailsCard label="Followers" value={profile.followers} />
      <ProfileDetailsCard label="Following" value={profile.following} />
      <ProfileDetailsCard label="Repositories" value={profile.public_repos} />
      <ProfileDetailsCard label="Gists" value={profile.public_gists} />
    </div>
  );
};

export default ProfileDetails;
