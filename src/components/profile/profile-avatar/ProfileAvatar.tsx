import { BsGithub } from "react-icons/bs";
import { Link } from "react-router";

type ProfileAvatarProps = {
  profile: any;
};

const ProfileAvatar = ({ profile }: ProfileAvatarProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div>
        <img
          src={profile?.avatar_url}
          width={150}
          height={150}
          alt=""
          className="rounded-full"
        />
      </div>
      {profile.name && <strong className="text-3xl">{profile.name}</strong>}
      <Link to={profile?.html_url} className="flex gap-1 items-center">
        <BsGithub />
        <h1>{profile?.login}</h1>
      </Link>
    </div>
  );
};

export default ProfileAvatar;
